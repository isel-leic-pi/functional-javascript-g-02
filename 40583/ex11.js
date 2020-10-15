function arrayMap(arr, fn) {
    return arr.reduce(function(accumulator, curr, index, arr)  {
        accumulator.push(fn(curr, index, arr));
        return accumulator;
    }, []);
}

module.exports = arrayMap;