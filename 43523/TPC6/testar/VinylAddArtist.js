'use strict'

const vinyl = require('C:\\Users\\Joana\\Desktop\\PI2\\TPC6\\lib\\vinyl')

vinyl.addArtist('gamboa','Air',(err,artist) =>{ //user existe mas o user não tem o artist
  if(err) console.log(err)
  // console.log(artist)
})

vinyl.addArtist('g','xx',(err,artist) =>{ //user não existe
  if(err) console.log(err)
  // console.log(artist)
})

vinyl.addArtist('Gamboa','xx',(err,artist) =>{ //user existe mas artist nao
  if(err) console.log(err)
  // console.log(artist)
})

vinyl.addArtist('i','i',(err,artist) =>{ 
  if(err) console.log(err)
  // console.log(artist)
})
