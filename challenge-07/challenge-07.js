/*
Crie um array com 5 items (tipos variados).
*/

var arr = [1, 'Evelyn', null, true, { papel: 'branca' } ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

var qtd = arr.length;

arr.push( { cor: 'cinza', caderno: 'preto' } );

function addItem ( arr ) {
   while ( qtd > 5 ) {
     console.log( arr );
       }
  }

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

arr.push('Oliveira', false, { cor: 'vermelho' } );

arr
/* [
  1,
  'Evelyn',
  null,
  true,
  { papel: 'branca' },
  { cor: 'cinza', caderno: 'preto' },
  'Oliveira',
  false,
  { cor: 'vermelho' }
]
*/

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log('O segundo elemento do segundo array é ' + arr[5].caderno );
// O segundo elemento do segundo array é preto

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log('O primeiro array tem ' + arr.length + ' itens.');
// O primeiro array tem 9 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log('O segundo array tem ' + arr[4].papel.length + ' itens.');
// O segundo array tem 6 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

var num = 10;

while(num <= 20) {
... ( num++ ) % 2 === 0 ? console.log( 'Números pares entre 10 e 20:' + num ) : '';
... }

console.log( 'Números pares entre 10 e 20:');

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
  
var num = 10;

while(num <= 20) {
... ( num++ ) % 2 === 1 ? console.log( 'Números ímpares entre 10 e 20:' + num ) : '';
... }

console.log( 'Números ímpares entre 10 e 20:' );

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for( var n = 100; n <= 120; n++ ) {
... n % 2 === 0 ? console.log( 'Números pares entre 100 e 200:' + n ) : '';
... }
  
console.log( 'Números pares entre 100 e 120: ' + n );

for( var n = 111; n <= 125; n++ ) {
... n % 2 === 1 ? console.log( 'Números ímpares entre 111 e 125:' + n ) : '';
... }

console.log( 'Números ímpares entre 111 e 125:' );

