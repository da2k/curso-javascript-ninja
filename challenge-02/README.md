# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(value1, value2) {
  return value1 + value2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var sum = sum(10, 2) + 5;

// Qual o valor atualizado dessa variável?
17

// Declare uma nova variável, sem valor.
var newVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function changeValue() {
  newVar = 'Changed value!';
  return 'O valor da variável agora é ' + newVar + '.';
}

// Invoque a função criada acima.
changeValue();

// Qual o retorno da função? (Use comentários de bloco).
/*
 'O valor da variável agora é Changed value.'
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiply(arg1, arg2, arg3) {
  if (arg1 === undefined || arg2 === undefined || arg3 === undefined)
    return 'Preencha todos os valores corretamente!';
  else
    return (arg1 * arg2 * arg3) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
multiply(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiply(1, 2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function avulsa(arg1, arg2, arg3) {
  if (arg1 === undefined && arg2 === undefined && arg3 === undefined)
    return false;
  if (arg1 !== undefined && arg2 !== undefined && arg3 !== undefined)
    return (arg1 + arg2) / arg3;
  if (arg1 !== undefined && arg2 === undefined && arg3 === undefined)
    return arg1;
  if (arg2 !== undefined && arg1 === undefined && arg3 === undefined)
    return arg2;
  if (arg3 !== undefined && arg1 === undefined && arg2 === undefined)
    return arg3;
  if (arg1 !== undefined && arg2 !== undefined && arg3 === undefined)
    return arg1 + arg2;
  if (arg1 !== undefined && arg3 !== undefined && arg2 === undefined)
    return arg1 + arg3;
  if (arg2 !== undefined && arg3 !== undefined && arg1 === undefined)
    return arg2 + arg3;
  return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
avulsa(); // false
avulsa(1); // 1
avulsa(1, 2); // 3
avulsa(1, 2, 3); // 1

```
