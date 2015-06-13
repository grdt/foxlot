var _               = require('lodash');


var split = function (content, options) {
    options = options || {};
    options.hash = options.hash || {};

    var separator = options.hash && _.isString(options.hash.separator) ? options.hash.separator : '',
    index = options.hash && options.hash.index ? options.hash.index : 0;

    return content.split(separator)[index];
};

module.exports = split;
