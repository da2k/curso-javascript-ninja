# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma( parcela1, parcela2 ) {
  return parcela1 + parcela2;
  }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var valorSomado = soma( 1 , 2 ) + 5;

// Qual o valor atualizado dessa variável?
valorSomado; // 7

// Declare uma nova variável, sem valor.
var vazia;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function definirVazia( novoValor ) {
  vazia = novoValor;
  return ("O valor da variável agora é " + vazia + ".");
  }

// Invoque a função criada acima.
definirVazia( 10 );

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 10.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicacao(fator1, fator2, fator3) {
  if (fator1 === undefined || fator2 === undefined || fator3 === undefined) {
    return ("Preencha todos os valores corretamente");
  }
  return ((fator1 * fator2 * fator3) + 2);
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicacao(1,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicacao(1,2,3);

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

function desafioMaior( arg1, arg2, arg3 ) {
//se nenhum argumento for passado:
  if (arg1 === undefined) { return false; }
//se um argumento for passado:
  if (arg2 === undefined) { return (arg1); }
//se dois argumentos forem passados:
  if (arg3 === undefined) { return (arg1 + arg2); }
//se três argumentos forem passados:
  if (!(arg1 === undefined || arg2 === undefined || arg3 === undefined)) { return ((arg1 + arg2)/arg3); }
//se nada for satisfeito
  return null;
}
  

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

desafioMaior(); // false
desafioMaior(1); // 1
desafioMaior(1,2); // 3
desafioMaior(1,2,3); // 1
