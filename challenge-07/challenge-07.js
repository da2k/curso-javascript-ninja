/*
Crie um array com 5 items (tipos variados).
*/
var array = ['Fabricio', function multiplicar(x,y){ return x * y; }, {carro: 'Ferrari', cor: 'preto'}, [2 , 3], 5 ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
	
	return array.push(item);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?
console.log(addItem(['AB', true , 100]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log( 'O segundo elemento do segundo array é ' + array[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + array.length + ' itens.' );

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + array[5].length + ' itens.' );

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var counter = 10;
while (counter <= 20){

	if (counter % 2 === 0){
		console.log('Numeros pares entre 10 e 20 são: ' + counter);

	}
	counter++;
	
}




/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

var counter = 10;
while (counter <= 20){

	if (counter % 2 !== 0){
		console.log('Numeros ímpares entre 10 e 20 são: ' + counter);

	}
	counter++;
	
}

// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for (var i = 100; i <= 120; i++){
	if (i % 2 === 0){
		console.log( 'Números pares entre 100 e 120 são: ' + i );
	}
}


// ?

for (var i = 111; i <= 125; i++){
	if (i % 2 !== 0){
		console.log( 'Números ímpares entre 111 e 125 são: ' + i );
	}
}


// ?