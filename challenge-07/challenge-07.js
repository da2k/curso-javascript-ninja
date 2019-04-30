/*
Crie um array com 5 items (tipos variados).
*/
var arr = [ 'Danilo', function() {}, { carro: 'Focus', moto: 'Honda'}, true ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
var arr = [ 'Danilo', function () {}, { carro: 'Focus', moto: 'Honda'}, true ];

function adicionaItens ( item ) {
    arr.push( item );
    return console.log( arr );
}

adicionaItens('Progração');

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
adicionaItens( [ 'Práticar', undefined, 5566 ]); //'Danilo', [Function], { carro: 'Focus', moto: 'Honda' }, true, 
[ 'Práticar',undefined, 5566 ] ]

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
var arr = [ 'Danilo', function () {}, { carro: 'Focus', moto: 'Honda'}, true ];

function adicionaItens ( item ) {
    arr.push( item );
    return console.log( 'O segundo elemento do segundo array é ' + arr[4][1] + '.' );
}

adicionaItens( [ 'Práticar', 5566, undefined ]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
var arr = [ 'Danilo', function () {}, { carro: 'Focus', moto: 'Honda'}, true ];

function adicionaItens () {
     return console.log( 'O primeiro array tem ' + arr.length + '.' );
}

adicionaItens(); //O primeiro array tem 4.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

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
