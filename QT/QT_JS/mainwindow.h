#ifndef MAINWINDOW_H
#define MAINWINDOW_H
extern "C" {
#include "icp_api.h"
}
#define _CRT_SECURE_NO_WARNINGS
#include <QMainWindow>
#include <Qt>
#include <QDropEvent>
#include <QUrl>
#include <QDebug>
#include <QMimeData>
#include <QApplication>
#include <QtWebKitWidgets/QWebView>
#include <QtWebKitWidgets/QWebFrame>
#include <QtWebKitWidgets/QWebPage>
#include <QSplitter>
#include <QFileSystemModel>
#include <QTreeView>
#include <QListView>
#include <QCoreApplication>
#include <QNetworkAccessManager>
#include <QNetworkRequest>
#include <QNetworkReply>
#include <QUrlQuery>
#include <QWebSettings>
#include <QVariant>
#include <QFileDialog>
#include <QDirModel>
#include <QLabel>
#include <QTreeWidget>
#include <QSettings>
#include <QAbstractItemModel>
#include <QVarLengthArray>
#include <QDragEnterEvent>
#include <QStandardItemModel>
#include <QStringListModel>
#include <QFile>
#include <QMouseEvent>
#include <QDrag>
#include <QAbstractItemView>
#include <QModelIndex>
#include <QFileInfo>
#include <QPoint>
#include <QProgressBar>
#include <QMessageBox>
#include <QDragLeaveEvent>
#include <QThread>
#include <QPalette>
#include <QPushButton>
#include <QLineEdit>
#include <QInputDialog>
#include <QFont>
#include <QPlainTextEdit>
#include <QDialogButtonBox>
#include <QGridLayout>
#include <QDialog>



//#include <QFile>

class MainWindow : public QMainWindow

{

Q_OBJECT

public:
    explicit MainWindow();
    ~MainWindow();
protected:
    void dropEvent(QDropEvent *ev);
    //void dragEnterEvent(QDragEnterEvent *ev);


signals:

 void success(QString json);

 void error(QString json);


public slots:

 void login();
 QString onEvent();
 QString rename();
 QString display(QString name,QString tenant,QString pwd1);
 void close();
 int showCpeFiles(QString name);
 void displayCpeFiles(QString CPE);
 void displayPopup(QString CPE);

};
class tree : public QTreeView

{

Q_OBJECT

public:
    explicit tree();
    ~tree();
protected:
    virtual void dragEnterEvent(QDragEnterEvent *ev);
    virtual void mouseReleaseEvent (QMouseEvent *ev);
    virtual void dropEvent(QDropEvent *event);
    virtual void dragLeaveEvent(QDragLeaveEvent *ev);

signals:

 //void success(QString json);

 //void error(QString json);


public slots:

// void login();
// QString onEvent();
// QString rename();
// QString display(QString name,QString tenant,QString pwd1);
// void close();
// int showCpeFiles(QString name);
// void displayCpeFiles(QString CPE);
 //void run(QModelIndex);
   QString download(char *ip, QString dir, QString srcFile, QString dstFile, ftpDownloadHandle_t hl);

};
class webView : public QWebView

{

Q_OBJECT

public:
    explicit webView();
    ~webView();
protected:
    //void dropEvent(QDropEvent *ev);
    //void dragEnterEvent(QDragEnterEvent *ev);
    //virtual void mousePressEvent(QMouseEvent * event);
    virtual void dropEvent(QDropEvent *event);

signals:

 //void success(QString json);

 //void error(QString json);


public slots:

// void login();
// QString onEvent();
// QString rename();
// QString display(QString name,QString tenant,QString pwd1);
// void close();
// int showCpeFiles(QString name);
// void displayCpeFiles(QString CPE);
 //void run(QModelIndex);
    QString upload(char *ip, QString dir, QString srcFile, QString dstFile, ftpUploadHandle_t hl);

};

class downLoadThread : public QThread
{
    Q_OBJECT
public:
     void run();
signals:
    // To communicate with Gui Thread
    // we need to emit a signal
    void valueChanged(int);

public slots:

    void onValueChanged(int);
};

class upLoadThread : public QThread
{
    Q_OBJECT
public:
     void run();
signals:
    // To communicate with Gui Thread
    // we need to emit a signal
    void valueChanged(int);

public slots:

    void onValueChanged(int);
};



#endif // MAINWINDOW_H
