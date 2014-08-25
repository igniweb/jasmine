/* global define */
define(function () {
    'use strict';

    var self = {};

    self.add = function () {
        var operands = Array.prototype.slice.call(arguments);
        var total    = 0;

        operands.forEach(function (value) {
            total += parseInt(value);
        });

        return total;
    };

    console.log('Numbers module');

    return self;
});
