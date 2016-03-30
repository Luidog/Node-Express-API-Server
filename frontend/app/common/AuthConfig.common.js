System.register(['angular2/http', '../services/angular2-jwt'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, angular2_jwt_1;
    var aConfig;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            exports_1("aConfig", aConfig = {
                useFactory: function (http) {
                    return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
                        tokenName: 'RestServerWebToken'
                    }), http);
                },
                deps: [http_1.Http]
            });
        }
    }
});
