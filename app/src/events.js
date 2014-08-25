/* global define */
define(function () {
    'use strict';

    var self   = {};
    var events = {};

    self.publish = function (eventName, data) {
        if ( ! events[eventName]) {
            return false;
        }

        var subscribers = events[eventName];
        var length      = subscribers.length || 0;
        for (var i = 0 ; i < length ; i++) {
            subscribers[i](data);
        }

        return true;
    };

    self.subscribe = function (eventName, func) {
        if ( ! events[eventName]) {
            events[eventName] = [];
        }

        events[eventName].push(func);
    };

    self.id = 'events';

    return self;
});
