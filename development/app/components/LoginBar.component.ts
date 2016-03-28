import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router } from 'angular2/router';
import { NgClass } from 'angular2/common';
import { UserService } from '../services/UserService.service'

@Component({
	selector: 'login-bar',
	directives: [ROUTER_DIRECTIVES, NgClass],
	providers: [UserService],
	template: `
		<div class="menu-wrap">
		<button class="circular ui icon button" (click)="toggleState(isOn)" id="open-button"><span>Show Login Menu</span></button>
				<nav  class="ui four item menu" [ngClass]="{hidden: !isOn, navbar: isOn}">
					<a class="item" [routerLink]="['/Login']">Login</a>
					<a class="item" [routerLink]="['/SignUp']">Sign Up</a>
					<a class="item" [routerLink]="['/UserPage']">User Page</a>
					<a class="item" (click)="logout()">Logout</a>
				</nav>
		</div>
	`,
	styles: [`
	.hidden{
		display: none;
	}
	.nav li ul {
    position:absolute;
    left:0;
    top:36px;
    z-index:1;
	}
	.navbar{
   	 	overflow:hidden;
    	-webkit-transition:height 200ms ease-in;
    	-moz-transition:height 200ms ease-in;
    	-o-transition:height 200ms ease-in;
    	transition:height 200ms ease-in;
}
.nav ul > li:hover ul li {
    height:36px;
}
	`]
})

export class LoginBar{

	isOn = false;
	isDisabled = false;

	constructor(private _userService: UserService, public router: Router) {
	}

	logout(){
		let loggedOut = this._userService.logOut()
		if (loggedOut){
		//return this.router.parent.navigate(['/Home']);
		}
	}

	toggleState(State) {
		let	newstate = !State
		this.isOn = newstate
	}
}