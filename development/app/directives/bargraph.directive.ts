/// <reference path="../../../configuration/d3/index.d.ts" />


import { Directive, Injectable, ElementRef, Inject, Attribute, OnChanges } from 'angular2/core'

@Injectable()
	@Directive({
		selector: 'bar-graph',
		inputs: ['data'],
	})

export class Bargraph implements OnChanges {
	data: Array<number>;
	divs: any;
	constructor(
		@Inject(ElementRef) elementRef: ElementRef,
		@Attribute('width') width: string,
		@Attribute('height') height: string) {

		var el: any = elementRef.nativeElement;
		var graph: any = d3.select(el);

		this.divs = graph.
			append('div').
			attr({
				'class': 'chart'
			}).
			style({
				'width': width +  'px',
				'height': height + 'px',
			}).
			selectAll('div')
	}

	render(data: any): void {
		if (!data) return;



		this.divs.data(data).enter().append('div')
			.transition().ease('elastic')
			.style('width', d => d + '%')
			.text(d => d + '%');

 

	}

	ngOnChanges() {
		this.render(this.data);
	}
}
