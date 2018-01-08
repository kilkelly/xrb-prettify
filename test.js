var test = require('tape')
var xrbPrettify = require('./dist/index').xrbPrettify

test('Handle incorrect type', function (t) {
  t.plan(1)
  t.equal(xrbPrettify(235580100176034320859259343606608761791), 'XRB_PRETTIFY_DISPLAY_ERROR')
})

test('Prettify amount (default unit: Mxrb)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791'), '235,580,100.176034')
})

test('Prettify amount, no commas (default unit: Mxrb)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { commas: false }), '235580100.176034')
})

test('Prettify amount, no decimal places (default unit: Mxrb)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { decimals: false }), '235,580,100')
})

test('Prettify amount, no commas, no decimal places (default unit: Mxrb)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { commas: false, decimals: false }), '235580100')
})

test('Prettify amount, 10 decimal places (default unit: Mxrb)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { decimalPlaces: 10 }), '235,580,100.1760343208')
})

test('Prettify amount, all decimal places (default unit: Mxrb)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { decimalPlaces: 0 }), '235,580,100.176034320859259343606608761791')
})

test('Prettify amount, no commas, all decimal places (default unit: Mxrb)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { commas: false, decimalPlaces: 0 }), '235580100.176034320859259343606608761791')
})

test('Prettify amount (unit: raw)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { unit: 'raw' }), '235,580,100,176,034,320,859,259,343,606,608,761,791')
})

test('Prettify amount, no commas (unit: raw)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { commas: false, unit: 'raw' }), '235580100176034320859259343606608761791')
})

test('Prettify amount (unit: uxrb)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { unit: 'uxrb' }), '235,580,100,176,034,320,859.259343')
})

test('Prettify amount (unit: mxrb)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { unit: 'mxrb' }), '235,580,100,176,034,320.859259')
})

test('Prettify amount (unit: xrb)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { unit: 'xrb' }), '235,580,100,176,034.320859')
})

test('Prettify amount (unit: kxrb)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { unit: 'kxrb' }), '235,580,100,176.034320')
})

test('Prettify amount (unit: Gxrb)', function (t) {
  t.plan(1)
  t.equal(xrbPrettify('235580100176034320859259343606608761791', { unit: 'Gxrb' }), '235,580.100176')
})

