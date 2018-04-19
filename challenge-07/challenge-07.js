/*
Crie um array com 5 items (tipos variados).
*/
var myarr = [ 1, true, 'string', [1, 2, 3], {prop1: 1, prop2: 2}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(add){
	myarr.push(add);
	/*iten = myarr.length;
	myarr[iten ++] = add;
	return myarr;*/
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
//addItem([ 4, 5, 6]);
myarr.push([7, 8, 9]);
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log('O segundo elemento do segundo array é ' + myarr[5][1] )

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
itenFirstArray = myarr.length;
console.log('O primeiro array tem  ' + itenFirstArray + ' itens.')

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
itenSecondArray = myarr[5].length;
console.log('O segundo array tem ' + itenSecondArray + ' itens.')

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
num = 10;
while( num <= 20){
	num % 2 == 0 ? console.log(num) : '';
 	num ++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
num  = 10;
while(num <= 20){
    num % 2 !=0 ? console.log(num) : '';
    num ++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(num = 100; num <= 200; num++){
     num % 2 == 0 ? console.log(num) : '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for(num = 111; num <= 125; num++){
     num % 2 != 0 ? console.log(num) : '';
}
