System.register(['../services/HeroService.service', 'angular2/core'], function(exports_1, context_1) {
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
    var HeroService_service_1, core_1;
    var HeroForm;
    return {
        setters:[
            function (HeroService_service_1_1) {
                HeroService_service_1 = HeroService_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroForm = (function () {
                function HeroForm(_heroService) {
                    this._heroService = _heroService;
                }
                HeroForm.prototype.makeRequest = function (values) {
                    var _this = this;
                    this._heroService.addAHero(values)
                        .subscribe(function (res) { return _this.hero = res; });
                };
                HeroForm = __decorate([
                    core_1.Component({
                        selector: 'hero-form',
                        providers: [HeroService_service_1.HeroService],
                        template: "\n    <div style=\"padding-top: 30px\">\n        <h1>Add A Hero</h1>\n        <div style=\"width: 500px\">\n            <form class=\"ui form\" #f='ngForm' (ngSubmit)=\"makeRequest(f.value)\">\n                <div style=\"padding-bottom: 10px\">\n                    <div style=\"width: 500px\" class=\"field ui input\">\n                        <label>First Name</label>\n                        <input  type=\"text\" placeholder=\"First Name\" ngControl=\"firstName\">\n                    </div>\n                    <div style=\"width: 500px\" class=\"field ui input\">\n                        <label>Last Name</label>\n                        <input type=\"text\" placeholder=\"Last Name\" ngControl=\"lastName\">\n                    </div>\n                    <div style=\"width: 500px\" class=\"field ui input\">\n                        <label>Hero Name</label>\n                        <input type=\"text\" placeholder=\"Hero Name\" ngControl=\"heroName\">\n                    </div>\n                </div>\n                <button  class=\"ui button active\" type=\"submit\">Submit</button>\n            </form>\n        </div>\n      <div *ngIf=\"hero\">\n          <pre>{{ hero | json}}</pre>\n      </div>\n  </div>\n"
                    }), 
                    __metadata('design:paramtypes', [HeroService_service_1.HeroService])
                ], HeroForm);
                return HeroForm;
            }());
            exports_1("HeroForm", HeroForm);
        }
    }
});
