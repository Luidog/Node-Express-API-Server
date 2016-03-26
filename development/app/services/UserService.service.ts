import { Http, Headers, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { AuthHttp, JwtHelper } from './angular2-jwt'; 
import { contentHeaders } from '../common/headers';
import 'rxjs/Rx'; 

@Injectable()
export class UserService{
	baseURL: string;
	authURL: string;
	apiURL: string;
	token: string;

	constructor(public http: Http, private _authHttp: AuthHttp, private _jwtHelper: JwtHelper) {
        console.log('User Service Created.', http)
        this.baseURL = 'http://localhost:3000/';
        this.authURL = 'auth/local'
        this.apiURL = 'api/users/'
    }

    getUserInfo(){
			return this._authHttp.get(this.baseURL + this.apiURL + '/me', { headers: contentHeaders })
				.map(res => res.json())
    }

    getUsers(){
			return this._authHttp.get(this.baseURL + this.apiURL, { headers: contentHeaders })
				.map(res => res.json())
    }


	login(email, password) {
		let body = JSON.stringify({ email, password });
		return this.http.post(this.baseURL + this.authURL, body, { headers: contentHeaders })
			.map(res => { return res.json().token })
			.subscribe( response => { localStorage.setItem('RestServerWebToken', response) }, error => { alert(error.text());});		
	}

	signUp(firstname, lastname, username, email, password) {
		let body = { 'firstName': firstname, 'lastName': lastname, 'username': username, 'email': email, 'password': password };
		console.log(body);
		let newRequest: string = this._toURLEncodedString(body);
		console.log(newRequest)
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.post(this.baseURL + this.apiURL, newRequest, { headers: headers })
			.map(res => { return res.json().token })
			.subscribe( response => { localStorage.setItem('RestServerWebToken', response) }, error => { alert(error.text());});		
	}

	private _toURLEncodedString(obj: any): string {
        let parts = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
            }
        }
        return parts.join("&");
    }
    tokenstuff(){
		let decodedToken = this._jwtHelper.decodeToken(this.token);
		let tokenExpired = this._jwtHelper.isTokenExpired(this.token);
		console.log(decodedToken)
	}

	idFromToken(token: any): string{
		let decodedToken = this._jwtHelper.decodeToken(this.token);
		return decodedToken._id

	}
}