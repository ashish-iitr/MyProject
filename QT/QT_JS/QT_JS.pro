#-------------------------------------------------
#
# Project created by QtCreator 2015-05-27T15:07:07
#
#-------------------------------------------------

QT       += core gui
QT       -= gui
QT       += webkit webkitwidgets

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets

TARGET = QT_JS
TEMPLATE = app

CONFIG   += console
CONFIG   -= app_bundle
SOURCES += main.cpp\
        mainwindow.cpp \

HEADERS  += mainwindow.h \
    icp_api.h

FORMS    += mainwindow.ui

DISTFILES += \
    bootstrap.min.css \
    ionos.css \
    logo.png \
    login.html \
    login.js \
    jquery.js \
    CPE.html \
    config.ini \
    selectCpe.html \
    selectCpe.js \
    img1.jpg \
    document_folder_blue.png \
    manilla_gnome_fs_directory.png \
    bootstrap.min.js
