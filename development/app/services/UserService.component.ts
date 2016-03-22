import { Http, Headers, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import 'rxjs/Rx'; 
import { contentHeaders } from '../common/headers';

@Injectable()
export class UserService{
	baseURL: string;
	authURL: string;
	apiURL: string;

	constructor(public http: Http) {
        console.log('User Service Created.', http)
        this.baseURL = 'http://localhost:3000/';
        this.authURL = 'auth/local'
        this.apiURL = 'api/users/'
    }


	login(email, password) {
		let body = JSON.stringify({ email, password });
		return this.http.post(this.baseURL + this.authURL, body, { headers: contentHeaders })
			.map(res => { return res.json().token })
			.subscribe( response => { localStorage.setItem('RestServerWebToken', response) }, error => { alert(error.text());});		
	}

	signUp(firstname, lastname, email, password) {
		let body = { 'firstName': firstname, 'lastName': lastname, 'email': email, 'password': password });
		console.log(body)
		let newRequest: string = this._toURLEncodedString(body)
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
}