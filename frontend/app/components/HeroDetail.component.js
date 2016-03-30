System.register(['angular2/core', "angular2/router", 'angular2/common', '../services/HeroService.service', '../services/UserService.service', './HeroDetailFavorites.component', '../directives/bargraph.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, HeroService_service_1, UserService_service_1, router_2, HeroDetailFavorites_component_1, bargraph_directive_1;
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
            },
            function (UserService_service_1_1) {
                UserService_service_1 = UserService_service_1_1;
            },
            function (HeroDetailFavorites_component_1_1) {
                HeroDetailFavorites_component_1 = HeroDetailFavorites_component_1_1;
            },
            function (bargraph_directive_1_1) {
                bargraph_directive_1 = bargraph_directive_1_1;
            }],
        execute: function() {
            HeroDetail = (function () {
                function HeroDetail(_routeParams, _heroService, _router, _userService) {
                    var _this = this;
                    this._routeParams = _routeParams;
                    this._heroService = _heroService;
                    this._router = _router;
                    this._userService = _userService;
                    this.newData = function () { return _this.graphData = [40, 10, 80, 20, 30]; };
                    this.graphData = [10, 20, 30, 40, 60];
                    setTimeout(function () { return _this.newData(); }, 3000);
                }
                HeroDetail.prototype.addHeroToFavorites = function (heroId) {
                    this._userService.addFavorite(heroId);
                };
                HeroDetail.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isLoggedIn = this._userService.isLoggedIn();
                    var _id = this._routeParams.get("_id");
                    this._heroService.getHero(_id)
                        .subscribe(function (selectedHero) { return _this.hero = selectedHero; });
                };
                HeroDetail = __decorate([
                    core_1.Component({
                        selector: 'hero-details',
                        directives: [router_2.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, HeroDetailFavorites_component_1.HeroFans, bargraph_directive_1.Bargraph],
                        providers: [HeroService_service_1.HeroService, UserService_service_1.UserService],
                        template: "\n\t\t<div style=\"padding-top: 30px\">\n\t\t\t<h1>Hero</h1>\n\t\t\t<div style=\"border: 2px solid grey; border-radius:5px; margin:5px !important;\" class=\"content\">\n\t\t\t\t<div>\n\t\t\t\t\t<h1>{{ hero?.heroName }}</h1>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<h2>{{ hero?.firstName }} {{hero?.lastName}} </h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ui relaxed divided list\"  *ngFor=\"#power of hero?.powers\">\n\t\t\t\t\t<p class=\"item\">{{ power.power }}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<button [routerLink]=\"['/Heroes']\" class=\"ui button\">\n\t\t\t\t\tBack\n\t\t\t\t</button>\n\t\t\t\t<button *ngIf=\"isLoggedIn\" (click)=\"addHeroToFavorites(hero?._id)\" class=\"ui button\">\n\t\t\t\t\tadd to Favorites\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div *ngFor=\"#fan of hero?.fans\">\n\t\t\t\t{{fan | json}}\n\t\t\t\t<hero-fans [fan]=\"fan\"></hero-fans>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<bar-graph [data]=\"graphData\" width=\"500\" height=\"130\"></bar-graph>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, HeroService_service_1.HeroService, router_1.Router, UserService_service_1.UserService])
                ], HeroDetail);
                return HeroDetail;
            }());
            exports_1("HeroDetail", HeroDetail);
        }
    }
});
