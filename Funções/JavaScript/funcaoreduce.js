let numeros = [1,2,3,4,5]
//A função reduce ira somar todos os elementos do array resultando apenas
//um unico valor

let somatotal = numeros.reduce(function(x,y){

    return x+y
});

console.log(numeros)
console.log('soma dos elementos',somatotal)