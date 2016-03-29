System.register(['angular2/http', 'angular2/core', './angular2-jwt', '../common/headers', 'angular2/router', '../datatypes/user.datatype', 'rxjs/subject/BehaviorSubject'], function(exports_1, context_1) {
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
    var http_1, core_1, angular2_jwt_1, headers_1, router_1, user_datatype_1, BehaviorSubject_1;
    var UserService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_datatype_1_1) {
                user_datatype_1 = user_datatype_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(http, _authHttp, _jwtHelper, router) {
                    this.http = http;
                    this._authHttp = _authHttp;
                    this._jwtHelper = _jwtHelper;
                    this.router = router;
                    this.currentUser = new BehaviorSubject_1.BehaviorSubject(null);
                    this.baseURL = 'http://localhost:3000/';
                    this.authURL = 'auth/local';
                    this.apiURL = 'api/users/';
                    this.token = 'RestServerWebToken';
                }
                UserService.prototype.login = function (email, password) {
                    var _this = this;
                    var body = JSON.stringify({ email: email, password: password });
                    return this.http.post(this.baseURL + this.authURL, body, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (response) { _this.setCurrentUser(response); localStorage.setItem('RestServerWebToken', response.token); }, function (error) { alert(error.text()); });
                };
                UserService.prototype.setCurrentUser = function (newUser) {
                    var nUser = new user_datatype_1.User(newUser);
                    this.currentUser.next(nUser);
                    console.log('this fired');
                };
                UserService.prototype.logOut = function () {
                    localStorage.removeItem(this.token);
                    return true;
                };
                UserService.prototype.isLoggedIn = function () {
                    var token = this._getToken(this.token);
                    console.log(!this._jwtHelper.isTokenExpired(token));
                    return !this._jwtHelper.isTokenExpired(token);
                };
                UserService.prototype.getUserInfo = function () {
                    return this._authHttp.get(this.baseURL + this.apiURL + 'me', { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                UserService.prototype.addFavorite = function (heroId) {
                    var userName = this.getUserName();
                    var userId = this._getIdFromToken();
                    var body = { 'userId': userId, 'heroId': heroId, 'username': userName };
                    console.log(body);
                    var newRequest = this._toURLEncodedString(body);
                    console.log(newRequest);
                    console.log(this.baseURL + this.apiURL + 'addfavorite');
                    var specialHeaders = new http_1.Headers();
                    specialHeaders.append('Accept', 'application/json');
                    specialHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._authHttp.post(this.baseURL + this.apiURL + 'addfavorite', newRequest, { headers: specialHeaders })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        console.log(res);
                    });
                };
                UserService.prototype.getUsers = function () {
                    return this._authHttp.get(this.baseURL + this.apiURL, { headers: headers_1.contentHeaders })
                        .map(function (res) { return res.json(); });
                };
                UserService.prototype.deleteUser = function (userId) {
                    return this._authHttp.delete(this.baseURL + this.apiURL + userId, { headers: headers_1.contentHeaders });
                };
                UserService.prototype.signUp = function (firstname, lastname, username, email, password) {
                    var body = { 'firstName': firstname, 'lastName': lastname, 'username': username, 'email': email, 'password': password };
                    console.log(body);
                    var newRequest = this._toURLEncodedString(body);
                    console.log(newRequest);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post(this.baseURL + this.apiURL, newRequest, { headers: headers })
                        .map(function (res) { return res.json().token; })
                        .subscribe(function (response) { localStorage.setItem('RestServerWebToken', response); }, function (error) { alert(error.text()); });
                };
                UserService.prototype._toURLEncodedString = function (obj) {
                    var parts = [];
                    for (var i in obj) {
                        if (obj.hasOwnProperty(i)) {
                            parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
                        }
                    }
                    return parts.join("&");
                };
                UserService.prototype._getIdFromToken = function () {
                    var token = this._getToken(this.token);
                    var decodedToken = this._jwtHelper.decodeToken(token);
                    console.log(decodedToken._id);
                    return decodedToken._id;
                };
                UserService.prototype.getUserName = function () {
                    var token = this._getToken(this.token);
                    var decodedToken = this._jwtHelper.decodeToken(token);
                    console.log(decodedToken.user);
                    return decodedToken.userName;
                };
                UserService.prototype._getToken = function (tokenName) {
                    var token = localStorage.getItem(tokenName);
                    var decodedToken = this._jwtHelper.decodeToken(token);
                    console.log(decodedToken);
                    if (token) {
                        return token;
                    }
                    else {
                        return "No Token Found";
                    }
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp, angular2_jwt_1.JwtHelper, router_1.Router])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
