/*
1) Crie um array com 5 items (tipos variados).
*/
var vetor = [15, 'palavra', {propriedade: null}, true, function() {}];

/*
2) Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
var addItem = function(vetor, novo_elemento){
    vetor[vetor.length] = novo_elemento;
    return vetor;
};
//ou
var addItem = function(vetor, novo_elemento){
    vetor.push(novo_elemento);
    return vetor;
};

/*
3) Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(vetor, ['a', 2, true]);
console.log(vetor);

/*
4) Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
/*
    console.log('O segundo elemento do segundo array é ' + vetor[--vetor.length][1] + '.');
    - isso nao da certo, `--vetor.length` ou `--(vetor.length)` diminui o tamanho do array
*/
console.log('O segundo elemento do segundo array é ' + vetor[vetor.length - 1][1] + '.');

/*
5) Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + vetor.length + ' itens.');

/*
7) Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + vetor[vetor.length - 1].length + ' itens.');

/*
8) Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var n = 10;
while(n <= 20){
    if(n % 2 === 0){
//  if(!(n % 2)){
        console.log(n);
    }
    n++;
}

/*
9) Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var n = 10;
while(n <= 20){
    if(n % 2 != 0){
        console.log(n);
    }
    n++;
}

/*
10) Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(var i = 100; i <= 120; i++){
    if(i % 2 === 0) console.log(i);
}

console.log( 'Números ímpares entre 111 e 125:' );
for(var i = 111; i <= 125; i++){
    if(i % 2) console.log(i);
}
