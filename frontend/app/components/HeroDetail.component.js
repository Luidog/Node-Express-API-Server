System.register(['angular2/core', "angular2/router", 'angular2/common', '../services/HeroService.service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, HeroService_service_1, router_2;
    var HeroDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
                        .subscribe(function (selectedHero) { return _this.hero = selectedHero; });
                };
                HeroDetail = __decorate([
                    core_1.Component({
                        selector: 'hero-details',
                        directives: [router_2.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        providers: [HeroService_service_1.HeroService],
                        template: "\n\t\t<div style=\"padding-top: 30px\">\n\t\t\t<h1>Hero</h1>\n\t\t\t<div style=\"border: 2px solid grey; border-radius:5px; margin:5px !important;\" class=\"content\">\n\t\t\t\t<div>\n\t\t\t\t\t<h1>{{ hero?.heroName }}</h1>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<h2>{{ hero?.firstName }} {{hero?.lastName}} </h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ui relaxed divided list\"  *ngFor=\"#power of hero?.powers\">\n\t\t\t\t\t<p class=\"item\">{{ power.power }}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<button [routerLink]=\"['/Heroes']\" class=\"ui button\">\n\t\t\t\t\tBack\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, HeroService_service_1.HeroService, router_1.Router])
                ], HeroDetail);
                return HeroDetail;
            }());
            exports_1("HeroDetail", HeroDetail);
        }
    }
});
