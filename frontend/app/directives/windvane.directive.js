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
    var WindVane;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WindVane = (function () {
                function WindVane(elementRef, width, height) {
                    var el = elementRef.nativeElement;
                    var parentElement = d3.select(el);
                    this.divs = parentElement
                        .append('svg:svg')
                        .attr('class', 'windvane');
                }
                WindVane.prototype.render = function (data) {
                };
                WindVane = __decorate([
                    core_1.Injectable(),
                    core_1.Directive({
                        selector: 'wind-vane',
                        inputs: ['data'],
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)),
                    __param(1, core_1.Attribute('width')),
                    __param(2, core_1.Attribute('height')), 
                    __metadata('design:paramtypes', [core_1.ElementRef, String, String])
                ], WindVane);
                return WindVane;
            }());
            exports_1("WindVane", WindVane);
        }
    }
});
