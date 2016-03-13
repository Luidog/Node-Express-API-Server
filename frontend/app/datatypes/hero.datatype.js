System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero(firstName, lastName, heroName, _id) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.heroName = heroName;
                    this._id = _id;
                    console.log("New hero created. || Name: %s %s Hero Name: %s || id: %s", firstName, lastName, heroName, _id);
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
