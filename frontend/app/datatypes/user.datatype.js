System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(obj) {
                    console.log(obj);
                    this.firstName = obj && obj.firstName || null;
                    this.lastName = obj && obj.lastName || null;
                    this.username = obj && obj.username || null;
                    this.email = obj && obj.email || null;
                    this.id = obj && obj._id || null;
                    console.log("User Created for %s %s || Username: %s. - ID: %s", this.firstName, this.lastName, this.username, this.id);
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
