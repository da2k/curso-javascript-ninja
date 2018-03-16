# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(a,b) { return a + b; }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var x = sum(2, 35) + 5;

// Qual o valor atualizado dessa variável?
42;

// Declare uma nova variável, sem valor.
var y;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function getText() {
  y = 42;
  return `O valor da variável agora é ${valor}`
}

// Invoque a função criada acima.
getText();

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 42 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiply(a, b, c) {
  if(typeof a === 'undefined' || typeof b === 'undefined'|| typeof c === 'undefined') {
    return 'Preencha todos os valores corretamente!';
  }
  return (a * b * c) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
multiply(1, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* Preencha todos os valores corretamente! */

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiply(1, 2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* 6 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.//
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
// supuz que pelo enunciado 'argumento passado' fosse argumento com tipo não undefined
// caso a função não pudesse receber parâmetros não numéricos o mais correto seria verificar
/* function g() {
  if(a) {
    if(b) {
      if(c) { return (a + b) / c;  }
      return a + b;
    }
    if(c) { return a; }
    return a + c;
  }
  if(b) {
    if(c) { return b + c; }
    return b;
  }
  if(c){
    return c;
  }
  if(!a && !b && !c) {
    return false;
  }
  return null;
} */ 
// além disto não consigo imaginar um caso em que o retorno null aconteça a verificação de 
// if(a && b && c) foi feita só para ser possível ter um return null;
function f(a, b, c) {
  if(typeof a !== 'undefined') {
    if(typeof b !== 'undefined') {
      if(typeof c !== 'undefined') { return (a + b) / c;  }
      return a + b;
    }
    if(typeof c === 'undefined') { return a; }
    return a + c;
  }
  else if(typeof b !== 'undefined') {
    if(typeof c !== 'undefined') { return b + c; }
    return b;
  }
  else if(typeof c !== 'undefined'){
    return c;
  }
  else if(typeof a === 'undefined' && typeof b === 'undefined' && typeof c === 'undefined') {
    return false;
  }
  return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
f(); // false
f(10); // 10
f(10, 10); // 20
f(10, 10, 10); // 2

// suponho que os cenários abaixo não sejam plausíveis..
f(undefined, 10, 10); // 20
f(10, undefined, 10); // 20
f(10, 10, undefined); // 20
f(10, undefined, undefined); // 10
f(undefined, 10, undefined); // 10
f(undefined, undefined, 10); // 10
f(undefined, undefined, undefined); // false

```
