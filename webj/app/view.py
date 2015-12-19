
from __future__ import print_function
from flask import render_template, jsonify, Flask, request, session
from app import app
import json, sys, os, commands
import redis
import spwd
import pwd
from os import path
from crypt import crypt
from re import compile as compile_regex
from functools import wraps
from flask import g, request, redirect, url_for
from flask.ext.login import current_user

app.secret_key = 'F12Zr47j\3yX R~X@H!jmM]Lwf/,?KT'

CPE_CONFIG_FILE = "/home/ashish/ics/ica/site_ic2.json"

# conn = redis.Redis()
# conn.set("username", "ionos@ionos.com")
# conn.set("password", "ionos@123")

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
    	print("login_required Called")
    	g.user = session['user']
        if g.user is None:
            return redirect(url_for('default')) #redirect(url_for('default', next=request.url))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/logout')
def clearsession():
    print("Clear the session called")
    session.clear()
    session['user'] = None
    # Redirect the user to the main page
    return redirect(url_for('default'))

@app.route('/')
def default():
	print("login Called")
	return render_template("login.html")

@app.route('/register')
def register():
	print("register called")
	return render_template("register.html")	

@app.route('/cpeInfo')
def webj_cpeInfo():
    try:
        with open(CPE_CONFIG_FILE, "r") as f:
            cpeInfo = json.load(f)
    except IOError:
        print("Error loading json file", file=sys.stderr)
  
    return jsonify({'cpeInfo':cpeInfo})   


@app.route('/updateCpeInfo',methods=['GET', 'POST'])
def updateCpeInfo():
	try:
		print("updateCpe",request.method )
		jsonData = request.data
		print (jsonData)
		if request.method == 'POST':
			with open(CPE_CONFIG_FILE, "w") as f:
				f.write(jsonData)
				f.close()
			return (jsonify({'cpeInfo':jsonData}))
		return jsonify({'cpeInfo':"get"})
	except IOError:
		print("Error in updating file", file=sys.stderr)

@app.route('/nfsMount',methods=['GET', 'POST'])
def nfsMount():
	try:
		print("nfsMount called")
		jsonData = request.json
		print (jsonData)
		address = jsonData["nfsData"]["address"]
		path = jsonData["nfsData"]["path"]
		localpath = jsonData["nfsData"]["localpath"]
		print (localpath)
		cmnd = "mount "+ address+':' + path +" "+localpath     # mount       1.1.1.1:/var/nfs      /home/ashis/nfs_mount
		print(cmnd)
		os.system(cmnd)
		return 'OK'
	except IOError:
		print("Error in nfs Mount", file=sys.stderr)

@app.route('/nfsUnmount',methods=['GET', 'POST'])
def nfsunmount():
	try:
		print("nfsUnmount called")
		jsonData = request.json
		print (jsonData)
		device = jsonData["nfsData"]["device"]
		print(device)
		cmnd = "umount "+device
		print(cmnd)
		os.system(cmnd)
		return "OK"	
	except IOError:
		print("Error in nfs Unmount", file=sys.stderr)

@app.route('/nfsTable')
def nfsTable():
	try:
		print("nfsTable called")
		cmd = "cat /proc/mounts |grep -i nfs|awk \'{print $1,$2}\'"
		out =  commands.getoutput(cmd)
		print(cmd)
		print (out)
		return out
	except IOError:
		print("Error in nfs table", file=sys.stderr)	

@app.route('/site')
@login_required
def site():
	print("site Called")
	return render_template("site.html",title='Ionos Site')
  

@app.route('/setup')
@login_required
def setup():
	print("setup Called")
	return render_template("setup.html",title='Ionos Setup')

@app.route('/status')
@login_required
def status():
	print("status Called")
	return render_template("status.html",title='Ionos Status')

@app.route('/storage')
@login_required
def storage():
	print("storage Called")
	return render_template("storage.html",title='Ionos Storage')

@app.route('/usbInfo')
def usbInfo():
	try:
		print("usbInfo Called")
		cmd = "blkid -o list"
		driveList = commands.getoutput(cmd)
		print(driveList)
		return driveList
	except IOError:
		print("Error in usb info", file=sys.stderr)

@app.route('/usbmount',methods=['GET', 'POST'])
def usbmount():
	try:
		print("usbMount called")
		jsonData = request.json
		print (jsonData)
		folder = jsonData["usbData"]["folder"]
		device = jsonData["usbData"]["device"]
		print(folder)
		print(device)
		cmnd = "mkdir -p /usr/local/ica/"+folder+" && "+"mount "+device+" /usr/local/ica/"+folder
		print(cmnd)
		os.system(cmnd)
		return "OK"
	except IOError:
		print("Error in Usb mount", file=sys.stderr)

@app.route('/moutedUsb')
def mountedUsb():
	print("mountedUsb called")
	cmd = "df -h"
	driveList = commands.getoutput(cmd)
	print(driveList)
	return driveList

@app.route('/usbUnmount',methods=['GET', 'POST'])
def usbunmount():
	try:
		print("usbUnmount called")
		jsonData = request.json
		print (jsonData)
		device = jsonData["usbData"]["device"]
		print(device)
		cmnd = "umount "+device
		print(cmnd)
		os.system(cmnd)
		return "OK"
	except IOError:
		print("Error in Usb Unmount", file=sys.stderr)

@app.route('/check_auth',methods=['GET', 'POST'])
def check_auth():
	try:
		print("check_auth called")
		jsonData = request.json
		# print (jsonData)
		user = jsonData["LoginData"]["uname"]
		password = jsonData["LoginData"]["pwd"]
		salt_pattern = compile_regex(r"\$.*\$.*\$")
		passwd = "/etc/shadow" if path.exists("/etc/shadow") else "/etc/passwd"
		with open(passwd,"r") as f:
			rows = (line.strip().split(":") for line in f)
			records = [row for row in rows if row[0] == user]
			print(records)
		if records == []:
			return 'FALSE'
		hash = records and records[0][1]
		salt = salt_pattern.match(hash).group()
		

		result = (crypt(password,salt) == hash)
		if result == True:
			session['user'] = user
			# print(session['user'])
			return 'OK'
		session['user'] = None
		return 'FALSE'
	except IOError:
		print("Error in check_auth", file=sys.stderr)	

if __name__ == '__main__':
    app.run(host="0.0.0.0")
