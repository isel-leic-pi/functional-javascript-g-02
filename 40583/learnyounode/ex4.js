/*  Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l*/

const fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
    if (!err) {
        let str = data.toString();
        let strArray = str.split('\n');
        console.log(strArray.length - 1);
    };
});

/*
    'use strict'
    const fs = require('fs')
    const file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      const lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/