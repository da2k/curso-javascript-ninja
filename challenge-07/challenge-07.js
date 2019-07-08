/*
Crie um array com 5 items (tipos variados).
*/

var vetor = ['Raphael', 27 , true , undefined , 'Monica']

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem(x) {
    vetor.push(x)
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

addItem([1 , 2 , 3])
console.log(vetor)

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log(`O segundo elemento do segundo array é ${vetor[5][1]}.`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`O primeiro array tem ${vetor.length} itens.`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

console.log(`O segundo array tem ${vetor[5].length} itens.`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var contador = 10
var vetor = []
while(contador <= 20) {
    if(contador % 2 == 0) {
        vetor.push(contador);
    }
    contador++;
}
console.log( `Números pares entre 10 e 20: ${vetor}` );


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

var contador = 10
var vetor = []
while(contador <= 20) {
    if(contador % 2 == 1) {
        vetor.push(contador);
    }
    contador++;
}
console.log( `Números impares entre 10 e 20: ${vetor}` );

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for(var vetorPar = [],vetorImpar= [], contador = 100 ; contador <= 120 ; contador++ ) {
    if(contador % 2 == 0) {
        vetorPar.push(contador)
    } else {
        vetorImpar.push(contador)
    }
}

console.log( `Números pares entre 100 e 120: ${vetorPar}` );

console.log( `Números impares entre 100 e 120: ${vetorImpar}`  );
// ?