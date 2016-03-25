System.register(['angular2/core', 'angular2/router', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1;
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
            }],
        execute: function() {
            LoginBar = (function () {
                function LoginBar() {
                    this.isOn = false;
                    this.isDisabled = false;
                }
                LoginBar.prototype.toggle = function (newState) {
                    if (!this.isDisabled) {
                        this.isOn = newState;
                    }
                };
                LoginBar = __decorate([
                    core_1.Component({
                        selector: 'login-bar',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.NgClass],
                        template: "\n\t\t<div>\n\t\t\t<div>\n\t\t\t\t<button [ngClass]=\"{blue: isOn, invisible: isOn}\" (click)=\"toggle(!isOn)\">Slide in on top</button>\n\t\t\t\t<nav [ngClass]=\"{invisible: !isOn, visible: isOn}\">\n\t\t\t\t\t<a class=\"item\" [routerLink]=\"['/Login']\">Login</a>\n\t\t\t\t\t<a class=\"item\" [routerLink]=\"['/SignUp']\">Sign Up</a>\n\t\t\t\t\t<a class=\"item\" [routerLink]=\"['/UserPage']\">User Page</a>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t",
                        styles: ["\n\t\t.blue {\n\t\t\tcolor: blue;\n\t\t\t-webkit-animation-name: example; /* Chrome, Safari, Opera */\n    \t\t-webkit-animation-duration: 4s; /* Chrome, Safari, Opera */\n\t\t}\n\t\t.invisible{\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.visible{\n\t\t\tbackground-color: Black\n\t\t}\n\n\t/* Chrome, Safari, Opera */\n\t@-webkit-keyframes example {\n\t    0%   {background-color: red;}\n\t    25%  {background-color: yellow;}\n\t    50%  {background-color: blue;}\n\t    100% {background-color: green;}\n\t}\n\n\t/* Standard syntax */\n\t@keyframes example {\n\t    0%   {background-color: red;}\n\t    25%  {background-color: yellow;}\n\t    50%  {background-color: blue;}\n\t    100% {background-color: green;}\n\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginBar);
                return LoginBar;
            }());
            exports_1("LoginBar", LoginBar);
        }
    }
});
