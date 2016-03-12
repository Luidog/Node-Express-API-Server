import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { httpService } from 'static/services/httpService.service.ts'

@Component({
	selector: 'hero-list',
	providers: [httpService],
	directives: [CORE_DIRECTIVES],
	template:`
	<div>
		<ul *ngFor="#hero in heroes">
			<li>{{ hero }}</li> 
		</ul>
	</div>
	`
})

export class HeroList{
	heroes: any;

	heroes = ['Miami', 'Sao Paulo', 'New York'];

	constructor(){

	}

	


}