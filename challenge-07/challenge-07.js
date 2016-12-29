/*
Crie um array com 5 items (tipos variados).
*/

var arr = [ 1, 2, 'Bruno', function() {}, { marca: 'Tesla' } ];
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem(newArr) {

	return arr.push(newArr);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

console.log( addItem(['Rei do Norte', { personagem: 'Jon Snow' }, 10]), arr);

// => [ 1, 2, 'Bruno', [Function], { marca: 'Tesla' }, [ 'Rei do Norte', { personagem: 'Jon Snow' }, 10 ] ];

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

var searchInArray = arr[5][1].personagem;
console.log( `O segundo elemento do segundo array é ${ searchInArray }.` ); // => O segundo elemento do segundo array é Jon Snow.

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`O primeiro array tem ${ arr.length - 1 } itens.`); // => O primeiro array tem 5 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`O segundo array tem ${ arr.length } itens.`) // => "O segundo array tem 6 itens."

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

var num = 10;

while( num <= 20 ) {

	num % 2 === 0 ? console.log(num) : '';
	num++;
}
// 10
// 12
// 14
// 16
// 18
// 20


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

num = 10;

while( num < 20 ) {

	num % 2 === 1 ? console.log(num) : '';
	num++;
}
// 11
// 13
// 15
// 17
// 19

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for(var i = 100; i <= 120; i++) {

	i % 2 === 0 ? console.log(i) : '';
}
// 100
// 102
// 104
// 106
// 108
// 110
// 112
// 114
// 116
// 118
// 120


for(var i = 111; i <= 125; i++) {

	i % 2 === 1 ? console.log(i) : '';
}
// 111
// 113
// 115
// 117
// 119
// 121
// 123
// 125
// undefined
