/*
Crie um array com 5 items (tipos variados).
*/
var array = ['pagu', true, {isa: 'bela'}, function(){}, null];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(newElement){
  array.push(newElement);
  return array;
}

console.log(addItem('hello'));

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var array1 = ['pagu', true, {isa: 'bela'}, function(){}, null];
array1.push([1,'oi', false]);
console.log(array1);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do array é: ' + array[1] + '.');

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + array1.length + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log('O segundo array tem ' + array.length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

var num = 10;
console.log( 'Números pares entre 10 e 20:' );
while (num >= 10 && num <=20){
  console.log(num%2 === 0 ? num : '');
  num++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var num = 10;
console.log( 'Números ímpares entre 10 e 20:' );
while (num >= 10 && num <=20){
  console.log(num%2 !== 0 ? num : '');
  num++;
}


/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for (num = 100; num >=100 && num <= 120; num++ ){
  console.log(num%2 === 0 ? num : '');
}

console.log( 'Números ímpares entre 111 e 125:' );
for (num = 111; num >=111 && num <= 125; num++ ){
  console.log(num%2 !== 0 ? num : '');
}