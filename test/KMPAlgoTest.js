/**
 * Created by omar on 02/02/15.
 */

var assert = require("assert")

var matcher = require("../main/KMPAlgo")("b", "abc")

it('simplest case one match', function(){
  assert.equal(2, matcher());
  assert.equal(-1, matcher());
})

it('"extreme" case', function(){
  var matcher = require("../main/KMPAlgo")("aa", "aaaaababaabaa")
  assert.equal(1, matcher());
  assert.equal(2, matcher());
  assert.equal(3, matcher());
  assert.equal(4, matcher());
  assert.equal(9, matcher());
  assert.equal(12, matcher());
})

it('2 searches mixing: ERROR!', function(){
  var matcher1 = require("../main/KMPAlgo")("hi", "xxhihixxxhix")
  assert.equal(3, matcher1());
  var matcher2 = require("../main/KMPAlgo")("hello", "xxxhelloxxhellox")
  assert.equal(4, matcher1()); // it should be 5!
})

