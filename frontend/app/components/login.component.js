System.register(['angular2/core', 'angular2/router', 'angular2/common', 'angular2/http', '../common/headers'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, http_1, headers_1;
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
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(router, http) {
                    this.router = router;
                    this.http = http;
                }
                LoginComponent.prototype.login = function (event, email, password) {
                    var _this = this;
                    event.preventDefault();
                    var body = JSON.stringify({ email: email, password: password });
                    this.http.post('http://localhost:3000/auth/local', body, { headers: headers_1.contentHeaders })
                        .subscribe(function (response) {
                        localStorage.setItem('jwt', response.json().id_token);
                        _this.router.parent.navigateByUrl('/Home');
                    }, function (error) {
                        alert(error.text());
                        console.log(error.text());
                    });
                };
                LoginComponent.prototype.signup = function (event) {
                    event.preventDefault();
                    this.router.parent.navigateByUrl('/signup');
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login'
                    }),
                    core_1.View({
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        template: "\n    <div class=\"login jumbotron center-block\">\n  <h1>Login</h1>\n  <form role=\"form\" (submit)=\"login($event, username.value, password.value)\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" #username class=\"form-control\" id=\"username\" placeholder=\"Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" #password class=\"form-control\" id=\"password\" placeholder=\"Password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    <a href=\"/signup\">Click here to Signup</a>\n</form>\n</div>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
