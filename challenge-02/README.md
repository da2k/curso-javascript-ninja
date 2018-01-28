# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(n1, n2) {
  return n1 + n2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var calculo = soma(10, 5) + 5;

// Qual o valor atualizado dessa variável?
20;

// Declare uma nova variável, sem valor.
var novaVariavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function novoValor() {
  novaVariavel = 'Ninja';
  return 'O valor da variável agora é ' + novaVariavel;
}

// Invoque a função criada acima.
novoValor(novaVariavel);

// Qual o retorno da função? (Use comentários de bloco).
/*
'O valor da variável agora é 51'
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function tresArgumentos(arg1, arg2, arg3) {
  if (arg1 || arg2 || arg3 ) {
    return 'Preencha todos os valores corretamente!';
  } else {
    return (arg1 * arg2 * arg3) + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
tresArgumentos(2, 4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
 'Preencha todos os valores corretamente!'
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
tresArgumentos(2,4,6);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* 50 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function argumentos(arg1, arg2, arg3) {
  var totalDeArgumentos = arguments.length;

  if (totalDeArgumentos === 0) {
    return false;
  }
  else if (totalDeArgumentos === 1) {
    return arg1;
  }
  else if (totalDeArgumentos === 2) {
    return arg1 + arg2;
  }
  else if (totalDeArgumentos === 3) {
    return (arg1 + arg2) / arg3;
  }
  else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
argumentos(); // false
argumentos(1); // 1
argumentos(1,2); // 3
argumentos(6,4,2); // 5
```
