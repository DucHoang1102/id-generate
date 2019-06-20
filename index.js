'use strict';

var randomInteger = function(min, max) {
    return Math.floor( Math.random() * (max - min) ) + min;
} 

var generate = function(opts) {
    if (typeof opts !== 'object')
        return new Error('agrument is a object');

    var result = 0;

    var prefix = opts.prefix ? opts.prefix.toString() : '';
    var min    = opts.min    ? parseInt(opts.min)     : 0;
    var max    = opts.max    ? parseInt(opts.max)     : 0;
    var suffix = opts.suffix ? opts.suffix.toString() : '';
    var number = opts.number === true ? true          : false;

    result = prefix + randomInteger(min, max) + suffix;

    if (number)
        result = parseInt(result);

    return result;

};

module.exports = generate;