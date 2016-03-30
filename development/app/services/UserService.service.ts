import { Http, Headers, Response } from 'angular2/http';
import { Injectable } from 'angular2/core';
import { AuthHttp, JwtHelper } from './angular2-jwt'; 
import { contentHeaders } from '../common/headers.common';
import { Router } from 'angular2/router'
import { User } from '../datatypes/user.datatype'
import { Subject } from 'rxjs/Subject'
import { BehaviorSubject } from 'rxjs/subject/BehaviorSubject';


@Injectable()
export class UserService{
	baseURL: string;
	authURL: string;
	apiURL: string;
	token: string;
	user: User;

	constructor(public http: Http, private _authHttp: AuthHttp, private _jwtHelper: JwtHelper, public router: Router) {
        this.baseURL = 'http://localhost:3000/';
        this.authURL = 'auth/local'
        this.apiURL = 'api/users/'
        this.token = 'RestServerWebToken'
    }

	currentUser: Subject<User> = new BehaviorSubject<User>(null);

	login(email, password) {
		let body = JSON.stringify({ email, password });
		return this.http.post(this.baseURL + this.authURL, body, { headers: contentHeaders })
			.map(res => { return res.json() })
			.subscribe(response => { this.setCurrentUser(response); localStorage.setItem('RestServerWebToken', response.token) }, error => { alert(error.text()); });
	}

	public setCurrentUser(newUser: User): void {
		let nUser =  new User(newUser);
		this.currentUser.next(nUser);
		console.log('this fired')
	}

    logOut(): boolean {
		localStorage.removeItem(this.token)
		return true
    }

	isLoggedIn() {
		let token = this._getToken(this.token)
		console.log(!this._jwtHelper.isTokenExpired(token))
		return !this._jwtHelper.isTokenExpired(token)

    }

	getUserInfo() {
		return this._authHttp.get(this.baseURL + this.apiURL + 'me', { headers: contentHeaders })
			.map(res => res.json())
    }

    addFavorite(heroId: string){
		let username = this.getUsername();
		let userId = this._getIdFromToken();
		let body = { 'userId': userId, 'heroId': heroId, 'username': username };
		console.log(body);
		let newRequest: string = this._toURLEncodedString(body);
		console.log(newRequest);
		console.log(this.baseURL + this.apiURL + 'addfavorite')
		let specialHeaders = new Headers();
		specialHeaders.append('Accept', 'application/json');
        specialHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
		return this._authHttp.post(this.baseURL + this.apiURL + 'addfavorite', newRequest, { headers: specialHeaders })
			.map(res => res.json())
			.subscribe(res => {
				console.log(res)
			})
    }

    getUsers() {
		return this._authHttp.get(this.baseURL + this.apiURL, { headers: contentHeaders })
			.map(res =>  res.json())
			.map((users: Array<any>) => {
                let result: Array<User> = [];
                if (users) {
                    users.forEach((user) => {
                        result.push(
							new User(user));
                    });
                }
                console.log(result)
                return result;
            });
   	}

    deleteUser(userId) {
		return this._authHttp.delete(this.baseURL + this.apiURL + userId, { headers: contentHeaders })
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

	private _getIdFromToken(): string{
		let token = this._getToken(this.token)
		let decodedToken = this._jwtHelper.decodeToken(token);
		console.log(decodedToken._id)
		return decodedToken._id
	}

	getUserName(): string{
		let token = this._getToken(this.token)
		let decodedToken = this._jwtHelper.decodeToken(token);
		console.log(decodedToken.user)
		return decodedToken.userName
	}

	private _getToken(tokenName: string): string{
		let token = localStorage.getItem(tokenName)
		let decodedToken = this._jwtHelper.decodeToken(token);
		console.log(decodedToken)
		if (token){
			return token
		} else {
			return "No Token Found"
		}

	}
}