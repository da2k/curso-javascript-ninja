/*
Crie um array com 5 items (tipos variados).
*/
var arr = ["Jessica Lewinter", {curso: 'Engenharia da Computação'}, 
           function soma(x,y){return x + y;}, ['Java', 'Ruby', 'Javascript', 'PHP'], 23];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(arg){
    return arr.push(arg);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem(['Functions in javascript are weird', 32, {language: 'Javascript'}]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
var last = arr.length - 1;
console.log("O segundo elemento do segundo array é " + arr[last][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro elemento tem " + arr.length + " itens.");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + arr[last].length + " itens.");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

console.log( 'Números pares entre 10 e 20:');
var num = 10;

while(num <= 20){
    if(num%2==0){
        console.log(num);
    }
    num++;
}

// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
while(num <= 20){
    if(num%2==1){
        console.log(num);
    }
    num++;
}
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(num = 10; num<=20;num++){
     if(num%2==0){
        console.log(num);
    }
}

console.log( 'Números ímpares entre 111 e 125:' );
for(num = 10; num<=20;num++){
     if(num%2==1){
        console.log(num);
    }
}