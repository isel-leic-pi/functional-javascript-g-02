'use strict'

//console.log(process.argv)

const lenArgv = process.argv.length
let sum = 0;
for(let i = 2; i < lenArgv; ++i) {
    sum = sum + Number(process.argv[i])
}
//
console.log(sum)