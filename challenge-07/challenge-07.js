/*
Crie um array com 5 items (tipos variados).
*/
 var arr = [ 100, function(){}, undefined, 'myrrha', 'olá curso' ];

console.log( arr );


/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem(data) {
	
	arr.push(data);
	return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

console.log( addItem( [ { Marca : 'HP'}, 'Estudando JS', null ] ) );


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log('O segundo elemento do segundo array é ' + arr[5][1] + '.');
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
 console.log( arr.length );

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + arr[5].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

var number = 10;

while ( number <= 20 ){
	number % 2 === 0 ? console.log( 'Números pares entre 10 e 20:' + number ) : ' ';
	number++;
}


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var number = 10;
while ( number < 20){
	number % 2 === 1 ? console.log( 'Números ímpares entre 10 e 20:' + number ) : ' ' ;
	number++;

}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for ( number = 100; number <=120; number++ ){
	number % 2 === 0 ? console.log( 'Números pares entre 100 e 120:' + number ) : ' ';
	console.log( '------------------------');
}

console.log( 'Números ímpares entre 111 e 125:' );

for ( numberNew = 111; numberNew <=125; numberNew++ ){
	numberNew % 2 === 1 ? console.log( 'Números ímpares entre 111 e 125:' + numberNew ) : ' ';
	console.log( '------------------------');
}