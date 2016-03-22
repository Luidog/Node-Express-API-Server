System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Power;
    return {
        setters:[],
        execute: function() {
            Power = (function () {
                function Power(_id, power) {
                    this._id = _id;
                    this.power = power;
                }
                return Power;
            }());
            exports_1("Power", Power);
        }
    }
});
