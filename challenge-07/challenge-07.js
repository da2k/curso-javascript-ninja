/*
Crie um array com 5 items (tipos variados).
*/
var arr = ['texto', 2, {'objeto':'a'}, function(){return 4;},true];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
funtion addItem (item){
  arr.push(item);
  return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var myarray = ['oi', 2, function(){return 3;}];

console.log(myarray);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log('O segundo elemento do segundo array é '+myarray[1]+'.';);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+arr.length+' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+myarray.length+' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

var count = 10;
var pares = [];

while(count <= 20){
  (count % 2) === 0 ? pares.push(count) : '';
  count++;
};

console.log( 'Números pares entre 10 e 20: ' + pares );

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

var counti = 10;
var impares = [];

while(counti <= 20){
  (counti % 2) === 1 ? impares.push(counti) : '';
  counti++;
};

console.log( 'Números ímpares entre 10 e 20: '+impares );

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
var pares = [];

for (var i = 100; i <= 120; i++){
  (i % 2) === 0 ? pares.push(i) : '';
}
console.log( 'Números pares entre 100 e 120: '+pares+'. São '+pares.length+' numeros pares.');

//

var impares = [];

for (var i = 111; i <= 125; i++){
  (i % 2) === 0 ? impares.push(i) : '';
}

console.log( 'Números ímpares entre 111 e 125: '+impares+'. São '+impares.length+' numeros ímpares.');
