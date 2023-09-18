# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma (x,y) {
result = x + y
return result
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const resultado = soma(1,1) + 5;

// Qual o valor atualizado dessa variável?
7

// Declare uma nova variável, sem valor.
let variavelSemValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function atribuiValor (){
variavelSemValor = 5;

return console.log(`O valor da variável agora é ${variavelSemValor}.`)
}

// Invoque a função criada acima.
atribuiValor()

// Qual o retorno da função? (Use comentários de bloco).
/* "O valor da variável agora é 5." */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplica (x,y,z) {

if(x === undefined || y === undefined || z === undefined){
return console.log("Preencha todos os valores corretamente!")
}

const resultado = x * y * z

return console.log(resultado + 2)
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplica(1,1)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// "Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplica(1,2,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function algo (x,y,z) {

if(x !== undefined && y === undefined && z === undefined){

console.log(x);

} else if (x !== undefined && y !== undefined && z === undefined){
let resultado = x + y

console.log(resultado);

} else if(x !== undefined && y !== undefined && z !== undefined){
let resultado = (x + y)/z;

console.log(resultado);

}else if(x === undefined && y === undefined && z === undefined) {
let resultado = false;

console.log(resultado);
} else{
let resultado = null;

console.log(resultado);
}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
algo() //false
algo(1) // 1
algo(1,3) // 4
algo(1,3,2) // 2
