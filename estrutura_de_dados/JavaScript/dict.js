// Objeto Map é uma coleção de valores.
// Atravez de um objeto

// Declarar o objeto


let dic1 = new Map()

//Adcionar os valores desse objeto

dic1.set('chave1','valor1');
dic1.set('chave2','valor2');
dic1.set('chave3','valor3');

//Acessar os valores com o metodo get

console.log('Valor da chave',dic1.get('chave1'))

// Obter tamanho objetp MAP

console.log('Tamanho do MAP',dic1.size)

// iterar os objetos Map com forEach

dic1.forEach(function(valor,chave){
    alert(chave+": "+valor)
})

// Remover um item do objeto Map
dic1.delete('chave1')

// Verificar o tamanho do objeto Map
console.log('Novo Tamanho: ',dic1.size);
