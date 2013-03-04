var test = require('tape');
var restring = require('../');

test('function', function (t) {
    t.plan(2);
    t.same(restring(function() {}), '[function]');
    t.same(restring(function foo() {}), '[function foo]');
});

test('object', function (t) {
    t.plan(2);
    t.same(restring({}), '{} // Object');
    t.same(restring({ foo: 2 }), '{"foo":2} // Object');
});

test('number', function (t) {
    t.plan(2);
    t.same(restring(5), '5 // Number');
    t.same(restring(5.5), '5.5 // Number');
});

test('string', function (t) {
    t.plan(1);
    t.same(restring('hello'), '"hello" // String');
});

test('fractional', function (t) {
    t.plan(1);
    t.same(restring(1/3), '0.3333 // Number');
});

test('decimals', function (t) {
    t.plan(1);
    t.same(restring.decimals(10)(1/3), '0.3333333333 // Number');
    // t.same(restring.decimals(0)(1/3), '0 // Number');
});

test('date', function (t) {
    t.plan(1);
    t.same(restring(new Date('03/03/2003 GMT')), '"2003-03-03T00:00:00.000Z" // Date');
});
