import { Injectable } from '@angular/core';
import { Observable, interval, pipe } from 'rxjs';
import { switchMap, map, takeWhile } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ApiService {

  public domain =  environment["API_URL"];
  public _url = environment["API_URL"];
  public Pdf_link = environment["Pdf_link"];
  public uplodeimg_url = environment["uplodeimg_url"];
  public jwttoken:any;

  constructor(private _http: HttpClient,
              private _authHttp: HttpClient,
              private cookieService: CookieService
              // public jwtHelper: JwtHelperService,
              // private loggedinService: LoggedinService
              ) {
    //console.log('this.domain');
    //console.log(this.domain);
    cookieService.set('jwttoken','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1ODEwNzUwOTAsImlhdCI6MTU4MDk4ODY5MH0.0k0aE5n5CMAZO4QfuB1EpZgNSmD8mwKFxtE_LutYQiw');
    this.jwttoken=this.cookieService.get('jwttoken');

  }


  isTokenExpired() {

    // const helper = new JwtHelperService();
    // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
    // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
    // console.log('refresh_token',localStorage.getItem('refresh_token'))
    // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
    // console.log('id_token isExpired:',isIdTokenExpired)
    // console.log('refresh_token isExpired:',isRefreshTokenExpired)



  }

  getclientip() {

    console.log('endpoint');

    // this.isTokenExpired()
    var result = this._http.get("http://ipinfo.io/?format=json&token=9797c42b93078a").pipe(map(res => res));

    return result;
  }



  getEndpoint(endpoint: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'access-token': this.cookieService.get('jwttoken')
      })
    };
    console.log('endpoint');
    console.log(endpoint);
    console.log('httpOptions');
    console.log(httpOptions);
    console.log(this.cookieService.get('jwttoken'));

    // this.isTokenExpired()
    var result = this._http.post(this._url + endpoint.source, {}, httpOptions).pipe(map(res => res));

    return result;
  }

  getData(endpoint: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'access-token': this.cookieService.get('jwttoken')
      })
    };
    console.log('endpoint');
    console.log(endpoint);
    console.log('httpOptions');
    console.log(httpOptions);
    console.log(this.cookieService.get('jwttoken'));

    // this.isTokenExpired()
    var result = this._http.post(this._url + 'datalist', endpoint, httpOptions).pipe(map(res => res));

    return result;
  }

  // getData end

  postData(endpoint:any, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.cookieService.get('jwttoken')
      })
    };
    console.log(this.cookieService.get('jwttoken'));
   // console.log('endpoint');
    //console.log(endpoint);
    //console.log('httpOptions');
   // console.log(httpOptions);
    var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map(res => res));
    return result;
  }
  postDatawithoutToken(endpoint:any, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(this.cookieService.get('jwttoken'));
    console.log('endpoint');
    console.log(endpoint);
    var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map(res => res));
    return result;
  }

  postlogin(endpoint:any, data) {
    //console.warn("postlogin",endpoint,data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(this.cookieService.get('jwttoken'));
    console.log('endpoint');
    console.log(endpoint);
    var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map(res => res));
    return result;
  } // postData end



  putData(endpoint:any, data, id:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.cookieService.get('jwttoken')
      })
    };
    console.log(this.cookieService.get('jwttoken'));
    console.log("endpoint");
    console.log(endpoint);
    var result = this._http.put(this.getEndpointUrl(endpoint)+'/'+id, JSON.stringify(data), httpOptions).pipe(map(res => res));
    return result;
  }



  private getEndpointUrl(endpoint: string) {
      return this._url + endpoint;
  }

}
