/**
 * Created by omar on 02/02/15.
 */

var assert = require("assert")

var matcher = require("../main/KMPAlgo")("b", "abc")

it('simplest case', function(){
  assert.equal(2, matcher());
})

