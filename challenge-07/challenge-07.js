/*
Crie um array com 5 items (tipos variados).
*/
var myArr = ['string', 10, true, function myFunc(){}, {nome: 'Ana'}]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
var addItem = function addItem(itens){
    myArr.push(itens)
    return myArr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem(['string', false, 10.5]))

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é " + myArr[5][1] + ".")

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + myArr.length + " itens.")

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + myArr[5].length + " itens.")

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var idx = 1;
while (idx <= 20) {
    if (idx % 2 === 0 && idx >=10 ) {
        console.log(idx)
    }
    idx++
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var idx = 1;
while (idx <= 20) {
    if (idx % 2 !== 1 && idx >=10 ) {
        console.log(idx)
    }
    idx++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?
for (let index = 100; index <= 120; index++) {
    index % 2 === 0 ? console.log(index) : '';

}
console.log( 'Números ímpares entre 111 e 125:' );

for (let index = 111; index <= 125; index++) {
    index % 2 !== 0 ? console.log(index) : ''
}
