var jsonify = require('jsonify'),
    Type = require('type-of-is');

var stringify = (function() {
    var DECIMALS = 4;

    function stringify(x) {
        function maxFixed(x) {
            return x
                .toFixed(DECIMALS)
                .replace(/0*$/, '')
                .replace(/\.$/, '');
        }

        function typeComment(x) {
            if (x === null || x === undefined) return '';
            if (Type.of(x)) {
                return ' // ' + Type.string(x);
            } else return '';
        }

        switch (typeof x) {
            case 'function':
                return '[function' +
                    // show function names, if available
                    (x.name ? (' ' + x.name) : '') + ']';
            case 'number':
                return maxFixed(x) + typeComment(x);
            default:
                try {
                    return jsonify.stringify(x) + typeComment(x);
                } catch(e) { return ''; }
        }
    }

    stringify.decimals = function(_) {
        if (!arguments.length) return DECIMALS;
        DECIMALS = _;
        return this;
    };

    return stringify;
})();

if (typeof module !== 'undefined') module.exports = stringify;
