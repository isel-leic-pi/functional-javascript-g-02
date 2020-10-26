
let i = 2;
const args = process.argv; 
let result = 0;

while(i< process.argv.length){
    result += Number(process.argv[i]);
    i++;
}

console.log(result)