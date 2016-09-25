var test = require('tape');
var sut = require('../js/app.js')

test('isMatch test', function() {
    t.equal(true, true);
});

test('timing test', function (t) {
    // Plan how many assertions should happen
    t.plan(2);

    t.equal(typeof Date.now, 'function');
    var start = Date.now();

    setTimeout(function () {
        t.equal(Date.now() - start, 100);
    }, 100);
});
