/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1, 'fabio', true, {color: 'red'}, [1,2]];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(itens){
	arr.push(itens);
	return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([1,'Cola', true]);

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
console.log('O primeira array tem ' + arr.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + arr[5].length + ' itens.');


/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

x = 10;
while(x <= 20){
	if (x % 2 == 0){
		console.log( 'Números pares entre 10 e 20: ' + x);
	}
	x++;
};

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
x = 10;
while(x <= 20){
	if (x % 2 == 1){
		console.log( 'Números impares entre 10 e 20: ' + x);
	}
	x++;
};

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for(x = 100; x <= 120; x++){
	if(x % 2 == 0){
		console.log( 'Números pares entre 100 e 120: ' + x );
	}
};

for(x = 111; x <= 125; x++){
	if(x % 2 == 1){
		console.log( 'Números ímpares entre 111 e 125: ' + x );	
	}
};

// ?