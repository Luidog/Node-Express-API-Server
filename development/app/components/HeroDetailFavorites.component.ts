import { Component } from 'angular2/core'
import { CORE_DIRECTIVES } from 'angular2/common';


@Component({
	selector:'hero-fans',
	directives: [CORE_DIRECTIVES],
	inputs: ['fan'],
	template: `
		<div>
			<p>{{fan?.id}}</p>
			<p>hello</p>
		</div>
	`

})

export class HeroFans{
	fans: any;

	constructor(){

	}
}