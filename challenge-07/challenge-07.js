/*
Crie um array com 5 items (tipos variados).
*/
var myArray = ['Danilo', true, false, NaN, {idade: 24}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem() {
	return myArray;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var addItemArray = myArray.push([undefined, function(){}, {}]);
console.log(addItemArray);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(myArray[5][2]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + myArray.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + myArray[5].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var numeros = 10;
while(numeros <=20 ) {
	numeros % 2 === 0 ? console.log(numeros) : ''; 
	numeros++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var numeros = 10;
while(numeros <=20 ) {
	numeros % 2 !== 0 ? console.log(numeros) : ''; 
	numeros++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for(var pares = 100; pares <= 120; pares++) {
	pares % 2 === 0 ? console.log(pares) : '';
	pares++;
}


for(var impares = 111; impares <= 125; impares++) {
	impares % 2 !== 0 ? console.log(impares) : '';
	impares++;
}
