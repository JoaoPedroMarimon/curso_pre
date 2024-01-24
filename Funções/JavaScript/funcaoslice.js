// A função slice retorna uma cópia de uma parte de um array
// para outro array (subarray)

//Ele ira copiar a parte de um array da posição 1 a 4 e colocar
// em outro lugar

let carros = ['Gol','Fusca', 'Ford','Sandero','Uno']

console.log(carros)


let garagem = carros.slice(1,4);

console.log("Carros na garagem",garagem)
