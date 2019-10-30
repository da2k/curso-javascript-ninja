# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(x, y) {
 var soma = x + y;
 return soma;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var segundaSoma = soma(4, 5) + 5;

// Qual o valor atualizado dessa variável?
segundaSoma

// Declare uma nova variável, sem valor.
var semvalor

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValor() {
  semvalor = 'VALOR';
  return 'O valor da variável agora é ' + semvalor
}

// Invoque a função criada acima.
addValor();

// Qual o retorno da função? (Use comentários de bloco).
/* 'O valor da variável agora é VALOR' */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplica(x,y,z) {
  if (x == null || y == null || z == null) {
    return 'Preencha todos os parâmetros!';
  } else {
    var mult = x * y * z;
    var total = mult + 2;
    return total;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplica(2,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os parâmetros!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplica(2,3,4)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 26

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function xpto(x,y,z) {
  if (y == null && z == null) {
    return x;
  } else if (z == null) {
    return x + y;
  } else if (x !== null && y !== null && z !== null) {
    var soma = x + y;
    var div = soma / z;
    return div;
  } else if (x == null && y == null && z == null) {
    return false;
  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
xpto(); /* undefined - não consegui fazer com que ele retorne false */
xpto(3); /* 3 */
xpto(3,4); /* 7 */
xpto(3,4,5); /* 1.4 */
```
