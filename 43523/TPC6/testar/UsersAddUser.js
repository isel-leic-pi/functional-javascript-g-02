'use strict'

const users = require('C:\\Users\\Joana\\Desktop\\PI2\\TPC6\\lib\\users')

users.addUser('Gamboa',(err,user) =>{
    if(err) console.log(err)
    //else console.log(user)
}) 

users.addUser('Joana',(err,user) =>{
    if(err) console.log(err)
    //else console.log(user)
}) 
