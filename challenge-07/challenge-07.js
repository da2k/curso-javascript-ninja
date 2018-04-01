/*
Crie um array com 5 items (tipos variados).
*/
var ray = [false, 'oi', 15.2, function(x,y){return x**y}, ['A', 'B']];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
	var item;
	ray.push(item);
	console.log(ray);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(['array', [true, false], null]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do último array é [ELEMENTO]."
*/
console.log('O segundo elemento do último array é '+ray[6][1]+' !');

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+ray.length+' itens!');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array criando tem '+ray[6].length+' itens!');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var pares = [];
var num = 10;
while(num<20){
	if(num%2 === 0){
		pares.push(num);
	}
	num++;
}
console.log( 'Números pares entre 10 e 20 são: '+pares);
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var impares = [];
var num = 10;
while(num<20){
	if(num%2 !== 0){
		impares.push(num);
	}
	num++;
}
console.log( 'Números ímpares entre 10 e 20 são: '+impares);


/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for(var pares = [], num = 100; num <= 120; ++num){
	if(num%2 === 0){
		pares.push(num);
	}
}
console.log( 'Números pares entre 100 e 120 são: '+pares);

for(var impares = [], num = 111; num <= 125; ++num){
	if(num%2 !== 0){
		impares.push(num);
	}
}
console.log( 'Números ímpares entre 111 e 125 são: '+impares );
