System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero(firstName, lastName, email, _id) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.email = email;
                    this._id = _id;
                    console.log("User Data for %s %s || Email: %s.", firstName, lastName, email);
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
