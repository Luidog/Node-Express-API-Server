import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from "angular2/router";
import { Hero } from '../datatypes/hero.datatype';
import { HeroService } from '../services/HeroService.service';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, HashLocationStrategy, LocationStrategy, } from 'angular2/router';

@Component({
	selector: 'hero-details',
	directives: [ROUTER_DIRECTIVES],
	providers: [HeroService],
	template:`
		<div>
			<h1>Hero</h1>
			<div style="border: 2px solid grey; border-radius:5px; margin:5px !important;" class="content">
				<pre>{{ hero | json }}</pre>
			</div>
			<button [routerLink]="['/Heroes']" class="ui button">
			Back
			</button>
		</div>
	`
})

export class HeroDetail implements OnInit {
	_id: string;
	hero: Hero;

	constructor(private _routeParams: RouteParams, private _heroService: HeroService, private _router: Router){
		
	}

	ngOnInit() {
		let _id = this._routeParams.get("_id")
		this._heroService.getHero(_id)
			.subscribe(selectedHero => this.hero = new Hero(selectedHero.firstName, selectedHero.lastName, selectedHero.heroName, selectedHero._id, selectedHero.powers))

	}
}