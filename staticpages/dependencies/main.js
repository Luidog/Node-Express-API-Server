"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var common_1 = require('angular2/common');
var http_1 = require('angular2/http');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'hello-world',
            directives: [common_1.FORM_DIRECTIVES],
            template: "\n    \t<div>\n    \t<h2> Hero Form </h2>\n    \t<form #f='ngForm' (ngSubmit)=\"onSubmit(f.value)\">\n    \t\t<div>\n    \t\t    <label>First Name</label>\n    \t\t\t<input type=\"text\" id=\"skuInput\" placeholder=\"First Name\" ngControl=\"firstName\">\n    \t\t\t<label>Last Name</label>\n    \t\t\t<input type=\"text\" id=\"skuInput\" placeholder=\"Last Name\" ngControl=\"lastName\">\n    \t\t\t<label>Hero Name</label>\n    \t\t\t<input type=\"text\" id=\"skuInput\" placeholder=\"Hero Name\" ngControl=\"heroName\">\n    \t\t</div>\n    \t\t<button type=\"submit\">Submit</button>\n    \t</form>\n    \t</div>\n    "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
browser_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS]);
