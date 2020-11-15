/*'use strict'

var arrayUsers = [
    {
        "username": "joana",
        "artists": ["muse", "killers", "new order", "Franz Ferdinand", "Faith no more"]
    },
    {
        "username": "raimunda",
        "artists": ["muse", "killers", "new order", "Franz Ferdinand", "Faith no more"]
    },
    {
        "username": "gamboa",
        "artists": ["muse", "killers", "new order", "Franz Ferdinand", "Faith no more"]
    },
    {
        "username": "raimunda",
        "artists": ["muse", "killers", "new order", "Franz Ferdinand", "Faith no more"]
    }
]

//console.log(arrayUsers)
function cb(arr) {
arr.forEach( (elem, index, arr) => {
    if(elem.name === 'raimunda') {
        arr[index].artists.push('ole')
        console.log(arr[index])
        //break;
    }            
});

}

const index = arrayUsers.findIndex(elem => elem.username === 'raimunda')

console.log(index)
*/