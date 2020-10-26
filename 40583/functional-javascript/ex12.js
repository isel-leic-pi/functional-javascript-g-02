function Spy(target, method) {
    let result = {
        count : 0
    };

    let original = target[method];
    target[method] = function() {
        result.count++;
        original.call(target, arguments);
    };

    return result;
}

module.exports = Spy;