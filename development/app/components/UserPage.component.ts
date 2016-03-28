import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { UserService } from '../services/UserService.service';
import {Router, RouteParams, CanActivate} from 'angular2/router';
import {tokenNotExpired} from '../services/angular2-jwt';


@Component({
	selector: 'user-page',
	providers: [UserService],
	directives: [CORE_DIRECTIVES],
	template: `
	<div class="ui divided list">
		<h1>User</h1>
		<div style="border: 2px solid grey; border-radius:5px; margin:5px !important;" class="content">
			<div  class="item">
				<div class="content">
			 	<h1> {{user?.username}}  || {{ user?.firstName }} {{ user?.lastName}}</h1>
			 	<h2>{{user?.email }}</h2>
			 	</div>
			 	<div class="description">
			 		<p> Role: {{ user?.role }} </p>
			 	</div>
			 	<div  class="content" *ngFor="#user of users">
					<div style="border: 2px solid grey; border-radius:5px; margin:5px !important;" class="item" *ngIf="user.role != 'admin'">
						<div class="content">
						<button (click)="deleteUser(user._id)">Delete user</button>
			 				<h1> {{user?.username }}  || {{ user?.firstName }} {{ user?.lastName }}</h1>
			 				<h2> {{user?.email }} </h2>
			 			<button (click)="makeAdmin()">make Admin</button>
			 			</div>
			 		<div class="description">
			 			<p> Role: {{ user?.role }} </p>
			 		</div>
			 	</div>
			</div>
		</div>
		</div>
	</div>
	`
})
	
export class UserPage implements OnInit {
	user: any;
	users: any;

	constructor(private _userService: UserService, public router: Router) {
	}

	ngOnInit() {

		if (tokenNotExpired('RestServerWebToken')) {
			this._userService.getUserInfo()
				.subscribe(res => this.user = res)
			this._userService.getUsers()
				.subscribe(res => this.users = res)
		} else {
			return this.router.parent.navigate(['/Login']);

			
		}
	}

	deleteUser(userId: string){
		this._userService.deleteUser(userId)
			.subscribe(res => {console.log('hello')})

	}


}