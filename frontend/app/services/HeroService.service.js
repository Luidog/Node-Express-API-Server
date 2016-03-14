System.register(['angular2/http', 'angular2/core', 'rxjs/Rx', '../datatypes/hero.datatype'], function(exports_1, context_1) {
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
    var http_1, core_1, hero_datatype_1;
    var HeroService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (hero_datatype_1_1) {
                hero_datatype_1 = hero_datatype_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                    console.log('Hero REST Service Created.', http);
                    this.baseurl = 'http://localhost:3000/api/heroes/';
                }
                HeroService.prototype.addAHero = function (heroToAdd) {
                    var newRequest = this._toURLEncodedString(heroToAdd);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post(this.baseurl, newRequest, { headers: headers })
                        .map(function (responseData) {
                        console.log(responseData.json());
                        return responseData.json();
                    });
                };
                HeroService.prototype.getHeroes = function () {
                    return this.http.get(this.baseurl)
                        .map(function (responseData) {
                        return responseData.json();
                    })
                        .map(function (heroes) {
                        var result = [];
                        if (heroes) {
                            heroes.forEach(function (hero) {
                                result.push(new hero_datatype_1.Hero(hero.firstName, hero.lastName, hero.heroName, hero._id, hero.powers));
                            });
                        }
                        return result;
                    });
                };
                HeroService.prototype.getHero = function (id) {
                    return this.http.get(this.baseurl + id)
                        .map(function (res) {
                        return res.json();
                    });
                };
                HeroService.prototype._toURLEncodedString = function (obj) {
                    var parts = [];
                    for (var i in obj) {
                        if (obj.hasOwnProperty(i)) {
                            parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
                        }
                    }
                    return parts.join("&");
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
