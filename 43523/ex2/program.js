/*
# Task

Implement a function that takes a function as its first argument, 
                                a number num as its second argument,
then executes the passed in function num times.

## Arguments

  * operation: A Function, takes no arguments, returns no useful value.
  * num: the number of times to call `operation`

## Hints

  * Don't overthink it, the code should be rather simple.
  * It's ok to use a loop in your implementation, bonus points if you use recursion instead.
  * You may notice some output. That is coming from the function we passed you.
  * You do not need to console.log anything.
  * 
*/

function repeat(operation, num) {
    
    for (let index = 0; index < num; index++) {
        operation();    
    }
  }
  module.exports = repeat