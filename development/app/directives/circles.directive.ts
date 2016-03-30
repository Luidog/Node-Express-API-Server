/// <reference path="../../../configuration/d3/index.d.ts" />


import { Directive, Injectable, ElementRef, Inject, Attribute, OnChanges } from 'angular2/core'

@Injectable()
	@Directive({
		selector: 'circles',
		inputs: ['data'],
	})

export class Circles implements OnChanges {
	data: Array<number>;
	svgContainer: any;
	constructor(
		@Inject(ElementRef) elementRef: ElementRef,
		@Attribute('width') width: string,
		@Attribute('height') height: string) {

		var el: any = elementRef.nativeElement;
		var svgContainer = d3.select(el);
		//Make an SVG Container
		var svgContainer = d3.select("body").append("svg")
		.attr("width", 200)
		.attr("height", 200);
		
		//Draw the Circle
		var circle = svgContainer.append("circle")
		.attr("cx", 30)
		.attr("cy", 30)
		.attr("r", 20);


	}

	render(data: any): void {
		if (!data) return;



		this.divs.data(data).enter().append('div')
			.transition().ease('elastic')
			.style('width', d => d + '%')
			.text(d => d + '%');

 

	}

	ngOnChanges() {
	}
}
