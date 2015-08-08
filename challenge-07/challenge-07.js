/*
Crie um array com 5 items (tipos variados).
*/
var arr = [ 1, 'th', true, function() {}, false ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
	arr.push(item);
	return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log( addItem( [ null, 'Olá', { cor: 'cinza' } ] ) );

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log( 'O segundo elemento do segundo array é ' + arr[5][1] + '.' );

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O primeiro array tem ' + arr.length + ' itens.' );

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O segundo array tem ' + arr[5].length + ' itens.' );

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var pares = 10;
while ( pares <= 20) {
	pares % 2 === 0 ? console.log( pares ) : '';
	pares++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var imp = 10;
while ( imp < 20) {
	imp % 2 === 1 ? console.log( imp ) : '';
	imp++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
*/
for ( nPar = 100; nPar <= 120; nPar++ ) {
	nPar % 2 === 0 ? console.log(nPar) : '';
} 

// No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.

for ( nImp = 111; nImp <= 125; nImp++ ) {
	nImp % 2 === 1 ? console.log(nImp) : '';
}
