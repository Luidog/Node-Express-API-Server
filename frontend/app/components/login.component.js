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
    var LoginComponent;
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
            LoginComponent = (function () {
                function LoginComponent(router, _userService) {
                    this.router = router;
                    this._userService = _userService;
                }
                LoginComponent.prototype.login = function (event, email, password) {
                    event.preventDefault();
                    this._userService.login(email, password);
                    return this.router.parent.navigate(['/Home']);
                };
                LoginComponent.prototype.signup = function (event) {
                    event.preventDefault();
                    this.router.parent.navigateByUrl('/signup');
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        template: "\n  <div style=\"padding-top: 30px\">\n    <h1>Login</h1>\n    <div style=\"width: 500px\">\n      <form class=\"ui form\" role=\"form\">\n        <div style=\"padding-bottom: 10px\">\n          <div style=\"width: 500px\" class=\"field ui input\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" #username  id=\"username\" placeholder=\"Username\">\n          </div>\n          <div style=\"width: 500px\" class=\"field ui input\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\n          </div>\n        <button type=\"submit\" (click)=\"login($event, username.value, password.value)\" class=\"ui button active\">Submit</button>\n        <button [routerLink]=\"['/SignUp']\" class=\"ui button\">Sign Up</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, UserService_service_1.UserService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
