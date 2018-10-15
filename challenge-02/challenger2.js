// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(numb1, numb2) {
  return numb1 + numb2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = sum(5, 5) + 5;
z;
// Qual o valor atualizado dessa variável?
result;

// Declare uma nova variável, sem valor.
var newvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function setNewVar(addNewVar) {
  newvar = addNewVar;
  return "O valor da variavel agora é " + newvar;
}

// Invoque a função criada acima.
setNewVar("Novo Valor");

// Qual o retorno da função? (Use comentários de bloco).
// O valor da variavel agora é Novo Valor

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multSumTwo(number1, number2, number3) {
  if (arguments.length < 3) {
    return "Preencha todos os valores corretamente!";
  } else {
    var result = number1 * number2 * number3;
    return (result += 2);
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
multSumTwo(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multSumTwo(1, 2, 3);

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
function sumAdvanced(number1, number2, number3) {
  if (arguments.length === 0) {
    return false;
  } else if (arguments.length === 1) {
    return number1;
  } else if (arguments.length === 2) {
    return number1 + number2;
  } else if (arguments.length === 3) {
    return (number1 + number2) / number3;
  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
sumAdvanced(); // false
sumAdvanced(1); // 1
sumAdvanced(1, 2); // 3
sumAdvanced(1, 2, 3); // 1
sumAdvanced(1, 2, 3, 4); // null
