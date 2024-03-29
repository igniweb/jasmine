/* global define */
define(['events'], function (events) {
    'use strict';

    var self = {};

    self.add = function () {
        var operands = Array.prototype.slice.call(arguments);
        var total    = 0;

        operands.forEach(function (value) {
            if (typeof value === 'string') {
                value = parseInt(value, 10) || 0;
            }

            if (typeof value === 'number') {
                total += value;
            }
        });

        events.publish('added', { operands: operands, result: total });

        return total;
    };

    console.log('Numbers module');

    return self;
});
