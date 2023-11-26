// # Desafio da semana #2

// Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
  return x + y;
}
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const resultadoSoma = soma(13, 18) + 5;

// Qual o valor atualizado dessa variável?
console.log(resultadoSoma); // 36

// Declare uma nova variável, sem valor.
let myVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue(adicionaValor) {
  myVar = adicionaValor;

  return `O valor da variável agora é ${adicionaValor}`;
}
// Invoque a função criada acima.

console.log(addValue(50));

// Qual o retorno da função? (Use comentários de bloco).

/**
 * O valor da variável agora é 50
 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function validation(x, y, z) {
  if (x === undefined || y === undefined || z === undefined) {
    return 'Preencha todos os campos corretamente!';
  }

  return x * y * z + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(validation(5, 6));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os campos corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(validation(5, 8, 9));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 362

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function validation2(x, y, z) {
  if (x !== undefined && y === undefined && z === undefined) {
    return x;
  }

  if (x !== undefined && y !== undefined && z === undefined) {
    return x + y;
  }

  if (x !== undefined && y !== undefined && z !== undefined) {
    return (x + y) / z;
  }

  if (x === undefined && y === undefined && z === undefined) {
    return false;
  }

  return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(validation2(1)); // 1
console.log(validation2(2, 6)); // 8
console.log(validation2(2, 6, 15)); // 0.5333333333333333
console.log(validation2()); // false
console.log(validation2(null)); // null
