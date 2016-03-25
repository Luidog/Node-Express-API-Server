
import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { HeroService } from '../services/HeroService.service';
import {Router, RouteParams} from 'angular2/router';
import { Hero } from '../datatypes/hero.datatype';

@Component({
	selector: 'hero-list',
	providers: [HeroService],
	directives: [CORE_DIRECTIVES],
	bindings: [HeroService],
	template:`
	<div style="padding-top: 30px">
	<div class="ui divided list">
		<h1>Hero List</h1>
		<div style="border: 2px solid grey; border-radius:5px; margin:5px !important;" class="content" *ngFor="#hero of heroes">
			<div  class="item" (click)="selectedHero(hero._id)">
				<div class="content">
			 	<h1> {{hero.heroName}}  || {{ hero.firstName }} {{ hero.lastName}}</h1>
			 	</div>
			 	<div class="description">
			 	ID: {{ hero._id }}
			 	</div>
			 </div>
		</div>
	</div>
	</div>
	`
})

export class HeroList implements OnInit {
	heroes: Array<Hero>;

	constructor(private _heroService: HeroService, private _router: Router, routeParams: RouteParams) {
		

	}

	selectedHero(heroId: string) {
		this._router.navigate(['HeroDetail', { _id: heroId }]);
	}

	ngOnInit() {
		this._heroService.getHeroes()
			.subscribe(res => this.heroes = res)
	}


}