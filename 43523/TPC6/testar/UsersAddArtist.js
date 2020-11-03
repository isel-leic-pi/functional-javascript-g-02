'use strict'

const users = require('C:\\Users\\Joana\\Desktop\\PI2\\TPC6\\lib\\users')

users.addArtist('Gamboa','artist3',(err,artist)=>{
  if(err) console.log(err)
  console.log(artist)
}) 

users.addArtist('g','artist3',(err,artist)=>{
  if(err) console.log(err)
  console.log(artist)
}) 
