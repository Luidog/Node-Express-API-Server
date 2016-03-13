import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from "angular2/router";
import { Hero } from '../datatypes/hero.datatype';
import { HeroService } from '../services/HeroService.service';

@Component({
	selector: 'hero-details',
	providers: [HeroService],
	template:`
		<div>
			<div>
				<p>hero goes here</p>
				<p>{{ firstName }}</p>
			</div>
		</div>
	`
})

export class HeroDetail implements OnInit {
	_id: string;
	hero: any;

	constructor(private _routeParams: RouteParams, private _heroService: HeroService, private _router: Router){
		
	}

	ngOnInit() {
		let _id = this._routeParams.get("_id")
		this._heroService.getHero(_id)
			.subscribe(selectedHero => this.hero = new Hero(selectedHero.firstName, selectedHero.lastName, selectedHero.heroName, selectedHero._id))
		console.log(this.hero)

	}
}