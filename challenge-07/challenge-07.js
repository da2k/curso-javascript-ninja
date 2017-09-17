/*
Crie um array com 5 items (tipos variados).
*/
var items = [ 'Nogueira', 12, 23.4, true, function cor() { return 'Blue'; } ]; 

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(adicionar) {
	items.push(adicionar);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem('Flamengo');
addItem([ 122, 980, 22 ]);
> console.log(items);
[ 'Nogueira',
  12,
  23.4,
  true,
  [Function: cor],
  'Flamengo',
  [ 122, 980, 22 ] ]

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
> console.log('O segundo elemento do segundo array é ', items[6][1]);
O segundo elemento do segundo array é  980

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
items.length
7

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
> console.log('O primeiro array tem ', items.length, ' itens.');
O primeiro array tem  7  itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var num = 10;
console.log( 'Números pares entre 10 e 20:' );
> while (num <= 20) {
 if (num === 10){
     console.log( 'Números pares entre 10 e 20:' );
 }
 if(num % 2 === 0) {
    console.log(num);
 }
 num++;
}
Números pares entre 10 e 20:
10
12
14
16
18
20

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var num = 10;
console.log( 'Números ímpares entre 10 e 20:' );
> while (num <= 20) {
 if (num === 10){
     console.log( 'Números ímpares entre 10 e 20:' );
 }
 if(num % 2 === 1) {
    console.log(num);
 }
 num++;
}
Números ímpares entre 10 e 20:
11
13
15
17
19

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
 for( num = 100; num <=120; num++ ) {
 if( num === 100 ) {
   console.log( 'Números pares entre 100 e 120:' );
 }
 if ( num % 2 === 0 ) {
 console.log(num);
 }
}
Números pares entre 100 e 120:
100
102
104
106
108
110
112
114
116
118
120
undefined

 for( num = 111; num <=125; num++ ) {
 if( num === 111 ) {
   console.log( 'Números Ímpares entre 111 e 125:' );
 }
 if ( num % 2 === 1 ) {
 console.log(num);
 }
}
Números Ímpares entre 111 e 125:
111
113
115
117
119
121
123
125
undefined