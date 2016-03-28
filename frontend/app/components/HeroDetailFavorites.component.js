System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var HeroFans;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            HeroFans = (function () {
                function HeroFans() {
                }
                HeroFans = __decorate([
                    core_1.Component({
                        selector: 'hero-fans',
                        directives: [common_1.CORE_DIRECTIVES],
                        inputs: ['fan'],
                        template: "\n\t\t<div>\n\t\t\t<p>{{fan?.id}}</p>\n\t\t\t<p>hello</p>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroFans);
                return HeroFans;
            }());
            exports_1("HeroFans", HeroFans);
        }
    }
});
