//javascript functions

function onChange(){
 var aa = $(".PriorityDrpdwn option:selected").val();
 alert(aa);
}

function login(){
    try{
       var ret = aa.display($("#username").val(),$("#tenantname").val(),$("#password").val());
        if(ret === "OK")
        {
           aa.close();
        }
        if(ret === "false"){
            alert("Wrong");
        }

    }catch(ex){
        return false;
    }
}

