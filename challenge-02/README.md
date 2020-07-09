# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function addNumbers (number1, number2) {
    return number1 + number2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

let sum = addNumbers(25, 7) + 5;

// Qual o valor atualizado dessa variável?
37

// Declare uma nova variável, sem valor.
let any;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function setValue(value) {
  any = value;
  let changedValue = "O valor da variável agora é " + any;
  return changedValue;
}

// Invoque a função criada acima.
console.log(setValue("VALOR"));

// Qual o retorno da função? (Use comentários de bloco).
/*
    O valor da variável agora é VALOR.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplication(num, num2, num3) {
  let mult = num * num2 * num3 + 2;

  if (num3 === undefined) {
    console.log("Preencha os valores corretamente");
  }
    return mult;
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(multiplication(5, 6));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
Preencha os valores corretamente


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(multiplication(5, 6, 7));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
212

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

const calc = (value1, value2, value3) => {
  if(value1 === undefined) {
    return false;

  } else if(value1  && value2 === undefined) {
    return value1;

  } else if(value1 && value2 && value3 === undefined) {
    return value1 + value2;

  } else if(value3) {
    return (value1 + value2) / value3;

  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

console.log(calc()); // false
console.log(calc(10)); // 10
console.log(calc(10, 20)); // 30
console.log(calc(10, 20, 30)); // 1
```
