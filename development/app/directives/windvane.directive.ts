/// <reference path="../../../configuration/d3/index.d.ts" />


import { Directive, Injectable, ElementRef, Inject, Attribute, OnChanges } from 'angular2/core'

@Injectable()
@Directive({
	selector: 'wind-vane',
	inputs: ['data'],
})

export class WindVane implements OnChanges {
	data: Array<number>;
	divs: any;
	constructor(
		@Inject(ElementRef) elementRef: ElementRef,
		@Attribute('width') width: string,
		@Attribute('height') height: string) {

		var el: any = elementRef.nativeElement;
		var parentElement: any = d3.select(el);

		this.divs = parentElement
			.append('svg:svg')
			.attr('class', 'windvane')
	}

	render(data: any): void {




	}