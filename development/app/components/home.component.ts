import { Component } from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'

@Component({
	selector: 'home-page',
	directives: [CORE_DIRECTIVES] ,
	template: `
		<div style="padding-top: 30px">
		    <div class="ui raised segment" *ngIf="token">
    			<h3>Your token is: {{token}}</h3>
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

	constructor(){
		this.token = localStorage.getItem('RestServerWebToken');
		console.log(this.token)

	}
}