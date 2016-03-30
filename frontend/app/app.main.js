/// <reference path="../../configuration/es6-shim.d.ts" />
System.register(['./services/UserService.service', 'angular2/platform/browser', 'angular2/core', './components/HeroForm.component', './components/HeroDetail.component', './components/HeroList.component', './components/NothingHere.component', './components/Home.component', './components/login.component', './components/LoginBar.component', './components/SignUp.component', './components/UserPage.component', 'angular2/http', 'angular2/router', './services/angular2-jwt'], function(exports_1, context_1) {
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
    var UserService_service_1, browser_1, core_1, HeroForm_component_1, HeroDetail_component_1, HeroList_component_1, NothingHere_component_1, Home_component_1, login_component_1, LoginBar_component_1, SignUp_component_1, UserPage_component_1, http_1, router_1, angular2_jwt_1, core_2;
    var HeroApp;
    return {
        setters:[
            function (UserService_service_1_1) {
                UserService_service_1 = UserService_service_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (HeroForm_component_1_1) {
                HeroForm_component_1 = HeroForm_component_1_1;
            },
            function (HeroDetail_component_1_1) {
                HeroDetail_component_1 = HeroDetail_component_1_1;
            },
            function (HeroList_component_1_1) {
                HeroList_component_1 = HeroList_component_1_1;
            },
            function (NothingHere_component_1_1) {
                NothingHere_component_1 = NothingHere_component_1_1;
            },
            function (Home_component_1_1) {
                Home_component_1 = Home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (LoginBar_component_1_1) {
                LoginBar_component_1 = LoginBar_component_1_1;
            },
            function (SignUp_component_1_1) {
                SignUp_component_1 = SignUp_component_1_1;
            },
            function (UserPage_component_1_1) {
                UserPage_component_1 = UserPage_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            HeroApp = (function () {
                function HeroApp(userService) {
                    this.userService = userService;
                }
                HeroApp = __decorate([
                    core_1.Component({
                        selector: 'hero-app',
                        directives: [router_1.ROUTER_DIRECTIVES, LoginBar_component_1.LoginBar],
                        template: "\n    <div class=\"inner\">  \n        <div>      \n            <nav class=\"ui three item menu\">\n                <a class=\"item\" [routerLink]=\"['/Home']\">Home</a>\n                <a class=\"item\" [routerLink]=\"['/Heroes']\">Hero List</a>\n                <a class=\"item\" [routerLink]=\"['/AddAHero']\">Add A Hero</a>\n            </nav>\n            <div>\n                <div class=\"ui three column centered grid\">\n                    <router-outlet></router-outlet>\n                </div>\n            </div>           \n        </div>\n    </div>\n    <div class=\"outer\">\n        <login-bar></login-bar> \n    </div>\n\n  ",
                        styles: ["\n    .outer {\n                overflow: hidden;\n       position: relative;\n    }\n\n    .inner {\n        position: relative;\n        height: 100%;\n        width: 100%;\n\n    }\n  "]
                    }),
                    router_1.RouteConfig([
                        { path: '/Home', name: 'Home', component: Home_component_1.HomeComponent },
                        { path: '/addahero', name: 'AddAHero', component: HeroForm_component_1.HeroForm },
                        { path: '/heroes', name: 'Heroes', component: HeroList_component_1.HeroList },
                        { path: '/hero/:_id', name: 'HeroDetail', component: HeroDetail_component_1.HeroDetail },
                        { path: '/', name: 'root', redirectTo: ['/Home'] },
                        { path: '/nothinghere', name: 'NothingHere', component: NothingHere_component_1.NothingHere },
                        { path: '/Login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/SignUp', name: 'SignUp', component: SignUp_component_1.SignUpComponent },
                        { path: '/UserPage', name: 'UserPage', component: UserPage_component_1.UserPage },
                    ]), 
                    __metadata('design:paramtypes', [UserService_service_1.UserService])
                ], HeroApp);
                return HeroApp;
            }());
            exports_1("HeroApp", HeroApp);
            browser_1.bootstrap(HeroApp, [http_1.HTTP_PROVIDERS, UserService_service_1.UserService, router_1.ROUTER_PROVIDERS, core_1.provide(angular2_jwt_1.AuthHttp, {
                    useFactory: function (http) {
                        return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
                            tokenName: 'RestServerWebToken'
                        }), http);
                    },
                    deps: [http_1.Http]
                }), core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }), angular2_jwt_1.JwtHelper]);
        }
    }
});
