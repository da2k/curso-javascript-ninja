/*
Crie um array com 5 items (tipos variados).
*/
let myArr = ['numero', null, true, {
  id: 1
} [1, 2, 3]]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

let addItem = (arg) => {
  myArr.push(arg)
  return myArr
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
let newArr = [{
    login: true
  },
  [1, 2, 3], false
]
console.log(addItem(newArr))
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${newArr[1]}`)

  /*
  Mostre no console quantos itens tem o primeiro array criado, com a frase:
  "O primeiro array tem [QUANTIDADE DE ITENS] itens."
  */
  /
  console.log(`O primeiro array tem ${myArr.length} itens.`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${newArr.length} itens.`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log('Números pares entre 10 e 20:');
let counter1 = 10
while (counter1 <= 20) {
  counter1 % 2 === 0 ? console.log(counter1) : ''
  counter1++
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log('Números ímpares entre 10 e 20:');
let counter2 = 10
while (counter2 <= 20) {
  counter2 % 2 !== 0 ? console.log(counter2) : ''
  counter2++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log('Números pares entre 100 e 120:');
for (let count = 100; count <= 120; count++) {
  count % 2 === 0 ? console.log(count) : ''
  count++
}

console.log('Números ímpares entre 111 e 125:');
for (let count = 111; count <= 125; count++) {
  count % 2 !== 0 ? console.log(count) : ''
  count++
}
