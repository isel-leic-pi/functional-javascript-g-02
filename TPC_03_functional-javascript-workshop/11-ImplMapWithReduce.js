'use strict'

module.exports = function arrayMap(arr, fn) {
    return arr.reduce((acc,currVal) => {
        acc.push(fn(currVal))
        return acc
    }, [])
}

/*
module.exports = function arrayMap(arr, fn) {
    let result = []
    for(let i = 0; i < arr.length; ++i) {
        const val = fn(arr[i])
        result[i] = val
    }
    return result
}

module.exports = function arrayMap(arr, fn, thisArg) {
    return arr.reduce(function(acc, item, index, arr) {
      acc.push(fn.call(thisArg, item, index, arr))
      return acc
    }, [])
  }
  */