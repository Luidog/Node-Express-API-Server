System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Hero;
    return {
        setters:[],
        execute: function() {
            Hero = (function () {
                function Hero(obj) {
                    this.firstName = obj && obj.firstName || null;
                    this.lastName = obj && obj.lastName || null;
                    this.heroName = obj && obj.heroName || null;
                    this.id = obj && obj._id || null;
                    this.powers = obj && obj.powers || null;
                    console.log("Hero Created for %s %s || Heroname: %s. - ID: %s", this.firstName, this.lastName, this.heroName, this.id);
                }
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
