/*
Crie um array com 5 items (tipos variados).
*/

let arr = [1, "enzo", { cidade: "natal" }, true, function () {}];

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

const newArr = ["item1", true, 3];

addItem(newArr);

console.log(arr);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

let ultimoItemIndice2 = arr[arr.length - 1];
console.log(`O Segundo elemento do segundo array é ${ultimoItemIndice2[1]}`);

// maneira mais fácil de fazer: console.log(arr[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

let qnt1arr = arr.length;
console.log(`O primeiro array tem ${qnt1arr} itens`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`O segundo array tem ${arr[5].length} itens.`); // eu acesso o item e vejo o tamanho dele

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log("Números pares entre 10 e 20:");
//

let initialValue = 10;

while (initialValue <= 20) {
  if (initialValue % 2 === 0) {
    console.log(initialValue);
  }
  initialValue++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

console.log("Números ímpares entre 10 e 20:");

initialValue = 10;
while (initialValue <= 20) {
  if (initialValue % 2 === 1) {
    console.log(initialValue);
  }

  initialValue++;
}
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log("Números pares entre 100 e 120:");
// ?

for (let i = 100; i <= 120; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Números ímpares entre 111 e 125:");
// ?

for (let i = 111; i <= 125; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
