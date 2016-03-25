import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { NgClass } from 'angular2/common';

@Component({
	selector: 'login-bar',
	directives: [ROUTER_DIRECTIVES, NgClass],
	template:`
		<div>
			<div>
				<button [ngClass]="{blue: isOn, invisible: isOn}" (click)="toggle(!isOn)">Slide in on top</button>
				<nav [ngClass]="{invisible: !isOn, visible: isOn}">
					<a class="item" [routerLink]="['/Login']">Login</a>
					<a class="item" [routerLink]="['/SignUp']">Sign Up</a>
					<a class="item" [routerLink]="['/UserPage']">User Page</a>
				</nav>
			</div>
		</div>
	`,
	styles: [`
		.blue {
			color: blue;
			-webkit-animation-name: example; /* Chrome, Safari, Opera */
    		-webkit-animation-duration: 4s; /* Chrome, Safari, Opera */
		}
		.invisible{
			display: none;
		}

		.visible{
			background-color: Black
		}

	/* Chrome, Safari, Opera */
	@-webkit-keyframes example {
	    0%   {background-color: red;}
	    25%  {background-color: yellow;}
	    50%  {background-color: blue;}
	    100% {background-color: green;}
	}

	/* Standard syntax */
	@keyframes example {
	    0%   {background-color: red;}
	    25%  {background-color: yellow;}
	    50%  {background-color: blue;}
	    100% {background-color: green;}
	}
	`]
})

export class LoginBar{

	isOn = false;
	isDisabled = false;

	constructor(){
	}

	toggle(newState) {
		if (!this.isDisabled) {
			this.isOn = newState;
		}
	}
}