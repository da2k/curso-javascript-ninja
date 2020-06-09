/*
Crie um array com 5 items (tipos variados).
*/
var array = ['Willians', false, null,{idade: '35'}, hobby = function(){ return 'programar'} ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
	array.push(item);
	return array;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var newArray = [{tesoura: 'sem ponta'}, tipo = function(){ return 'infantil' }, true];

addItem(newArray);

// 0: "Willians"
// 1: false
// 2: null
// 3: {idade: "35"}
// 4: ƒ ()
// 5: Array(3)
	// 	0: {tesoura: "sem ponta"}
	// 	1: ƒ ()
	// 	2: true

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é "+array[5][1]+".");
// O segundo elemento do segundo array é function(){ return 'infantil' }.

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

var itens = array.lenght;
console.log("O primeiro array tem "+itens+" itens."); // O primeiro array tem 6 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
var itensArr2 = array[5].lenght;
console.log("O segundo array tem "+itensArr2+" itens."); // O segundo array tem 3 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var cont = 10;
while(cont <=20){
	if(cont % 2 === 0){
	console.log(cont);
	}
	cont++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var cont = 10;
while(cont <=20){
	cont % 2 === 1 ? console.log(cont) : '';
	cont++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(cont = 100; cont <= 120; cont++){
	cont % 2 === 0 ? console.log(cont):'';
}

console.log( 'Números ímpares entre 111 e 125:' );
for(cont = 111; cont <= 125; cont++){
	cont % 2 === 1 ? console.log(cont):'';
}