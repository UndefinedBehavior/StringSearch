/**
 * Created by omar on 02/02/15.
 */

var assert = require("assert")
var KMPAlgo = require("../main/KMPAlgo")

it ('simplest case one match', function(){
  var algo = new KMPAlgo.algo("b", "abc")
  assert.equal(2, algo.search())
  assert.equal(-1, algo.search())
})

it('"extreme" case', function(){
  var algo = new KMPAlgo.algo("aa", "aaaaababaabaa")
  assert.equal(1, algo.search())
  assert.equal(2, algo.search())
  assert.equal(3, algo.search())
  assert.equal(4, algo.search())
  assert.equal(9, algo.search())
  assert.equal(12, algo.search())
  assert.equal(-1, algo.search())
})

it('2 searches mixing', function(){
  var algo1 = new KMPAlgo.algo("hi", "xxhihixxxhix")
  assert.equal(3, algo1.search())
  var algo2 = new KMPAlgo.algo("hello", "xxxhelloxxhellox")
  assert.equal(5, algo1.search())
  assert.equal(4, algo2.search())
  assert.equal(10, algo1.search());
})

