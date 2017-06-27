/*
Crie um array com 5 items (tipos variados).
*/
var mixArray = [12, 'jonathan', {a: 2, b: 4}, ['Ýan', 'Tiersen'], true];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
var addItem;
addItem = function (arr) {
  mixArray.push(arr);
  return mixArray;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([2, 'a', false]);
console.log(mixArray); //(6) [12, "jonathan", Object, Array(2), true, Array(3)]
console.log(mixArray[5]); //(3) [2, "a", false]

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + mixArray[5][1]); // O segundo elemento do segundo array é a

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + mixArray.length + ' itens.'); // O primeiro array tem 6 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + mixArray[5].length + ' itens.'); // O segundo array tem 3 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var numPar = 10;
console.log( 'Números pares entre 10 e 20: ');

while(numPar <= 20){
  if(numPar % 2 === 0){
    console.log(numPar);
  }
  numPar++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var numImpar = 10;
console.log( 'Números ímpares entre 10 e 20: ');

while(numImpar < 20){
  if(numImpar % 2 !== 0){
    console.log(numImpar);
  }
  numImpar++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
var par;
console.log('Números pares entre 100 e 120: ');
for(par = 100; par <= 120; par++){
  if(par % 2 === 0){
    console.log(par);
  }
}

var impar;
console.log('Números impares entre 111 e 125: ');
for(impar = 111; impar <= 125; impar++){
  if(impar % 2 !== 0){
    console.log( impar);
  }
}
