/**
 * Created by omar on 30/01/15.
 */

module.exports = function(needle, haystack) {
  this._needle = needle
  this._haystack = haystack

  this._currentMatchStart = 0

  this._kmpTable = function () {
    var nextCandidateIndex = 0
    var kmpTableInTheMake = [0, 0]

    for (i = 2; i < _needle.length; i++)
      kmpTableInTheMake[i] =
            _needle.charAt(i - 1) == _needle.charAt(nextCandidateIndex) ?
            ++nextCandidateIndex : (nextCandidateIndex = 0);
      return kmpTableInTheMake
  }()

  return function () {
    m = _currentMatchStart // current match start
    i = 0 // current match length

    while (m + i < _haystack.length)
      if (_needle[i] == _haystack[m + i]) {
        ++i;
        if (i == _needle.length) return _currentMatchStart = m + 1
      } else
        if (i == 0) ++m
        else m = m + i - (i = _kmpTable[i])

    _currentMatchStart = m + 1

    return -1
  }
}
