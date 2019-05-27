/*
Crie um array com 5 items (tipos variados).
*/
var arr = [ 1, 'ninja', true, { arroz: 'branco'}, undefined ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem() {
	arr.push('mais um', 33);
	console.log(arr);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
arr.push([false, 'curso', 60]);
conlole.log(arr);
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
var indice = arr[7];
console.log ( 'O segundo elemento do segundo array é ' +indice[1] +'.');
//O segundo elemento do segundo array é curso.

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O primeiro array tem ' +(arr.length - indice.length) +' itens.' );
//O primeiro array tem 5 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O segundo array tem ' +indice.length +' itens.' );
//O segundo array tem 3 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
// ?
var num = 10;
while ( num <=20 ) {
	 if(num % 2 == 0) {
	console.log ( num );
}
num++;
}
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
num = 10;
var num = 10;
while ( num <=20 ) {
	 if(num % 2 != 0) {
	console.log ( num );
}
num++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for (var num = 100; num <= 120; num++) {
   num % 2 == 0 ? console.log(num) : console.log();
 
}

for (var num = 111; num <= 125; num++) {
   num % 2 != 0 ? console.log(num) : console.log();
 
}
