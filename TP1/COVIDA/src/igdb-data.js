
'use strict'

const urllib = require('urllib')

const AUTHORIZATION = 'Bearer i4at24j8hszt7oyml7q8upgogab9hf'

const CLIENT_ID = '9ubc76gh6s45np74b1xeam4gburipq'

const url = 'https://api.igdb.com/v4/games'

function getTopGames(cb) {

    var args = { 
        type: 'post', 
        headers: {
            'Client-ID': CLIENT_ID , 
            'Authorization':AUTHORIZATION
        },
        content:
            'fields name, rating, category; sort rating desc; limit 30;'

    };
    urllib.request(url, args, function(err, data, res) {
        const result = JSON.parse(data);
        if(err) return cb(err)
        cb(null, result)
        //console.log(result)
        //console.log(err)
        //console.log(res)
    });

}

module.exports = { 
    getTopGames
}