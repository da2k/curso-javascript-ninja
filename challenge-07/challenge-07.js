/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1,2,'Rios',{cor: 'Red'},function soma(x,y){return x+y;}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
    arr.push(item);
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem({arr2:[5,'Santos','Worship']});

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("O segundo elemento do segundo array é " + arr[7].arr2[1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O primeiro array tem " + arr.length + " itens.");
// O primeiro array tem 8 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("O segundo array tem " + arr[7].arr2.length + " itens.");
// O segundo array tem 3 itens

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var num = 10;
while(num >= 10 && num <=20){
    if(num % 2 == 0){
        console.log(num);
    }
    num++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var num = 10;
while(num >= 10 && num <=20){
    if(num % 2 != 0){
        console.log(num);
    }
    num++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(num = 100; num >= 100, num <= 120; num++){
    if(num % 2 == 0){
        console.log(num);
    }
}

console.log( 'Números ímpares entre 111 e 125:' );
for(num = 111; num >= 111, num <= 125; num++){
    if(num % 2 != 0){
        console.log(num);
    }
}