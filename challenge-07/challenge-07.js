/*
Crie um array com 5 items (tipos variados).
*/
var arr = [null, undefined, true, [1,2,3], {carro: 'Fiat'}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(param){
	arr.push(param);
	console.log(arr);
}

addItem('Que lindo');

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
arr.push(['string', 12, true]);
console.log(addItem([false, null, 'Bayeux']));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log( "O segundo elemento do segundo array é "+ arr[7][1] +"." );

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem "+ arr.length +" itens.")

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem "+ arr[6].length +" itens.")

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var pares = 10;

while(pares <= 20){
	if(pares % 2 === 0){
		console.log(pares);	
	}
	pares++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var impares = 10;

while(impares <= 20){
	if (impares % 2 !== 0) {
		console.log(impares);
	}
	impares++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (var par = 100; par <= 120; par++) {
	par % 2 == 0 ? console.log(par) : '';
	
}

console.log( 'Números ímpares entre 111 e 125:' );
for (var impar = 111; impar <= 125; impar++) {
		impar % 2 !== 0 ? console.log(impar) : '';
}