System.register(['angular2/core', 'angular2/router', 'angular2/common', '../services/UserService.service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, UserService_service_1;
    var LoginBar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (UserService_service_1_1) {
                UserService_service_1 = UserService_service_1_1;
            }],
        execute: function() {
            LoginBar = (function () {
                function LoginBar(_userService, router) {
                    this._userService = _userService;
                    this.router = router;
                    this.isOn = false;
                    this.isDisabled = false;
                }
                LoginBar.prototype.logout = function () {
                    var loggedOut = this._userService.logOut();
                    if (loggedOut) {
                    }
                };
                LoginBar.prototype.toggleState = function (State) {
                    var newstate = !State;
                    this.isOn = newstate;
                };
                LoginBar.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.currentUser
                        .subscribe(function (res) { _this.currentUser = res; console.log(res); });
                };
                LoginBar = __decorate([
                    core_1.Component({
                        selector: 'login-bar',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.NgClass],
                        template: "\n\t\t<div class=\"menu-wrap\">\n\t\t<button class=\"circular ui icon button\" (click)=\"toggleState(isOn)\" id=\"open-button\"><span *ngIf='!currentUser'>Show Login Menu</span><span *ngIf='currentUser'>{{currentUser?.username}}</span></button>\n\t\t\t\t<nav  class=\"ui four item menu\" [ngClass]=\"{hidden: !isOn, navbar: isOn}\">\n\t\t\t\t\t<a class=\"item\" [routerLink]=\"['/Login']\">Login</a>\n\t\t\t\t\t<a class=\"item\" [routerLink]=\"['/SignUp']\">Sign Up</a>\n\t\t\t\t\t<a class=\"item\" [routerLink]=\"['/UserPage']\">User Page</a>\n\t\t\t\t\t<a class=\"item\" (click)=\"logout()\">Logout</a>\n\t\t\t\t</nav>\n\t\t</div>\n\t",
                        styles: ["\n\t.hidden{\n\t\tdisplay: none;\n\t}\n\t.nav li ul {\n    position:absolute;\n    left:0;\n    top:36px;\n    z-index:1;\n\t}\n\t.navbar{\n   \t \toverflow:hidden;\n    \t-webkit-transition:height 200ms ease-in;\n    \t-moz-transition:height 200ms ease-in;\n    \t-o-transition:height 200ms ease-in;\n    \ttransition:height 200ms ease-in;\n}\n.nav ul > li:hover ul li {\n    height:36px;\n}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [UserService_service_1.UserService, router_1.Router])
                ], LoginBar);
                return LoginBar;
            }());
            exports_1("LoginBar", LoginBar);
        }
    }
});
