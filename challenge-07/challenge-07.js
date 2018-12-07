/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1, "leo", { bola: "azul" }, function() {}, true];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
  arr.push(item);
  return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([null, 30, false]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é " + arr[5][1] + ".");

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + arr.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + arr[5].length + " itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

function pares10a20() {
  var i = 10;
  var pares = [];
  while (i <= 20) {
    if (i % 2 === 0) {
      pares.push(i);
    }
    i++;
  }
  return pares;
}
console.log("Números pares entre 10 e 20: " + pares10a20());

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

function impares10a20() {
  var i = 10;
  var impares = [];
  while (i <= 20) {
    if (i % 2 !== 0) {
      impares.push(i);
    }
    i++;
  }
  return impares;
}
console.log("Números ímpares entre 10 e 20: " + impares10a20());

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
function pares100a120() {
  pares = [];
  for (i = 100; i <= 120; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }
  return pares;
}
console.log("Números pares entre 100 e 120: " + pares100a120());

function impares111a125() {
  impares = [];
  for (i = 111; i <= 125; i++) {
    if (i % 2 !== 0) {
      impares.push(i);
    }
  }
  return impares;
}
console.log("Números ímpares entre 111 e 125: " + impares111a125());
// ?
