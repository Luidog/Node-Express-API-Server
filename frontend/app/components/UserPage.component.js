System.register(['angular2/core', 'angular2/common', '../services/UserService.service', 'angular2/router', '../services/angular2-jwt'], function(exports_1, context_1) {
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
    var core_1, common_1, UserService_service_1, router_1, angular2_jwt_1;
    var UserPage;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            UserPage = (function () {
                function UserPage(_userService, router) {
                    this._userService = _userService;
                    this.router = router;
                }
                UserPage.prototype.ngOnInit = function () {
                    var _this = this;
                    if (angular2_jwt_1.tokenNotExpired('RestServerWebToken')) {
                        this._userService.getUserInfo()
                            .subscribe(function (res) { return _this.user = res; });
                        this._userService.getUsers()
                            .subscribe(function (res) { return _this.users = res; });
                    }
                    else {
                        return this.router.parent.navigate(['/Login']);
                    }
                };
                UserPage.prototype.deleteUser = function (userid) {
                    console.log('user with id %s', userid);
                };
                UserPage = __decorate([
                    core_1.Component({
                        selector: 'user-page',
                        providers: [UserService_service_1.UserService],
                        directives: [common_1.CORE_DIRECTIVES],
                        template: "\n\t<div class=\"ui divided list\">\n\t\t<h1>User</h1>\n\t\t<div style=\"border: 2px solid grey; border-radius:5px; margin:5px !important;\" class=\"content\">\n\t\t\t<div  class=\"item\">\n\t\t\t\t<div class=\"content\">\n\t\t\t \t<h1> {{user?.username}}  || {{ user?.firstName }} {{ user?.lastName}}</h1>\n\t\t\t \t<h2>{{user?.email }}</h2>\n\t\t\t \t</div>\n\t\t\t \t<div class=\"description\">\n\t\t\t \t\t<p> Role: {{ user?.role }} </p>\n\t\t\t \t</div>\n\t\t\t \t<div  class=\"content\" *ngFor=\"#user of users\">\n\t\t\t\t\t<div style=\"border: 2px solid grey; border-radius:5px; margin:5px !important;\" class=\"item\" *ngIf=\"user.role != 'admin'\">\n\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t<button (click)=\"deleteUser(user._id)\">Delete user</button>\n\t\t\t \t\t\t\t<h1> {{user?.username }}  || {{ user?.firstName }} {{ user?.lastName }}</h1>\n\t\t\t \t\t\t\t<h2> {{user?.email }} </h2>\n\t\t\t \t\t\t<button (click)=\"makeAdmin()\">make Admin</button>\n\t\t\t \t\t\t</div>\n\t\t\t \t\t<div class=\"description\">\n\t\t\t \t\t\t<p> Role: {{ user?.role }} </p>\n\t\t\t \t\t</div>\n\t\t\t \t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [UserService_service_1.UserService, router_1.Router])
                ], UserPage);
                return UserPage;
            }());
            exports_1("UserPage", UserPage);
        }
    }
});
