/*
Crie um array com 5 items (tipos variados).
*/
var myArray =[ 'antonio' , { pessoa: 'idade'} , function matriz() {} , 100 , 50 ];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(add) {
    return myArray.push(add);
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem( [ 'black' , 'blind' , 'iron']);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + myArray[5][1]);
// O segundo elemento do segundo array é blind
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' +  myArray.length+ ' itens.');
// O primeiro array tem 6 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + myArray[5].length + ' itens.');
// O segundo array tem 3 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

   function cont(){
       var init = 10;
        while (init <=20){
            init % 2 == 0 ? console.log(init): '';
            console.log(init);
            init ++;
        };
      }
      cont();

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

console.log( 'Números ímpares entre 10 e 20:' );

function cont(){
       var init = 10;
        while (init <=20){
            init % 2 == 1 ? console.log(init): '';
            init ++;
        };
      }
      cont();

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

     function cont() {
        for(var i = 100; i <=120;i++){
            i % 2 == 0 ? console.log(i) : '';
        };
     }
     cont();

console.log( 'Números ímpares entre 111 e 125:' );

     function cont() {
        for(var i = 111; i <=125;i++){
            i % 2 == 1 ? console.log(i) : '';
        };
     }
     cont();
