
'use strict'

const urllib = require('urllib')

const AUTHORIZATION = 'Bearer i4at24j8hszt7oyml7q8upgogab9hf'

const CLIENT_ID = '9ubc76gh6s45np74b1xeam4gburipq'

const urlGames = 'https://api.igdb.com/v4/games'
const urlSearch = 'https://api.igdb.com/v4/search'


function searchGame(name,cb) {

    let args = { 
        type: 'post', 
        headers: {
            'Client-ID': CLIENT_ID , 
            'Authorization':AUTHORIZATION
        },
        content:
            'fields *; w name ="' + name + '";'

    };
    urllib.request(urlSearch, args, function(err, data, res) {
        const result = JSON.parse(data);
        //console.log(result)
        if(err) return cb(err)
        cb(null, result)
        //console.log(result)
        //console.log(err)
        //console.log(res)
    });

}
/**
 * 
 * @param {*} cb -> devolve err ou o resultado do pedido dos jogos com maior rating
 */
function getTopGames(cb) {

    let args = { 
        type: 'post', 
        headers: {
            'Client-ID': CLIENT_ID , 
            'Authorization':AUTHORIZATION
        },
        content:
            'fields name,rating; sort rating desc; where rating != null; limit 20;'

    };
    urllib.request(urlGames, args, function(err, data, res) {
        const result = JSON.parse(data);
        if(err) return cb(err)
        cb(null, result)
        //console.log(result)
        //console.log(err)
        //console.log(res)
    });

}


module.exports = { 
    getTopGames,
    searchGame
}