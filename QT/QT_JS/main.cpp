
//#define MAINWINDOW_H
#define _CRT_SECURE_NO_WARNINGS
#include "mainwindow.h"



//main function
int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    w.login();
    return a.exec();

}

#include "main.moc"
