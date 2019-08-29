/*
Crie um array com 5 items (tipos variados).
*/
var arr = [undefined, 'JavaScript', [1,2,3], {carro: 'BMW'}, 0];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(x) {
	arr.push(x);		
	return console.log(arr);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var arr2 = ['Edson', 17, -1];

addItem(arr2);


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(arr2[1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + arr2.length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var cont = 10;
while(cont <= 20) {
	var numPar = cont % 2;
	if(numPar === 0) {
		console.log(cont);	
	}
	cont++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var cont = 10;
while(cont <= 20) {
	var numImpar = cont % 2;
	if(numImpar === 1) {
		console.log(cont);	
	}
	cont++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (i = 100; i <= 120 ; i++) {
	var numPar = i % 2;
	if(numPar === 0) {
		console.log(i);	
	}
}

console.log( 'Números ímpares entre 111 e 125:' );
for (i = 111; i <= 125 ; i++) {
	var numImpar = i % 2;
	if(numImpar === 1) {
		console.log(i);	
	}
}