/*
**Escreve na console os pares nome valor de propriedades de obj:nome-prop = valor
**Se a propriedade for um método (função) apresenta o resultado da chamada à função.
só para métodos sem parametros. Os métodos com parametros são ignorados.
 */
const aluno = {
    nome: 'joana',
    numero : 43523,
    value : function() { 
     return `name = ${this.nome} numero = ${this.numero}`
        //return console.log('ola')
    }
}
//OUTPUT
// nome-joana numero 43523 O meu nome é joana

function inspect(obj) {
    for(let property in obj) {
        const propVal = obj[property]
        //console.log(`property = ${property}`)
        //console.log(`propVal = ${propVal}`)
        //console.log(`obj[property] = ${obj[property]}`)
        if (typeof(propVal) === 'function') {
            if (propVal.length === 0)
                console.log(`${property}() ==== ${obj[property]()}`)
        } else {
            console.log(`${property} = ${propVal}`)
        }
    }
    console.log("\n")
}

console.log(inspect(aluno));