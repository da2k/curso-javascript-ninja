# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sumTwo(number1, number2){
  var nb1 = number1;
  var nb2 = number2;
  var sum = nb1 + nb2;
  return sum;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var sumFive = sumTwo(5,4) + 5;

// Qual o valor atualizado dessa variável?
14

// Declare uma nova variável, sem valor.
var newVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
var newVar;
function receiveValue(value) {
  newVar = value;
  return "O valor da variável agora é " + newVar;
}

// Invoque a função criada acima.
receiveValue(5);

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 5 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function threeArgs(x, y, z) {
  var arg1 = x;
  var arg2 = y;
  var arg3 = z;
  
  if (arg1 === null || arg2 === null || arg3 === null) {
    return "Preencha todos os valores corretamente!";
  } else {
    return arg1 * arg2 * arg3 + '2';
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
threeArgs(1,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
threeArgs(1,2,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// '62'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function threeArgsAgain(x, y, z) {
    if (x === undefined && y === undefined && z === undefined) {
      return 'false';
    } 
    else if (x !== undefined && y !== undefined && z !== undefined) {
      return (x + y) / z;      
    } 
    else if (x !== undefined && y !== undefined && z === undefined) {
      return x + y;
    } 
    else if (x !== undefined && y === undefined && z === undefined) {
      return x;    
    }
    else {
      return null;
    }
}
    
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de // linha ao lado da função com o resultado de cada invocação.
threeArgsAgain()        // 'false'
threeArgsAgain(1)       // 1 
threeArgsAgain(2,1)     // 3 
threeArgsAgain(3,1,2)   // 2
```
