# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function somador(x, y){
var saldo;
saldo = x + y;
return saldo;
}


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var chamador = somador(2, 4) + 5;

// Qual o valor atualizado dessa variável?
11

// Declare uma nova variável, sem valor.

var temp


/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function newValue(){
var x = 10;
temp = x;
var message = 'O valor da variavel agora é: ' + temp;
return message;
}



// Invoque a função criada acima.

newValue();

// Qual o retorno da função? (Use comentários de bloco).

/*
'O valor da variavel agora é: 10'
*/


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function tresArgumentos(x, y, z){
var resto = 2;
var soma = x * y * z + resto;
var verificador = 'Preencha todos os valores corretamente';
if (x, y, z != null && x, y, z !== undefined){
var resultado = soma;
return resultado;
} 
else {
return verificador;
}
}



// Invoque a função criada acima, passando só dois números como argumento.

tresArgumentos(2, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// 'Preencha todos os valores corretamente'


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

tresArgumentos(2, 5, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//52

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

> function testeFinal (x,y,z){
... if(x,y,z != null){
..... var soma = x + y;
..... var divisao = soma / z;
..... return divisao;
..... }
... else if ( x && y != null && z == null){
..... return x + y;
..... }
... else if (x != null && y,z == null){
..... return x;
..... }
... else if (x,y,z == null){
..... var message = 'false';
..... return message;
..... }
... else {
..... var escape = 'null';
..... return escape;
..... }
... }


null
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

/*
testeFinal(10);
10
testeFinal(10,10);
20
testeFinal(10,10,10);
2
*/




```
