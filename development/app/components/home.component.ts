import { Component } from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'
import { UserService } from '../services/UserService.service'

@Component({
	selector: 'home-page',
	directives: [CORE_DIRECTIVES],
	providers: [UserService],
	template: `
		<div style="padding-top: 30px">
		    <div class="ui raised segment" *ngIf="isLoggedIn">
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

export class HomeComponent {
	username: string
	isLoggedIn: boolean;

	constructor(private _userService: UserService) {
		this._userService.currentUser
			.subscribe(res => { console.log(res)})
	}
}