// A função splice ela altera um array, ela pode remover elementos
//como tambem pode substituir elementos

//remover 1 elemento a partir da posiçao do indice de memoria

let numeros = [1,2,3,4,5]
console.log(numeros)

numeros.splice(2,1)

console.log("Resultado remoção",numeros)

let numero2 = [1,2,3,4,5]
console.log(numero2)
numero2.splice(2,1,500)

console.log("Resultado Substuição: ",numero2)