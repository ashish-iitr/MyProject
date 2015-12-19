#ifndef _ICP_API_H_
#define _ICP_API_H_
#define _CRT_SECURE_NO_WARNINGS
#include <stdint.h>

char *httpLogin(char *server, char *usr, char *pass, char *tenant);
char *getCpeIp(char *cpeName, char *iface, char *token, char *server);

/* 0 - Success */
int ftpCheckCpeConnectivity (char *ip);

#define MAX_FILE_DIR_NAME 256

typedef struct fileNode {
    char fileName[MAX_FILE_DIR_NAME];
    char isDir;
    unsigned long size;
    void *next;
} fileNode_t;

void freeFileList(fileNode_t *head);
fileNode_t * ftpList (char *ip, char *dir);
void printFileList(fileNode_t *);

typedef void * ftpDownloadHandle_t;
ftpDownloadHandle_t ftpCreateDownloadHandle();
void ftpFreeDownloadHandle(ftpDownloadHandle_t hl);
uint64_t ftpGetDownloadProgress(ftpDownloadHandle_t hl);
int ftpDownload (char *ip, char *CPEdir, char *srcFile, char *dstFile, ftpDownloadHandle_t hl);

typedef void * ftpUploadHandle_t;
ftpUploadHandle_t ftpCreateUploadHandle();
void ftpFreeUploadHandle(ftpUploadHandle_t hl);
uint64_t ftpGetUploadProgress(ftpUploadHandle_t hl);
int ftpUpload (char *ip, char *CPEdir, char *srcFile, char *dstFile, ftpUploadHandle_t hl);

int ftpRename (char *ip, char *dir, char *srcFile, char *dstFile);//ip cpedir oldname newname
int ftpRemove (char *ip, char *dir, char *file);//ip cpedir filename

#endif /* _ICP_API_H_ */
