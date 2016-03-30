
import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from "angular2/router";
import { CORE_DIRECTIVES } from 'angular2/common';
import { Hero } from '../datatypes/hero.datatype';
import { User} from '../datatypes/user.datatype';
import { HeroService } from '../services/HeroService.service';
import { UserService } from '../services/UserService.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { HeroFans } from './HeroDetailFavorites.component'
import { Bargraph } from '../directives/bargraph.directive'
import { Circles } from '../directives/circles.directive'



@Component({
	selector: 'hero-details',
	directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, HeroFans, Bargraph, Circles],
	providers: [HeroService],
	template:`
		<div style="padding-top: 30px">
			<h1>Hero</h1>
			<div style="border: 2px solid grey; border-radius:5px; margin:5px !important;" class="content">
				<div>
					<h1>{{ hero?.heroName }}</h1>
				</div>
				<div>
					<h2>{{ hero?.firstName }} {{hero?.lastName}} </h2>
				</div>
				<div class="ui relaxed divided list"  *ngFor="#power of hero?.powers">
					<p class="item">{{ power.power }}</p>
				</div>
			</div>
			<div>
				<button [routerLink]="['/Heroes']" class="ui button">
					Back
				</button>
				<button *ngIf="currentUser" (click)="addHeroToFavorites(hero?._id)" class="ui button">
					add to {{currentUser}}'s Favorites
				</button>
			</div>
			<div *ngFor="#fan of hero?.fans">
				{{fan | json}}
				<hero-fans [fan]="fan"></hero-fans>
			</div>
			<div>
			</div>
		</div>
	`
})



export class HeroDetail implements OnInit {
	currentUser: User;
	_id: string;
	hero: Hero;
	isLoggedIn: boolean;
	graphData: Array<number>;

	constructor(private _routeParams: RouteParams, private _heroService: HeroService, private _router: Router, private _userService: UserService){
		this.graphData = [10, 20, 30, 40, 60];
		setTimeout(() => this.newData(), 3000)
		
	}

	addHeroToFavorites(heroId){
		this._userService.addFavorite(heroId)
	}

	public newData = () => this.graphData = [40, 10, 80, 20, 30];

	ngOnInit() {
		this._userService.currentUser
			.subscribe(res => { this.currentUser = res; console.log(res) })
		let _id = this._routeParams.get("_id")
		this._heroService.getHero(_id)
			.subscribe(selectedHero => this.hero = selectedHero)

		

	}
}