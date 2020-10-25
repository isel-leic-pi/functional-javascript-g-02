'use strict'

function countWords(inputWords) {
    return inputWords.reduce(function(acc, word) {
        acc[word] = (acc[word] + 1) || 1
        return acc
    }, {})
}

module.exports = countWords