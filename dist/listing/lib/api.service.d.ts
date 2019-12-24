/********************* Added By Himadri using Lamda start *************************/
import { ElementRef, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadOutput, UploadInput, UploadFile, UploaderOptions } from 'ngx-uploader';
export declare class ApiService {
    private _http;
    private _authHttp;
    domain_for_fileupload_val: any;
    files: UploadFile[];
    uploadInput: EventEmitter<UploadInput>;
    humanizeBytes: Function;
    dragOver: boolean;
    options: UploaderOptions;
    uploaderInput: ElementRef;
    lengthis: any;
    percentageis: any;
    inprogress: any;
    progress: any;
    uploadtype: any;
    uploaderror: any;
    fileservername: any;
    constructor(_http: HttpClient, _authHttp: HttpClient);
    onUploadOutput(uploadOutput: UploadOutput, arrayvalue: any, uploadtypec: any, uploadpath: any): void;
    isTokenExpired(): void;
    getclientip(): import("rxjs").Observable<Object>;
    getEndpoint(endpoint: any): import("rxjs").Observable<Object>;
    getData(endpoint: any): import("rxjs").Observable<Object>;
    postData(endpoint: any, data: any): import("rxjs").Observable<Object>;
    postDatawithoutToken(endpoint: any, data: any): import("rxjs").Observable<Object>;
    postlogin(endpoint: any, data: any): import("rxjs").Observable<Object>;
    postSearch(link: any, token: any, source: any): import("rxjs").Observable<Object>;
    postSearch1(link: any, source: any): import("rxjs").Observable<Object>;
    putData(endpoint: any, data: any, id: any): import("rxjs").Observable<Object>;
    deteOneData(endpoint: any, data: any, token: any, source: any): import("rxjs").Observable<Object>;
    togglestatus(endpoint: any, data: any, token: any, source: any): import("rxjs").Observable<Object>;
    deteManyData(endpoint: any, data: any, token: any, source: any): import("rxjs").Observable<Object>;
    togglestatusmany(endpoint: any, data: any, val: any, token: any, source: any): import("rxjs").Observable<Object>;
    private getEndpointUrl;
}
<<<<<<< HEAD
/********************* Added By Himadri using Lamda end *************************/ 
=======
/********************* Added By Himadri using Lamda end *************************/
>>>>>>> b5eeb39898e50ac09d74b615aab4976c69566236
