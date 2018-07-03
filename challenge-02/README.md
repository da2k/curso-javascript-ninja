# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
  var total = x + y;
  return total;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var invoke = soma(10, 5) + 5;

// Qual o valor atualizado dessa variável?
20

// Declare uma nova variável, sem valor.
var novaVariavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function descVar(valor) {
  novaVariavel = valor;
  return "O valor da variável agora é: " novaVariavel;
}

// Invoque a função criada acima.
descVar(5);

// Qual o retorno da função? (Use comentários de bloco).
/* 'O valor da variável agora é: 5'*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function tripleVal(val1, val2, val3) {
  if (val1 && val2 && val3) {
    return (val1 * val2 * val3) + 2;
  } else {
    return "Preencha todos os valores corretamente";    
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
tripleVal(2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*Preencha todos os valores corretamente*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
tripleVal(2,3,10);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
62

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function elseIfs(arg1, arg2, arg3) {
  if (arg1 && arg2 && arg3) {
    return (arg1 + arg2) / arg3;    
  } else if (arg1 && arg2) {
    return arg1 + arg2;
  } else if (arg1) {
    return arg1;
  } else if (!arg1) {
    return false;
  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
elseIfs(); //false
elseIfs(5); //5
elseIfs(5,2); //7
elseIfs(5,4,3); //3
```
