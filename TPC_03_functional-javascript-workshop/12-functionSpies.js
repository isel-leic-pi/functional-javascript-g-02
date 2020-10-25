'use strict'

function Spy(target, method) {
    let spy = {
        count : 0
    }
    
    let oldFunc = target[method]
    
    target[method] = function() {
        spy.count++
        oldFunc.apply(target, arguments)
    }
    return spy
}

module.exports = Spy
