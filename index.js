'use strict';

var randomInteger = function(min, max) {
    return Math.floor( Math.random() * (max - min) ) + min;
} 

exports.generate = function(opts) {
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

exports.generateChar = function(number) {
    var char = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 
        's', 't', 'u', 'v', 'w', 'x', 
        'y', 'z',
    ];

    var result = '';

    for (let i = 0; i < parseInt(number); i++) {
        var indexRandom = randomInteger(0, char.length - 1)
        result += char[indexRandom];
    }
    
    return result;
}