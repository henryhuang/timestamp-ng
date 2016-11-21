"use strict"

const path = require('path')
const test = require('tape')
const tsng = require('../')

test('time stamp equals', function(t) {
    t.plan(1)
    let dateNow = new Date();
    let ts = new Date(2016, 10, 7).getTime();
    let dateString = '20161107';
    let ts4dateString = tsng({
        date_string: dateString
    });
    t.deepEqual(ts4dateString, ts);
})
