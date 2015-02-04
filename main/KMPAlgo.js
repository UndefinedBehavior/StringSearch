/**
 * Created by omar on 30/01/15.
 */

function kmpAlgo (needle, haystack) {

    kmpTable = (function createKmpTable() {
        nextCandidateIndex = 0
        kmpTableInTheMake = [0, 0]
        for (i = 2; i < needle.length; i++)
            kmpTableInTheMake[i] = needle.charAt(i - 1) === needle.charAt(nextCandidateIndex) ? ++nextCandidateIndex : (nextCandidateIndex = 0);
        return kmpTableInTheMake
    })()

    currentMatchStart = 0
    currentMatchLength = 0

    while (haystack > currentMatchStart + currentMatchLength) {
        if (needle[i] === haystack[m + i]) {
            ++i;
            if (i === needle.length) return m + 1
        } else
            if (i === 0) ++m
            else m = m + i - (i = kmpTable[i])
    }
    return -1

}