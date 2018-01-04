import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'ng2-cookies';
import { Config } from '../app.config';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class KitchenmasterService {
      url : string;
      //memberid='';
	  accessKey='';
	constructor (private _http: Http, private cookies: CookieService, private conf: Config){
            //this.accessKey = this.cookies.get('hmssessionId');
		    //this.memberid=atob(this.accessKey).split("@_@")[9];
      }
    
      host=this.conf.get('apiUrl');
	hmsauthKey = this.conf.get('hms-auth-key');
	hmsaccessKey = this.cookies.get('hmssessionId');
      authKey = this.conf.get('auth-key');
      
      saveKitchenmaster(param){
		var headers = new Headers();
		headers.append(this.authKey,"Basic YWRtaW46YWRtaW4=");
		headers.append(this.hmsauthKey,this.hmsaccessKey);
            headers.append("Content-Type", "application/json");
            this.url = this.host+"hospitality/addkitchenmaster";
             //console.log(this.url);
		return this._http.post( this.url, JSON.stringify(param), {headers: headers} ).map(res=> res.json());
      }

      updateKitchenmaster(param){
            var headers = new Headers();
		headers.append(this.authKey,"Basic YWRtaW46YWRtaW4=");	
		headers.append(this.hmsauthKey,this.hmsaccessKey);
		headers.append("Content-Type", "application/json");
            this.url = this.host+"hospitality/setkitchenmaster";
             //console.log(this.url);
		return this._http.post(this.url, JSON.stringify(param), {headers: headers}).map(res=> res.json());	 
	}

      getKitchenmaster(param){
		var headers = new Headers();	
		headers.append(this.authKey,"Basic YWRtaW46YWRtaW4=");
		headers.append(this.hmsauthKey,this.hmsaccessKey);
		headers.append("Content-Type", "application/json");
            this.url = this.host+"hospitality/getallkitchenmaster";
            return this._http.post(this.url, JSON.stringify(param), {headers: headers}) .map(res=> res.json());
	}

      DeleteKitchenmaster(param){
            var headers = new Headers();
		var tempData =JSON.stringify(param);
		headers.append(this.authKey,"Basic YWRtaW46YWRtaW4=");
		headers.append(this.hmsauthKey,this.hmsaccessKey);
		headers.append('Content-Type', 'application/json');
		this.url = this.host+"hospitality/delkitchenmaster";
		return this._http.post(this.url, tempData, {headers: headers}).map(res=> res.json());
	}
}