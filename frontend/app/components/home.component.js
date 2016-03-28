System.register(['angular2/core', 'angular2/common', '../services/UserService.service'], function(exports_1, context_1) {
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
    var core_1, common_1, UserService_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (UserService_service_1_1) {
                UserService_service_1 = UserService_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_userService) {
                    //this.username = this._userService.getUserName()
                    //this.isLoggedIn = this._userService.isLoggedIn()
                    this._userService = _userService;
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home-page',
                        directives: [common_1.CORE_DIRECTIVES],
                        providers: [UserService_service_1.UserService],
                        template: "\n\t\t<div style=\"padding-top: 30px\">\n\t\t    <div class=\"ui raised segment\" *ngIf=\"isLoggedIn\">\n    \t\t\t<h3>You are logged in as:</h3>\n    \t\t\t<p>{{username}}</p>\n    \t\t</div>\n    \t\t<div class=\"centered row\">\n    \t\t\t<img width=\"737\" height=\"556\" alt=\"ASCII-apple logo\" src=\"http://api.ning.com/files/OTRhyu1*Ip38MTLctq-b*SBmfLipjdsfOFZ6dd2h8tQ_/ASCIIapple_logo.gif?width=737&amp;height=556\">\n    \t\t</div>\n    \t</div>\n    \t<div>\n    \t\t<div>\n\n    \t\t\t<h1>A Hero REST Server designed by <a href=\"https://github.com/Luidog\"> Lui de la Parra </a></h1>\n    \t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [UserService_service_1.UserService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
