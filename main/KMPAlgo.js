/**
 * Created by omar on 30/01/15.
 */

exports.algo = function algo(needle, haystack) {
  this.needle = needle
  this.haystack = haystack
  
  this.currentMatchStart = 0

  this.kmpTable = function () {
    var nextCandidateIndex = 0
    var kmpTableInTheMake = [0, 0]

    for (i = 2; i < needle.length; i++)
      kmpTableInTheMake[i] =
            needle.charAt(i - 1) == needle.charAt(nextCandidateIndex) ?
            ++nextCandidateIndex : (nextCandidateIndex = 0);
      return kmpTableInTheMake
  }()

  this.search = function() {
    m = this.currentMatchStart // current match start
    i = 0 // current match length

    while (m + i < haystack.length) {
      if (needle[i] == haystack[m + i]) {
        ++i;
        if (i == needle.length) return this.currentMatchStart = m + 1
      } else
        if (i == 0) ++m
        else m = m + i - (i = this.kmpTable[i])
    }
    this.currentMatchStart = m + 1

    return -1
  }
}
