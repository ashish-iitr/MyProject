
#include "mainwindow.h"
#include "ui_mainwindow.h"

//declaration
QSplitter *splitter;
webView *view,*view1,*viewHtml;
char* cpeName;
QString oldName;
tree *tree1;
QFileSystemModel *model;
QString srcPath;
QProgressBar *progressbar;
int complete1 = 1;
int complete2 = 1;
ftpUploadHandle_t upHandle;
ftpDownloadHandle_t downHandle;
int dnSize;
int upSize;
QProgressBar *progressbar1;
QProgressBar *progressbar2;

tree::tree() :
    QTreeView()
{

}
tree::~tree()
{
   // delete ui;
}
webView::webView() :
    QWebView()
{

}
webView::~webView()
{
   // delete ui;
}

MainWindow::MainWindow() :
    QMainWindow()
{
  splitter = new QSplitter();
  tree1 = new tree();
  viewHtml = new webView();
  progressbar = new QProgressBar();
 // dropEvent(QDropEvent *ev);
  //acceptDrops();
}

MainWindow::~MainWindow()
{
   // delete ui;
}


QString MainWindow::onEvent()

{

 return "OK";

}

void MainWindow::dropEvent(QDropEvent *ev)
{
    qDebug()<<"ashish1";
    QList<QUrl> urls = ev->mimeData()->urls();
    foreach(QUrl url, urls)
    {
        qDebug()<<url.toString();
    }
}


void MainWindow::login()
{
    view = new webView();
    view->resize(1100, 550);
    view->page()->mainFrame()->addToJavaScriptWindowObject("aa", new MainWindow);
    view->load(QUrl::fromLocalFile("D:/QT/QT_JS/login.html"));
    view->show();
}

QString MainWindow::rename()
{
   qDebug()<<"ashish1";
   return "ashish1";
}

QString MainWindow::display(QString name,QString tenant,QString pwd1)
{
    qDebug() << "In display method";
    char* uname = new char[name.length() + 1];
    strcpy(uname, name.toLatin1().constData());
    char* tname = new char[tenant.length() + 1];
    strcpy(tname, tenant.toLatin1().constData());
    char* pwd = new char[pwd1.length() + 1];
    strcpy(pwd, pwd1.toLatin1().constData());
    qDebug() << pwd;
//        char *user = uname;
//        char *pass = pwd;
//        char *ten = tname;
    char *token = NULL;
    //token = httpLogin(server, user, pass, ten);
    qDebug() << token;
    if(true)
    {
        view1 = new webView();
        view1->resize(1100, 550);
        view1->page()->mainFrame()->addToJavaScriptWindowObject("aa", new MainWindow);
        view1->load(QUrl::fromLocalFile("D:/QT/QT_JS/selectCpe.html"));
        view1->show();
        return "OK";
    }
    else
        return "false";


}

void MainWindow::close()
{
    qDebug() << "In close method";
    view->hide();
}

 int MainWindow::showCpeFiles(QString name)
    {

       // char iface[10]= "eth0";
        srcPath = "";
        int success=0;
        cpeName = new char[name.length() + 1];
        strcpy(cpeName, name.toLatin1().constData());
        //ip = getCpeIp(cpeName, iface, token, server);
        qDebug() << "In main1 method";
        //qDebug() << ip;
        //success = ftpCheckCpeConnectivity(ip);
        qDebug() << "success";
        if(true){
            view1->hide();
            displayCpeFiles(NULL);

        }
        else
        {
           //view1->hide();
           qDebug()<<cpeName;
           qDebug()<<"Failed to connect";
        }
        return success;
    }

 void MainWindow::displayCpeFiles(QString CPE)
 {
     qDebug()<<"path name="<<CPE;
     if(CPE !="")
     {
         if(srcPath != CPE )
         {
           srcPath = srcPath+"/"+CPE;
         }
     }
     else
     {
        srcPath = "";
     }
     splitter->close();
     splitter->update();
     splitter->repaint();

     char* dirName = new char[srcPath.length() + 1];
     strcpy(dirName, srcPath.toLatin1().constData());
     fileNode_t *head,*tmp;
     char ip[20]="192.168.1.99";
     qDebug()<<"dirname=="<<dirName;
     head = ftpList (ip, dirName);
     tmp = head;
             if(oldName == "" || CPE == "") {
                 oldName = CPE;
             } else {
                 if(srcPath != CPE ){
                   oldName = oldName + "/" + CPE;
                 }
             }
     viewHtml->page()->mainFrame()->addToJavaScriptWindowObject("aa", new MainWindow);
     QString mypage;
     QTextStream p(&mypage);
     p << "<!DOCTYPE HTML>";
     p <<"<html>";
     p<<"<head><link rel='stylesheet' type='text/css' href='webview.css' />";
     p <<"<link href='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css' rel='stylesheet'>";
     p<<"<script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'></script>";
     p<<"<script src='file:///D:/QT/QT_JS/jquery.js'></script>";
     //p << "<style type='text/css'>body { color:black }; </style>";
     p<<"<script src='file:///D:/QT/QT_JS/selectCpe.js'></script>";
     p<<"</head>";
     p <<"<body>";
     p << "<h5>CPE</h5>";
     p << "<ol class='breadcrumb'>";
     qDebug()<<CPE;
             if(CPE == NULL){
                 qDebug()<<"CPE1";
                 p << "<li class='active'>"<<cpeName<<"</li>";
             }
             else{
                 qDebug()<<"CPE2";
                 p << "<li><a href='javascript:void(0)' onclick = 'cpeContent()'>"<<cpeName<<"</a></li>";
                 p << "<li class='active'>"<<oldName<<"</li>";
             }
      p<<"</ol>";
//      p<<"<div class='row'>";
        p<<"<div class='container'>";
        p<<"<table class='table'>";
        p<<"<thead>";
        p<<"<tr><th>Column A</th><th>Column B</th></tr>";
        p<<"</thead>";
        int i = 0;
       while(tmp!= NULL)
           {

           if(i%2 == 0)
           {
            p<<"<tr>";
           // qDebug()<<"value ="<< i;
           }
              if (tmp->isDir)
              {
                 p<<"<td>";
                 //p<<"<div class='col-lg-3'>";
                 //p<<"<span class='glyphicon glyphicon-remove'></span>";
                 p<< "<a draggable='true' width='336' height='69' href='javascript:void(0)' onclick ='openDir(this.id)' id="<< tmp->fileName<<">";
                 p << "<img src='file:///D:/QT/QT_JS/manilla_gnome_fs_directory.png' class='logo' oncontextmenu='return false;'><br>";
                 p <<"<span>DirName:"<< tmp->fileName <<"</span></a>";
                 p<<"</td>";
                 i++;
              }
              else
              {
                  QString fileName= tmp->fileName;
                  qDebug()<<"fileName="<<fileName;
                  p<<"<td>";
                  //p<<"<div class='col-lg-3'>";
                  p<< "<a href='javascript:void(0)' draggable='true' onmousedown='mouseDown(event,this)'data-name="<<fileName<<" id="<<i<<">";
                  p << "<img src='file:///D:/QT/QT_JS/file.png' class='logo' oncontextmenu='return false;'><br>";
                  float size = tmp->size/(1024*1024);
                  p <<"FileName:"<<fileName<<"<br>"<<"Size: "<<size<<" MB</a>";
                  p<<"</td>";
                  i++;
              }
              if(i%2 == 0)
              {
               p<<"</tr>";
              // qDebug()<<"value ="<< i;
              }

              //p<<"<br><br><br>";
              tmp = (fileNode_t *)tmp->next;
           }
       p<<"</table>";
       p<<"</div>";
                if(head)
               {
                  qDebug()<<"display";
               }
               else
               {
                  p <<"No Contents...";
               }
               freeFileList(head);
               head = NULL;
       p <<"</body></html>";

     viewHtml->setHtml(mypage);

     //QTreeView *tree = new QTreeView();
     //QListView *list = new QListView();

     viewHtml->setUpdatesEnabled(true);
     viewHtml->setAcceptDrops(true);

     model = new QFileSystemModel;

     QString dir("home/");
     model->setRootPath(dir);
     model->setReadOnly(false);
     splitter->resize(1100, 550);
     tree1->resize(1100, 550);
     tree1->update();
     tree1->repaint();
     //list->resize(1100, 550);
     tree1->setModel(model);
     //list->setModel(model);
     tree1->setRootIndex(model->index((dir)));
     tree1->setUpdatesEnabled(true);
     tree1->setSelectionMode(QAbstractItemView::ExtendedSelection);
     tree1->setDragEnabled(true);
     tree1->setTextElideMode(Qt::ElideMiddle);
     tree1->viewport()->setAcceptDrops(true);
     tree1->setAcceptDrops(true);
     tree1->setDropIndicatorShown(true);
     tree1->setDefaultDropAction(Qt::CopyAction);
     tree1->setDragDropMode(QAbstractItemView::DragDrop);
     tree1->setSelectionBehavior(QTreeView::SelectRows);
     //tree1->setTreePosition(2);
     tree1->setAnimated(true);
     tree1->setColumnWidth(0,200);
     tree1->setIndentation(40);
     tree1->setColumnHidden(3,true);
     //QObject::connect(tree1, SIGNAL(clicked(QModelIndex)),this, SLOT(run(QModelIndex)));
     splitter->setAcceptDrops(true);
     //list->setRootIndex(model->index((dir)));
     splitter->addWidget(tree1);
     splitter->addWidget(viewHtml);
     splitter->setWindowTitle("<--Local File System--CPE File System-->");
     splitter->show();
    // qDebug()<<tree1->selectionModel()->selectedRows();
 }

 void MainWindow::displayPopup(QString cpeId)
 {
     char ip[20]="192.168.1.99";
     char* dirNew = new char[srcPath.length() + 1];
     strcpy(dirNew, srcPath.toLatin1().constData());
     char* file = new char[cpeId.length() + 1];
     strcpy(file, cpeId.toLatin1().constData());
     QMessageBox msgBox;
     msgBox.setText("File Name: "+cpeId);
//     QLineEdit* le = new QLineEdit();
//     msgBox.layout()->addWidget(le);
//     le->setText(cpeId);
     QPushButton *deleteButton = msgBox.addButton(tr("Delete"), QMessageBox::ActionRole);
     QPushButton *renameButton = msgBox.addButton(tr("Rename"), QMessageBox::ActionRole);
     QPushButton *cancelButton = msgBox.addButton(QMessageBox::Cancel);
     msgBox.setStyleSheet("font-size:15px;");
     msgBox.setOrientation(Qt::Vertical);
     msgBox.exec();
     if (msgBox.clickedButton() == deleteButton)
     {
         qDebug()<<"Delete";

         qDebug()<<file;
         qDebug()<<dirNew;
         int ret = ftpRemove (ip, dirNew, file);
         qDebug()<<"return value="<<ret;
         if(ret == 0)
         {
             displayCpeFiles(srcPath);
             QMessageBox msgBox;
             msgBox.setStyleSheet("font-size:15px;");
             msgBox.setText("File deleted successfully");
             msgBox.exec();
         }
         else
         {
             QMessageBox msgBox;
             msgBox.setStyleSheet("font-size:15px;");
             msgBox.setText("File deletetion Failed");
             msgBox.exec();
         }



     }
     else if (msgBox.clickedButton() == renameButton)
     {
        qDebug()<<"rename";
//        QDialog *dlgMultiLine =    new QDialog(this);
//        QPlainTextEdit *txtMultiline = new QPlainTextEdit();
//            QGridLayout *gridLayout = new QGridLayout(dlgMultiLine);
//            txtMultiline->setObjectName(QString::fromUtf8("txtMultiline"));
//            gridLayout->addWidget(txtMultiline, 0, 0, 1, 1);
//            QDialogButtonBox *buttonBox = new QDialogButtonBox();
//            buttonBox->setObjectName(QString::fromUtf8("buttonBox"));
//            buttonBox->setOrientation(Qt::Horizontal);
//            buttonBox->setStandardButtons(QDialogButtonBox::Cancel|QDialogButtonBox::Ok);
//            dlgMultiLine->show();
        bool ok;
        QInputDialog* inputDialog = new QInputDialog();
        inputDialog->setOptions(QInputDialog::UseListViewForComboBoxItems);
        inputDialog->resize(10,10);
        QString text = inputDialog->getText(this ,"Rename","New File Name:", QLineEdit::Normal,cpeId, &ok);
        if (ok && !text.isEmpty())
            {
              qDebug()<<"rename new name";
              char* newname = new char[text.length() + 1];
              strcpy(newname, text.toLatin1().constData());
              qDebug()<<text;
              int ret = ftpRename (ip, dirNew, file, newname);//ip cpedir oldname newname
              if(ret == 0)
              {
                  displayCpeFiles(srcPath);
                  QMessageBox msgBox;
                  msgBox.setStyleSheet("font-size:15px;");
                  msgBox.setText("File renamed successfully");
                  msgBox.exec();
              }
              else
              {
                  QMessageBox msgBox;
                  msgBox.setStyleSheet("font-size:15px;");
                  msgBox.setText("File renamed Failed");
                  msgBox.exec();
              }
            }

     }
     else
     {
      qDebug()<<"cancel";
     }
 }

 void tree::dropEvent(QDropEvent *event)
 {
     //splitter->setCursor(Qt::BlankCursor);
     qDebug()<<"event output===="<<event->mimeData()->formats().contains("text/html");
     if (!event->mimeData()->formats().contains("text/html")) {  // check for internal drop
        event->setDropAction(Qt::IgnoreAction);
        QMessageBox msgBox;
        msgBox.setStyleSheet("font-size:15px;");
        msgBox.setText("Internal drag and drop is not allowed");
        msgBox.exec();
        return;
      }
     char ip[20]="192.168.1.99";
     dnSize = event->mimeData()->html().split(":")[3].split(" ")[1].toInt();
     qDebug()<<dnSize;
     QString srcFilePath = event->mimeData()->html().split(":")[2];
     int idx = srcFilePath.lastIndexOf(" ");
     QString srcFile = srcFilePath.mid(0,idx);
     QFileSystemModel *model = new QFileSystemModel;
     const QPoint p = event->pos();
     QString dstFile = model->filePath(tree1->indexAt(p))+"/"+srcFile;
     QFileInfo info1(model->filePath(tree1->indexAt(p)));
     if (!info1.isDir()) {  // check for directory
        event->setDropAction(Qt::IgnoreAction);
        QMessageBox msgBox;
        msgBox.setStyleSheet("font-size:15px;");
        msgBox.setText("Please select a directory to drop");
        msgBox.exec();
        return;
      }
     dstFile.replace("//","/");
     tree1->setStyleSheet("QTreeView::item:hover{background-color:#999966;}");
     downHandle = ftpCreateDownloadHandle();
     download(ip,srcPath,srcFile,dstFile,downHandle);
     //progressbar->close();
 }

 QString tree::download(char *ip, QString dir, QString srcFile, QString dstFile, ftpDownloadHandle_t hl)
 {
   //QApplication::restoreOverrideCursor();
   //Qt::BusyCursor;
   //QApplication::setOverrideCursor(Qt::WaitCursor);
   qDebug()<<"download called";
   qDebug()<<ip;
   qDebug()<<dir;
   qDebug()<<srcFile;
   qDebug()<<dstFile;
   qDebug()<<hl;
   uint64_t aa = ftpGetDownloadProgress(hl);
   qDebug()<<aa;
   progressbar1 = new QProgressBar();
   progressbar1->setRange(0,100);
   progressbar1->show();
   char* dirNew = new char[dir.length() + 1];
   strcpy(dirNew, dir.toLatin1().constData());
   char* srcFileNew = new char[srcFile.length() + 1];
   strcpy(srcFileNew, srcFile.toLatin1().constData());
   char* dstFileNew = new char[dstFile.length() + 1];
   strcpy(dstFileNew, dstFile.toLatin1().constData());
   downLoadThread *thread = new downLoadThread();
   connect(thread, SIGNAL(valueChanged(int)),thread, SLOT(onValueChanged(int)));
   thread->start();
   complete1 = ftpDownload (ip, dirNew, srcFileNew, dstFileNew, hl);
   qDebug()<<"Inside main " <<complete1;
   uint64_t bb = ftpGetDownloadProgress(hl);
   qDebug()<<"Inside main "<< bb;
   ftpFreeDownloadHandle(hl);
   return "suc";
 }
 void tree::dragEnterEvent(QDragEnterEvent *ev)
 {
     qDebug()<<"enters";
     ev->accept();
 }
 void tree::dragLeaveEvent(QDragLeaveEvent *ev)
 {
     qDebug()<<"enterssssssss";
     ev->accept();
 }
 void tree::mouseReleaseEvent(QMouseEvent *ev)
 {
     qDebug()<<"releasee";
     ev->accept();
 }


 void webView::dropEvent(QDropEvent *event)
 {
    //splitter->setCursor(Qt::BlankCursor);
    char ip[20]="192.168.1.99";
    qDebug()<<event->mimeData()->text();
    qDebug()<<event->mimeData()->data("text/plain").size()<<"======";
    QString src = event->mimeData()->text().split("///")[1];
    QFile* file = new QFile(src);
    upSize = file->size();
    qDebug()<<upSize;
    event->acceptProposedAction();
    QString srcFile = src.split("/").last();
    QString dstFile = srcPath;
    //int idx = src.lastIndexOf("/");
    //QString dir = src.mid(0,idx+1);
    //ftpUploadHandle_t upHandle;
    upHandle = ftpCreateUploadHandle();
   // progressbar = new QProgressBar();
    //progressbar->show();
    upload(ip,dstFile,src,srcFile,upHandle);
    //progressbar->close();
 }

 QString webView::upload(char *ip, QString dir, QString srcFile, QString dstFile, ftpUploadHandle_t hl)
 {
    //QCursor::setShape(Qt::WaitCursor);
    complete2 = 1;
    qDebug()<<"----------------------------";
    qDebug()<<complete2;
    qDebug()<<"upload called";
    qDebug()<<ip;
    qDebug()<<dir;
    qDebug()<<srcFile;
    qDebug()<<dstFile;
    qDebug()<<hl;
    char* dirNew = new char[dir.length() + 1];
    strcpy(dirNew, dir.toLatin1().constData());
    char* srcFileNew = new char[srcFile.length() + 1];
    strcpy(srcFileNew, srcFile.toLatin1().constData());
    char* dstFileNew = new char[dstFile.length() + 1];
    strcpy(dstFileNew, dstFile.toLatin1().constData());
    progressbar2 = new QProgressBar();
    progressbar2->setRange(0,100);
    progressbar2->show();
    upLoadThread *thread = new upLoadThread();
    connect(thread, SIGNAL(valueChanged(int)),thread, SLOT(onValueChanged(int)));
    thread->start();
    complete2 = ftpUpload (ip, dirNew, srcFileNew, dstFileNew, hl);
    qDebug()<<"Inside main "<<complete2;
    uint64_t aa = ftpGetUploadProgress(hl);
    qDebug()<<"Inside main "<< aa;
    qDebug()<<"Inside main "<< upSize;
    ftpFreeUploadHandle(hl);
    return "suc";
 }

 // downLoadThread/downLoadThread.cpp
 void downLoadThread::run()
 {
      qDebug() << "hello from downLoadThread thread ==============" << thread()->currentThreadId();
      //update();
      qDebug()<<complete1;
      uint64_t dnSizeInByte = dnSize*1024*1024;
      qDebug()<<dnSizeInByte;
      qDebug()<<downHandle;
      progressbar1->setTextVisible(true);
      progressbar1->setWindowModality(Qt::WindowModal);
      while(complete1 == 1)
       {
          uint64_t bb = ftpGetDownloadProgress(downHandle);
          //qDebug()<<"Inside thread download" <<(bb * 100)/dnSizeInByte;
          int val = (int)((bb * 100)/dnSizeInByte);
          emit valueChanged(val);
       }
       complete1 = 1;
 }

 void downLoadThread::onValueChanged(int count)
 {
    //qDebug()<<"Inside onValueChanged";
    progressbar1->setValue(count);
 }

 // upLoadThread/upLoadThread.cpp
 void upLoadThread::run()
 {
      //QApplication::restoreOverrideCursor();
      qDebug() << "hello from upLoadThread thread ==============" << thread()->currentThreadId();
      //update();
      qDebug()<<complete2;
      uint64_t upSizeInByte = upSize;
      qDebug()<<upSizeInByte;
      qDebug()<<upHandle;
      progressbar2->setTextVisible(true);
      progressbar2->setWindowModality(Qt::WindowModal);
      while(complete2 == 1)
       {
          uint64_t bb = ftpGetUploadProgress(upHandle);
          //qDebug()<<"Inside thread upload" <<bb;
          int val = (int)((bb * 100)/upSizeInByte);
          emit valueChanged(val);
       }
       complete2 = 1;
 }

 void upLoadThread::onValueChanged(int count)
 {
    //qDebug()<<"Inside onValueChanged";
    progressbar2->setValue(count);
 }



