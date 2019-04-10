# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(x, y) {
  return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var sum = sum(10, 5);
sum + 5;

// Qual o valor atualizado dessa variável?
20

// Declare uma nova variável, sem valor.
var x;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue() {
  x = 5;
  return 'O valor da váriavel agora é ' + x;
}

// Invoque a função criada acima.
addValue();

// Qual o retorno da função? (Use comentários de bloco).
/* O retorno da função é 
 é a descrição mais o valor atribuido a váriavel x
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicacao(x, y, z) {
  if (x === null || y === null || z === null) {
    return 'Preencha todos os valores corretamente!'
  } else {
    return (x * y * z)  + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicacao(3, 3, null);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicacao(3, 3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 29

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function sum(x, y, z) {
  if (x !== null && y !== null) return x + y;
  if (x !== null && z !== null) return x + z;
  if (y !== null && z !== null) return y + z;
  if (x !== null) return x;
  if (y !== null) return y;
  if (z !== null) return z;
  if (y !== null && x !== null && y !== null) return (x + y) / z;
  if (y === null || x === null || z === null) return false;

  return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
sum(null, null, null) // false
sum(1, null, null); // 1
sum(null, 2, null); // 2
sum(null, null, 3); // 3
sum(1, 2, null); // 3
sum(1, null, 3); // 4
sum(null, 2, 3); // 5
sum(1, 2, 3); // 3

```
