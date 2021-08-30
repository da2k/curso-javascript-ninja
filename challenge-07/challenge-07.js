/*
Crie um array com 5 items (tipos variados).
*/
var arr = ['Hiago', 26, {peso: 79, altura: 1.70}, ['swell', 'sereia'], null];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
  arr.push(item)
  return arr
}
addItem('Ramalho') // ["Hiago", 26, {…}, Array(2), null, "Ramalho"]

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([true, 'Front-End', 2021]) 
// ["Hiago", 26, {…}, Array(2), null, "Ramalho", Array(3)] 

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${arr[6][1]}.`)
// O segundo elemento do segundo array é Front-End.

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${arr.length} itens.`)
// O primeiro array tem 7 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${arr[6].length} itens.`)
// O segundo array tem 3 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?

console.log( 'Números ímpares entre 111 e 125:' );
// ?
