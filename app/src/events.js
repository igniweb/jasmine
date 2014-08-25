/* global define, window */
define(function () {
    'use strict';

    var self   = {};
    var events = {};

    self.publish = function (eventName, args) {
        //window.alert('foo');

        if ( ! events[eventName]) {
            return false;
        }

        var subscribers = events[eventName];
        var length      = subscribers.length || 0;
        for (var i = 0 ; i < length ; i++) {
            subscribers[i](args);
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
