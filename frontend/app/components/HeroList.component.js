System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/HeroService.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, HeroService_service_1;
    var HeroList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (HeroService_service_1_1) {
                HeroService_service_1 = HeroService_service_1_1;
            }],
        execute: function() {
            HeroList = (function () {
                function HeroList(_heroService, _router, routeParams) {
                    this._heroService = _heroService;
                    this._router = _router;
                }
                HeroList.prototype.selectedHero = function (heroId) {
                    this._router.navigate(['HeroDetail', { _id: heroId }]);
                };
                HeroList.prototype.ngOnInit = function () {
                    var _this = this;
                    this._heroService.getHeroes()
                        .subscribe(function (res) { return _this.heroes = res; });
                };
                HeroList = __decorate([
                    core_1.Component({
                        selector: 'hero-list',
                        providers: [HeroService_service_1.HeroService],
                        directives: [common_1.CORE_DIRECTIVES],
                        bindings: [HeroService_service_1.HeroService],
                        template: "\n\t<div style=\"padding-top: 30px\">\n\t<div class=\"ui divided list\">\n\t\t<h1>Hero List</h1>\n\t\t<div style=\"border: 2px solid grey; border-radius:5px; margin:5px !important;\" class=\"content\" *ngFor=\"#hero of heroes\">\n\t\t\t<div  class=\"item\" (click)=\"selectedHero(hero.id)\">\n\t\t\t\t<div class=\"content\">\n\t\t\t \t<h1> {{hero.heroName}}  || {{ hero.firstName }} {{ hero.lastName}}</h1>\n\t\t\t \t</div>\n\t\t\t \t<div class=\"description\">\n\t\t\t \tID: {{ hero.id }}\n\t\t\t \t</div>\n\t\t\t </div>\n\t\t</div>\n\t</div>\n\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [HeroService_service_1.HeroService, router_1.Router, router_1.RouteParams])
                ], HeroList);
                return HeroList;
            }());
            exports_1("HeroList", HeroList);
        }
    }
});
