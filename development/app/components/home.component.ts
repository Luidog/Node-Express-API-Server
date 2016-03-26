import { Component } from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'
import { JwtHelper } from '../services/angular2-jwt'
import { Renderer } from 'angular2/core'

@Component({
	selector: 'home-page',
	directives: [CORE_DIRECTIVES],
	providers: [JwtHelper, Renderer],
	template: `
		<div style="padding-top: 30px">
		    <div class="ui raised segment" *ngIf="!tokenExpired">
    			<h3>You are logged in as:</h3>
    			<p>{{username}}</p>
    		</div>
    		<div class="centered row">
    			<img width="737" height="556" alt="ASCII-apple logo" src="http://api.ning.com/files/OTRhyu1*Ip38MTLctq-b*SBmfLipjdsfOFZ6dd2h8tQ_/ASCIIapple_logo.gif?width=737&amp;height=556">
    		</div>
    	</div>
    	<div>
    		<div>

    			<h1>A Hero REST Server designed by <a href="https://github.com/Luidog"> Lui de la Parra </a></h1>
    		</div>
		</div>
	`
})

export class HomeComponent{
	token: string;
	tokenExpired: boolean;
	username: string

	constructor(private _jwtHelper: JwtHelper, private _renderer: Renderer){
	//	this._renderer.setElementClass('div','blue', true)
	//	this.token = localStorage.getItem('RestServerWebToken');
	//	let decodedToken = this._jwtHelper.decodeToken(this.token);
	//	this.tokenExpired = this._jwtHelper.isTokenExpired(this.token);
	//	this.username = decodedToken.userName;

	}
}