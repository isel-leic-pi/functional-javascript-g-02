'use strict'

function duckCount() {
    return [].slice.call(arguments) //transforma os arguments em um array [arg0, agr1, .., argn]; [] <=> Array.prototype
    .filter(elem => ({}).hasOwnProperty.call(elem,'quack')) // itera todos os elems do array filtrando-os segundo a fun lambda; ({}) <=> Object.prototype
    .length
}

module.exports = duckCount