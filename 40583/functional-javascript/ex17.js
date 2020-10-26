function curryN(fn, n) {
    n = n || fn.length
    return function curryN2(arg) {
      if (n <= 1) return fn(arg)
      return curryN(fn.bind(this, arg), n - 1)
    }
  }
  
  module.exports = curryN
