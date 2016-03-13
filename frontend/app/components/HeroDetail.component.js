System.register(['angular2/core', "angular2/router", '../datatypes/hero.datatype', '../services/HeroService.service'], function(exports_1, context_1) {
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
    var core_1, router_1, hero_datatype_1, HeroService_service_1;
    var HeroDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_datatype_1_1) {
                hero_datatype_1 = hero_datatype_1_1;
            },
            function (HeroService_service_1_1) {
                HeroService_service_1 = HeroService_service_1_1;
            }],
        execute: function() {
            HeroDetail = (function () {
                function HeroDetail(_routeParams, _heroService, _router) {
                    this._routeParams = _routeParams;
                    this._heroService = _heroService;
                    this._router = _router;
                }
                HeroDetail.prototype.ngOnInit = function () {
                    var _this = this;
                    var _id = this._routeParams.get("_id");
                    this._heroService.getHero(_id)
                        .subscribe(function (selectedHero) { return _this.hero = new hero_datatype_1.Hero(selectedHero.firstName, selectedHero.lastName, selectedHero.heroName, selectedHero._id); });
                    console.log(this.hero);
                };
                HeroDetail = __decorate([
                    core_1.Component({
                        selector: 'hero-details',
                        providers: [HeroService_service_1.HeroService],
                        template: "\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<p>hero goes here</p>\n\t\t\t\t<p>{{ firstName }}</p>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, HeroService_service_1.HeroService, router_1.Router])
                ], HeroDetail);
                return HeroDetail;
            }());
            exports_1("HeroDetail", HeroDetail);
        }
    }
});
