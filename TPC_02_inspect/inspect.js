
/*Implementar function inspect(obj):

Escreve na console os pares nome valor de propriedades de obj:nome-prop = valor
Se a propriedade for um método (função) apresenta o resultado da chamada à função.
só para métodos sem parametros. Os métodos com parametros são ignorados.
=> Colocar a resolução num repositório Github e adicionar fmcarvalho
*/

const a = {
	x : 1,
	y : 1,
	foo : function foo(){
		console.log('realizou foo');
	},
	z : 1,
	foo1 : function foo1(arg){
		console.log(arg);
	},
	w : 1
}
function inspect (obj) {
	const props = Object.keys(obj)
	for (let i = 0; i < props.length; i++) {
		var prop = props[i]
		if (typeof(obj[prop]) === 'function') {
			if(obj[prop].length === 0) {
				obj[prop]();
			}
		}else {
			console.log(prop + ' = ' + obj[prop]);
		}
	}	
}
inspect (a)