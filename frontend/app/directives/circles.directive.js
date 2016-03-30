/// <reference path="../../../configuration/d3/index.d.ts" />
System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var Circles;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Circles = (function () {
                function Circles(elementRef, width, height) {
                    var el = elementRef.nativeElement;
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
                Circles.prototype.render = function (data) {
                    if (!data)
                        return;
                    this.divs.data(data).enter().append('div')
                        .transition().ease('elastic')
                        .style('width', function (d) { return d + '%'; })
                        .text(function (d) { return d + '%'; });
                };
                Circles.prototype.ngOnChanges = function () {
                };
                Circles = __decorate([
                    core_1.Injectable(),
                    core_1.Directive({
                        selector: 'circles',
                        inputs: ['data'],
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)),
                    __param(1, core_1.Attribute('width')),
                    __param(2, core_1.Attribute('height')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, String, String])
                ], Circles);
                return Circles;
            }());
            exports_1("Circles", Circles);
        }
    }
});
