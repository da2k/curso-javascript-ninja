# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somando(y, x){
  var soma = x + y;
  return soma;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var qualquer = somando(15,10)+5;

// Qual o valor atualizado dessa variável?
qualquer = 30;

// Declare uma nova variável, sem valor.
var newvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addvalue (){
  return newvar = 'VALOR'
}

// Invoque a função criada acima.
addvalue();

// Qual o retorno da função? (Use comentários de bloco).

/* addvalue = 'VALOR' */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function triade (valor1, valor2, valor3){
  if (valor1 == null  || valor2 == null || valor3 == null){
    return 'Preencha todos os valores corretamente!';
  } else {
    var mult = (valor1 * valor2 * valor3)
    var totalfinal = mult + 2;
    return  totalfinal;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
triade(10, 10);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
Preencha todos os valores corretamente!
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
traide(2, 2, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// 10

/*
Crie uma função com as seguintes características:
-1. A função deve receber 3 argumentos.
-2. Se somente um argumento for passado, retorne o valor do argumento.
-3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function qualquer(arg1, arg2, arg3){
  if (arg1 != null && arg2 == null && arg3 == null) {
    return arg1;
  }else if (arg1 != null && arg2 != null arg3 == null) {
    return arg1 + arg2;
  }else if (arg1 != null arg2 != null arg3 != null) {
    return arg1 + arg2 / arg3
  }else if (arg1 == null arg2 == null arg3 == null) {
    return false;
  }else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
qualquer(); //return false

qualquer(1); // return 1

qualquer(1, 2); //return 3

qualquer(1, 2, 3); //return 1 + 2 / 3 = 1

```
