const { log } = console;
/*
Crie um array com 5 items (tipos variados).
*/
const arr = [ "Evelyn", 9, 20, false, true ];
log(arr)

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
const addItem = (arr, item) => [...arr, item]
// Para o arr ficar imutável :D
const newArr = addItem(arr, [ 1, "JSninja", { tipo: "Jogo" } ]);

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
log(addItem(arr, [1, "JSninja", { tipo: "Jogo" }]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
const showItems = ( index, item ) => `O segundo elemento do segundo array é: ${newArr[index][item]}.`
const showArr = ( index, item ) => (item === undefined) ? `Verifique as opções.` : showItems(index, item);

log(showArr( 1 ));
log(showArr( 5, 1 ));

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
const arrLength = ( arg ) => arg.length;
const showLength = ( arg ) => `O primeiro array tem ${arrLength( arg )} itens.`;
log(showLength( arr ));

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
const showSecond = ( arg ) => `O segundo array tem ${arrLength( arg )} itens.`;
log(showSecond(newArr[ 5 ]));


/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
log('Números pares entre 10 e 20:');
let num = 10;

// while( num <= 20 ) {
//   ( num % 2 === 0 ) ? log( num ) : '';
//   num++;
// };

// ou então:

while (num <= 20) {
  log(num);
  num += 2;
};

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
log( 'Números ímpares entre 10 e 20:' );
let number = 10

// while (number <= 20) {
//   (number % 2 > 0) ? log(number) : '';
//   number++;
// };

while (number < 20) {
  log((number += 2) - 1);
};

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
// log( 'Números pares entre 100 e 120:' );
// for (let num = 100; num % 2 === 0 && num <= 120; num++ ){
//   log(num++);
// }

//Ou então:
log('Números pares entre 100 e 120:');

for (let num = 100; num <= 120; num += 2) {
  log(num);
}

log('Números ímpares entre 111 e 125:');
// for (let num = 111; num % 2 > 0 && num <= 125; num++) {
//   log(num++);
// }

// Ou então:
for (let num = 111; num <= 125; num += 2) {
  log(num);
}

