var shoe = require('../');
var test = require('tape');

test('round-trip', function () {
    t.plan(1);
    
    var stream = shoe('/sock');
    var data = '';
    
    stream.pipe(through(function (buf) {
        data += buf;
        if (data === 'BEEP BOOP') {
            t.ok(true, 'got upper-cased data back');
        }
    }));
    
    stream.write('beep boop');
});
