
import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from "angular2/router";
import { Pipe } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Hero } from '../datatypes/hero.datatype';
import { HeroService } from '../services/HeroService.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Pipe({ name: 'derp' })


@Component({
	selector: 'hero-details',
	directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
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
			</div>
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
			.subscribe(selectedHero => this.hero = selectedHero)

	}
}