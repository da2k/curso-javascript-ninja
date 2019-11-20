# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function sum(n1, n2){
  return n1 + n2;
 }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var soma = 5 + sum(5, 3);

// Qual o valor atualizado dessa variável?
soma = 13;

// Declare uma nova variável, sem valor.
var random;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function addValue(value){
  random = value;
  var texto = 'O valor da variável agora é ' + random;
  return texto;
}

// Invoque a função criada acima.

addValue(10)

// Qual o retorno da função? (Use comentários de bloco).

/* A função retornará um texto
com o novo valor atribuido a variável
chamada random
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function mathOp(x, y, z){
  if(isNaN(x) || isNaN(y) || isNaN(z)){
    return 'Por favor, preencha novamente passando todos os parâmetros e que todos sejam do tipo number';
  }else{
    var mult = (x*y*z) + 2;
    return mult;
  }


// Invoque a função criada acima, passando só dois números como argumento.

mathOp(3, 5)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

/* 
O valor retornado será uma string contendo a seguinte informação:
'Por favor, preencha novamente passando todos os parâmetros e que
todos sejam do tipo number'
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

mathOp(3, 3, 3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

/*
A função acima retornará uma variável chamada mult que
mostrará o resultado do que foi pedido, no caso
a função retorará o valor 29
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function conditionalFunc(x, y, z){
    if(x !== undefined && y === undefined && z === undefined){
        return x;
       }else if(x === undefined && y !== undefined && z === undefined){
        return y;
       }else if(x === undefined && y === undefined && z!== undefined){
        return z;
       }else if(x!== undefined && y!== undefined && z === undefined){
        return x + y;
       }else if(x!== undefined && y === undefined && z !== undefined){
         return x + z;
       }else if(x === undefined && y!== undefined && z !== undefined){
        return y+z;
       }else if(x !== undefined && y!== undefined && z !== undefined){
         return (x+y)/z;
       }else if(x === undefined && y === undefined && z === undefined){
         var isFalse = false;
         return isFalse;
       }else{
        return null;
    }
 }


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

conditionalFunc() //retorna um valor booleano com o valor 'false'
conditionalFunc(10) //retorna o valor passado como parâmetro, no caso o 10
conditionalFunc(10, 5) //retorna a soma dos dois parâmetros passados, no caso retornará o valor 15
conditionalFunc(10, 10, 4) //retorna a divisão da soma dos dois primeiros parâmetros pelo terceiro parâmetro, valor será 5

```
