/*
Crie um array com 5 items (tipos variados).
*/
let myArr = [1, 1.2 , function(){}, {}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){
            myArr.push(item);
        }
        addItem('strings');
        console.log(myArr);

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([1.2, 'sahsuhas', {}]);
        console.log(myArr);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log(`O segundo elemento do segundo array é ${myArr[myArr.length-1][1]}`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${myArr.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${myArr[myArr.length-1].length} itens.`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
for(let x=10;x<=20;x++){
            (x%2===0) ? console.log(x) : '';
        }

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
for(let x=10;x<=20;x++){
            (x%2!==0) ? console.log(x) : '';
        }

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(let x=100;x<=120;x++){
            (x%2===0) ? console.log(x) : '';
        }
        

console.log( 'Números ímpares entre 111 e 125:' );
for(let x=111;x<=125;x++){
            (x%2!==0) ? console.log(x) : '';
        }
