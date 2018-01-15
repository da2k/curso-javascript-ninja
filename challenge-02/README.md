# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y) {
  return x+y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somar = soma(1,2) + 5;

// Qual o valor atualizado dessa variável?
8

// Declare uma nova variável, sem valor.
var nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function adicionaValor(value) {
  value = 'VALOR';
  return 'O valor da variável agora é'+value+'.'
}

// Invoque a função criada acima.
adicionaValor(nova);

// Qual o retorno da função? (Use comentários de bloco).

  return 'O valor da variável agora é ' + value + '.'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function x(a, b, c) {
  if(a == null || b == null || c == null) {
    return 'Preencha todos os campos corretamente!';
  }
  return (a * b * c) + 2;

}

// Invoque a função criada acima, passando só dois números como argumento.
x(1,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
'Preencha todos os campos corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
?

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
x(1,2,3)
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
function y(a,b,c) {
  if(b === undefined && c === undefined) {
    return a;
  } else if(c === undefined) {
    return a + b;
  } else if (a !== undefined && b !== undefined && c !== undefined) {
    return (a + b) / c;
  } else if (a === undefined && b === undefined && c === undefined) {
    return false;
  } else {
    null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

> y()
undefined
> y();
undefined
> y(1)
1
> y(1,2)
3
> (1,2,3)
3
> y();
undefined
> y(a,b,c,d)
ReferenceError: a is not defined
    at repl:1:3
    at ContextifyScript.Script.runInThisContext (vm.js:44:33)
    at REPLServer.defaultEval (repl.js:239:29)
    at bound (domain.js:301:14)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at REPLServer.onLine (repl.js:440:10)
    at emitOne (events.js:120:20)
    at REPLServer.emit (events.js:210:7)
    at REPLServer.Interface._onLine (readline.js:279:10)
    at REPLServer.Interface._line (readline.js:626:8)
> y(1,2,3,4)
1
