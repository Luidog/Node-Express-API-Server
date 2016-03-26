import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { NgClass } from 'angular2/common';
import { UserService } from '../services/UserService.service'

@Component({
	selector: 'login-bar',
	directives: [ROUTER_DIRECTIVES, NgClass],
	providers: [UserService],
	template: `
		<div class="menu-wrap">
		<button [ngClass]="{hidden: isOn }" (click)="toggleState(isOn)" id="open-button"><span>Open Menu</span></button>
				<nav [ngClass]="{hidden: !isOn, navbar: isOn}" class="menu">
					<a class="link-list" [routerLink]="['/Login']">Login</a>
					<a class="link-list" [routerLink]="['/SignUp']">Sign Up</a>
					<a class="link-list" [routerLink]="['/UserPage']">User Page</a>
					<a class="link-list" (click)="logout()">Logout</a>
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

	constructor(private _userService: UserService) {
	}

	logout(){
		this._userService.logout()
	}

	toggleState(State) {
		let	newstate = !State
		this.isOn = newstate
	}
}