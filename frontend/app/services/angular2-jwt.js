System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var AuthConfig, AuthHttp, JwtHelper;
    /**
     * Checks for presence of token and that token hasn't expired.
     * For use with the @CanActivate router decorator and NgIf
     */
    function tokenNotExpired(tokenName, jwt) {
        var authToken = tokenName || 'id_token';
        var token;
        if (jwt) {
            token = jwt;
        }
        else {
            token = localStorage.getItem(authToken);
        }
        var jwtHelper = new JwtHelper();
        if (!token || jwtHelper.isTokenExpired(token, null)) {
            return false;
        }
        else {
            return true;
        }
    }
    exports_1("tokenNotExpired", tokenNotExpired);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            /**
             * Sets up the authentication configuration.
             */
            AuthConfig = (function () {
                function AuthConfig(config) {
                    var _this = this;
                    this.config = config || {};
                    this.headerName = this.config.headerName || 'Authorization';
                    if (this.config.headerPrefix) {
                        this.headerPrefix = this.config.headerPrefix + ' ';
                    }
                    else {
                        this.headerPrefix = 'Bearer ';
                    }
                    this.tokenName = this.config.tokenName || 'id_token';
                    this.noJwtError = this.config.noJwtError || false;
                    this.tokenGetter = this.config.tokenGetter || (function () { return localStorage.getItem(_this.tokenName); });
                }
                AuthConfig.prototype.getConfig = function () {
                    return {
                        headerName: this.headerName,
                        headerPrefix: this.headerPrefix,
                        tokenName: this.tokenName,
                        tokenGetter: this.tokenGetter,
                        noJwtError: this.noJwtError
                    };
                };
                return AuthConfig;
            }());
            exports_1("AuthConfig", AuthConfig);
            /**
             * Allows for explicit authenticated HTTP requests.
             */
            AuthHttp = (function () {
                function AuthHttp(options, http) {
                    var _this = this;
                    this.http = http;
                    this._config = options.getConfig();
                    this.tokenStream = new Observable_1.Observable(function (obs) {
                        obs.next(_this._config.tokenGetter());
                    });
                }
                AuthHttp.prototype._request = function (url, options) {
                    var request;
                    if (!tokenNotExpired(null, this._config.tokenGetter())) {
                        if (!this._config.noJwtError) {
                            throw 'Invalid JWT';
                        }
                        else {
                            request = this.http.request(url, options);
                        }
                    }
                    else if (typeof url === 'string') {
                        var reqOpts = options || {};
                        if (!reqOpts.headers) {
                            reqOpts.headers = new http_1.Headers();
                        }
                        reqOpts.headers.set(this._config.headerName, this._config.headerPrefix + this._config.tokenGetter());
                        request = this.http.request(url, reqOpts);
                    }
                    else {
                        var req = url;
                        if (!req.headers) {
                            req.headers = new http_1.Headers();
                        }
                        req.headers.set(this._config.headerName, this._config.headerPrefix + this._config.tokenGetter());
                        request = this.http.request(req);
                    }
                    return request;
                };
                AuthHttp.prototype.requestHelper = function (requestArgs, additionalOptions) {
                    var options = new http_1.RequestOptions(requestArgs);
                    if (additionalOptions) {
                        options = options.merge(additionalOptions);
                    }
                    return this._request(new http_1.Request(options));
                };
                AuthHttp.prototype.get = function (url, options) {
                    return this.requestHelper({ url: url, method: http_1.RequestMethod.Get }, options);
                };
                AuthHttp.prototype.post = function (url, body, options) {
                    return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Post }, options);
                };
                AuthHttp.prototype.put = function (url, body, options) {
                    return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Put }, options);
                };
                AuthHttp.prototype.delete = function (url, options) {
                    return this.requestHelper({ url: url, method: http_1.RequestMethod.Delete }, options);
                };
                AuthHttp.prototype.patch = function (url, body, options) {
                    return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Patch }, options);
                };
                AuthHttp.prototype.head = function (url, options) {
                    return this.requestHelper({ url: url, method: http_1.RequestMethod.Head }, options);
                };
                AuthHttp = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [AuthConfig, http_1.Http])
                ], AuthHttp);
                return AuthHttp;
            }());
            exports_1("AuthHttp", AuthHttp);
            /**
             * Helper class to decode and find JWT expiration.
             */
            JwtHelper = (function () {
                function JwtHelper() {
                }
                JwtHelper.prototype.urlBase64Decode = function (str) {
                    var output = str.replace(/-/g, '+').replace(/_/g, '/');
                    switch (output.length % 4) {
                        case 0: {
                            break;
                        }
                        case 2: {
                            output += '==';
                            break;
                        }
                        case 3: {
                            output += '=';
                            break;
                        }
                        default: {
                            throw 'Illegal base64url string!';
                        }
                    }
                    return decodeURIComponent(escape(window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
                };
                JwtHelper.prototype.decodeToken = function (token) {
                    var parts = token.split('.');
                    if (parts.length !== 3) {
                        throw new Error('JWT must have 3 parts');
                    }
                    var decoded = this.urlBase64Decode(parts[1]);
                    if (!decoded) {
                        throw new Error('Cannot decode the token');
                    }
                    return JSON.parse(decoded);
                };
                JwtHelper.prototype.getTokenExpirationDate = function (token) {
                    var decoded;
                    decoded = this.decodeToken(token);
                    if (typeof decoded.exp === "undefined") {
                        return null;
                    }
                    var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
                    date.setUTCSeconds(decoded.exp);
                    return date;
                };
                JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
                    var date = this.getTokenExpirationDate(token);
                    offsetSeconds = offsetSeconds || 0;
                    if (date === null) {
                        return false;
                    }
                    // Token expired?
                    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
                };
                return JwtHelper;
            }());
            exports_1("JwtHelper", JwtHelper);
        }
    }
});
