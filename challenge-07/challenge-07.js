/*
Crie um array com 5 items (tipos variados).
*/
var arr = ['Dani', 5 , {a:1}, function () {}, null];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
    return  arr.push(item);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
var array2 = ['Dani', 3, null]
addItem(array2);
console.log(arr);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + arr[5][1]+'.');

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr.length + ' itens.');


/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + array2.length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var counter = 20;

while(counter <= 40){
    if( counter % 2 == 0){
        console.log( 'Números pares entre 10 e 20:' + counter);
    }
    counter++;
}
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var counter = 20;

while (counter <= 40) {
  if (counter % 2 != 0) {
    console.log('Números impares entre 10 e 20:' + counter);
  }
  counter++;
}

// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

for (var counter = 100; counter <= 120; counter++){
    if (counter % 2 == 0){
        console.log('Números pares entre 10 e 20:' + counter);

    }
}

for (var counter = 111; counter <= 125; counter++){
    if (counter % 2 != 0){
        console.log('Números impares entre 10 e 20:' + counter);

    }
}

// ?