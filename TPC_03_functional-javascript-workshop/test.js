'use strict'
/*
function list() {
    return Array.prototype.slice.call(arguments)
  }
  
  let list1 = list(1, 2, 3) // [1, 2, 3]


  function list(...args) {
    console.log(args)
    return slice(args)
}

let list1 = list(1, 2, 3) // [1, 2, 3]

console.log(list1)
console.log(list1.join('xpto'))

//let unboundSlice = Array.prototype.slice
let slice = Function.prototype.call.bind(Array.prototype.slice)

function list() {
    console.log(arguments)
    return slice(arguments)
}

let list1 = list(1, 2, 3) // [1, 2, 3]

console.log(list1)
console.log(list1.join('xpto'))


function func(a = 55) {//valor por omissao de a, caso nao seja passado args
    arguments[0] = 99; // updating arguments[0] does not also update a
    console.log(a);
    return arguments[0]
  }
  console.log(func(10)) // 10


 var notDuck = Object.create({quack: true})
 var duck = {quack: true}
 
 console.log(notDuck.hasOwnProperty('quack'))
 console.log(duck.hasOwnProperty('quack'))


 const array = ['a', 'b'];
 const elements = [0, 1, 2];
 array.push.apply(array, elements); //anexa cada elem ao array existente
 console.info(array); // ["a", "b", 0, 1, 2]

 
 const array1 = ['a', 'b'];
 const elements1 = [0, 1, 2];
 array1.push(array1, elements1);
 console.info(array1);

 const array2 = ['a', 'b'];
 const elements2 = [0, 1, 2];
 const result = array2.concat(elements2);
 console.info(array2);//fica igual pois nao é alterado
 console.info(result);//contem  oncatenacao 


function add (x, y) {
    return x + y
  }

  add (10, 20) // => 30

  var addTen = partialApply (add, 10) // corrige `x` para 10

  addTen (20) // => 30
    addTen (100) // => 110
    addTen (0) // => 10 

    
const slice = Array.prototype.slice;

function logger(namespace) {
	return function(){
		const args = slice.call(arguments);
		args.unshift(namespace);
		console.log.apply(null, args);
	}
}
console.log.apply(slice.call(1,2,3))

var info = logger ('INFO:')
info ('esta é uma mensagem informativa','olecas','ulala')


function Point(x, y) {
    this.x = x
    this.y = y
    this.module = function() { return Math.sqrt(x*x + y*y) }
        
}

Point.prototype.module = function() {
    return Math.sqrt(this.x*this.x + this.y*this.y)
}
    

const p1 = new Point(5,7)

console.log(Object.prototype.hasOwnProperty.call(p1,'module'))
console.log(p1.hasOwnProperty('module'))


let module = function (namespace) {
    return console.log.bind(console, namespace)
}

console.log(module('ola mundo'))

module('ola mundo')
module('foda-se')



function logger(namespace) {
    
    return console.log.bind(console, namespace)
}


var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info



function repeat(operation, num) {
 
    if (num <= 0) return

      operation(num)

      // release control every 10 or so
      // iterations.
      // 10 is arbitrary.
      if (num % 10 === 0) {
        setTimeout(function() {
          repeat(operation, --num)
        })
      } else {
        repeat(operation, --num)
      }
  }

repeat((num)=>console.log('rep'+num),100000)

function list(a,b,c) {
  console.log(arguments)
  console.log(a,b,c)
  return Array.prototype.slice.call(arguments)
}

let list1 = list(1, 2, 3) // [1, 2, 3]

console.log(list1)

function list(...args) {
  console.log(args)
  return slice(args)
}

let list1 = list(1, 2, 3) // [1, 2, 3]

console.log(list1)
console.log(list1.join('xpto'))

//let unboundSlice = Array.prototype.slice
let slice = Function.prototype.call.bind(Array.prototype.slice)

function list() {
  console.log(arguments)
  return slice(arguments)
}

let list1 = list(1, 2, 3) // [1, 2, 3]

console.log(list1)
console.log(list1.join('xpto'))
*/
function logger(namespace) {
  return console.log.bind(console, namespace)
}

var warn = logger('WARN:')
warn('this is an info message1')
warn('this is an info message2')
warn('this is an info message3')