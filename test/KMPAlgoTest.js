/**
 * Created by omar on 02/02/15.
 */

var assert = require("assert")

var algo = require("../main/KMPAlgo")

it('simplest case', function(){
    var match = kmpAlgo("b", "abc")
    assert.equal(2, match);
})

