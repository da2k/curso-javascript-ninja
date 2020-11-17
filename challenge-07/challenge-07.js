/*
Crie um array com 5 items (tipos variados).
*/
let arr = [1, 'Mimi', function(){}, [1, 2, 3], true];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
	arr.push(item);
	return arr;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([true, 1, 'Costa']);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é "+arr[5][1]+".");

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem "+arr.length+" itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem "+arr[5].length+" itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let par = 10;

while(par <= 20){
	let div = par % 2;
	div === 0 ? console.log(par) : false;
	par++;

};


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
let impar = 10;

while(impar <= 20){
	let div = impar % 2;
	div !== 0 ? console.log(impar) : false;
	impar++;

};

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(i = 100; i <= 120; i++){

	let divisao = i % 2;
	divisao === 0 ? console.log(i) : false;

};

console.log( 'Números ímpares entre 111 e 125:' );
for(i = 111; i <= 125; i++){

	let divisao = i % 2;
	divisao !== 0 ? console.log(i) : false;

};


