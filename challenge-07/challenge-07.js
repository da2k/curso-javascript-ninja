/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1, 'paulo', true, undefined, null]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(x) {
    arr.push(x);
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3 itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([10,'string', false]);
console.log(arr);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é "' + arr[5][1]+ '".');
// O segundo elemento do segundo array é "string".


/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr.length + ' itens.');
// O primeiro array tem 6 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + arr[5].length + ' itens.');
// O segundo array tem 3 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
    var x = 10;
    while (x <= 20){
        x % 2 === 0 ? console.log(x) : '';
        x++;
    }
    // 10
    // 12
    // 14
    // 16
    // 18
    // 20

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
    var x = 10;
    while (x < 20){
        x % 2 === 1 ? console.log(x) : '';
        x++;
    }
    // 11
    // 13
    // 15
    // 17
    // 19

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
    for (x = 100; x <= 120; x++){
        x % 2 === 0 ? console.log(x) : '';
    }
    // 100
    // 102
    // 104
    // 106
    // 108
    // 110
    // 112
    // 114
    // 116
    // 118
    // 120

console.log( 'Números ímpares entre 111 e 125:' );
    for (x = 111; x <= 125; x++){
        x % 2 === 1 ? console.log(x) : '';
    }
    // 111
    // 113
    // 115
    // 117
    // 119
    // 121
    // 123
    // 125
