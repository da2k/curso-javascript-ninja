# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(valorUm, valorDois) {
  return valorUm + valorDois;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var valor = soma(10, 20) + 5;

// Qual o valor atualizado dessa variável?
35

// Declare uma nova variável, sem valor.
var novaSoma;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function exercicioDois() {
  var novaSoma = 25;
  return "O valor da variável agora é " + novaSoma + "."
}

// Invoque a função criada acima.
exercicioDois();

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 25.*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function validacaoValores(valorUm, valorDois, valorTres) {
  if (valorUm === undefined || valorDois === undefined || valorTres === undefined) {
    return "Preencha todos os valores corretamente!";
  } else {
    return (valorUm * valorDois * valorTres) + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
validacaoValores(1, 1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
validacaoValores(1, 1, 1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 3

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function continuacaoValidacao(valorUm, valorDois, valorTres) {
  if (valorUm !== undefined && valorDois === undefined && valorTres === undefined) {
    return valorUm;
   } else if (valorUm !== undefined && valorDois !== undefined && valorTres === undefined) {
    return valorUm + valorDois;
   } else if (valorUm !== undefined && valorDois !== undefined && valorTres !== undefined) {
    return (valorUm + valorDois) / valorTres;
   } else if (valorUm === undefined && valorDois === undefined && valorTres === undefined) {
    return false;
   } else {
    return null;
   }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
continuacaoValidacao(10);          // 10
continuacaoValidacao(10, 20);      // 30
continuacaoValidacao(10, 20, 2);   // 15
continuacaoValidacao();            // false
```
