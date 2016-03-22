System.register(['angular2/core', 'angular2/router', 'angular2/common', '../services/UserService.component'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, UserService_component_1;
    var SignUpComponent;
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
            function (UserService_component_1_1) {
                UserService_component_1 = UserService_component_1_1;
            }],
        execute: function() {
            SignUpComponent = (function () {
                function SignUpComponent(router, _userService) {
                    this.router = router;
                    this._userService = _userService;
                }
                SignUpComponent.prototype.signup = function (event, firstname, lastname, email, password) {
                    event.preventDefault();
                    this._userService.signUp(firstname, lastname, email, password);
                };
                SignUpComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        providers: [UserService_component_1.UserService],
                        template: "\n  <div style=\"padding-top: 30px\">\n    <h1>Sign Up</h1>\n    <div style=\"width: 500px\">\n      <form class=\"ui form\" role=\"form\" (submit)=\"signup($event,firstName.value,lastName.value, email.value, password.value)\">\n        <div style=\"padding-bottom: 10px\">\n        <div style=\"width: 500px\" class=\"field ui input\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" #firstName  id=\"username\" placeholder=\"First Name\">\n          </div>\n          <div style=\"width: 500px\" class=\"field ui input\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" #lastName  id=\"username\" placeholder=\"Last Name\">\n          </div>\n          <div style=\"width: 500px\" class=\"field ui input\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" #email  id=\"username\" placeholder=\"Email\">\n          </div>\n          <div style=\"width: 500px\" class=\"field ui input\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\n          </div>\n        <button type=\"submit\" class=\"ui button active\">Submit</button>\n        <button [routerLink]=\"['/Login']\" class=\"ui button\">Login</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, UserService_component_1.UserService])
                ], SignUpComponent);
                return SignUpComponent;
            }());
            exports_1("SignUpComponent", SignUpComponent);
        }
    }
});
