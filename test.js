var test = require('tape')
var xrbPrettify = require('./dist/index').xrbPrettify

test('Prettify amount', function (t) {
  t.plan(1)
  t.equal(xrbPrettify(4002513383), '4,002.513383')
})

test('Prettify amount, no commas', function (t) {
  t.plan(1)
  t.equal(xrbPrettify(4002513383, { commas: false }), 4002.513383)
})

test('Prettify small amount', function (t) {
  t.plan(1)
  t.equal(xrbPrettify(123), '0.000123')
})

test('Prettify small amount, no commas', function (t) {
  t.plan(1)
  t.equal(xrbPrettify(123, { commas: false }), 0.000123)
})

test('Prettify amount, no decimal places', function (t) {
  t.plan(1)
  t.equal(xrbPrettify(4002513383, { decimals: false }), '4,002')
})

test('Prettify small amount, no decimal places', function (t) {
  t.plan(1)
  t.equal(xrbPrettify(123, { decimals: false }), '0')
})

test('Prettify amount, no commas, no decimal places', function (t) {
  t.plan(1)
  t.equal(xrbPrettify(4002513383, { commas: false, decimals: false }), 4002)
})

test('Prettify small amount, no commas, no decimal places', function (t) {
  t.plan(1)
  t.equal(xrbPrettify(123, { commas: false, decimals: false }), 0)
})
