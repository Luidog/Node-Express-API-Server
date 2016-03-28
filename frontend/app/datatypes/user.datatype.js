System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(obj) {
                    this.firstName = obj && obj.firstName || null;
                    this.lastName = obj && obj.lastName || null;
                    this.username = obj && obj.userName || null;
                    this.email = obj && obj.email || null;
                    this._id = obj && obj.id || null;
                    console.log("User Data for %s %s || Username: %s.", this.firstName, this.lastName, this.username);
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
