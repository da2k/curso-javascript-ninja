/*
Crie um array com 5 items (tipos variados).
*/
const arrayItens = [2, "Emerson", { age: 30 }, true];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
const addItem = (newItem) => {
  arrayItens.push(newItem);

  return arrayItens;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([23, "teste", false]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${arrayItens[4][1]}`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${arrayItens.length} itens`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${arrayItens[4].length} itens`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let counter = 10;

while (counter <= 20) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
  counter++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

let counter1 = 10;

while (counter1 <= 20) {
  if (counter1 % 2 === 1) {
    console.log(counter1);
  }
  counter1++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for (let counter2 = 100; counter2 <= 120; counter2++) {
  if (counter2 % 2 === 0) {
    console.log(counter2);
  }
}

//let numbers2 = 111

for (let counter3 = 0; counter3 <= 125; counter3++) {
  if (counter3 % 2 === 1) {
    console.log(counter3);
  }
}
