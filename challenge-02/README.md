# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(num1, num2) {
  return num1 + num2
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma(10, 2) + 5

// Qual o valor atualizado dessa variável?
17

// Declare uma nova variável, sem valor.
var numero

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function frase() {
  numero = 3

  return 'O valor da variável agora é ' + numero
}

// Invoque a função criada acima.
frase()

// Qual o retorno da função? (Use comentários de bloco).
// O valor da variável agora é 3

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calcula(param1, param2, param3) {
  if (!(param1 && param2 && param3)) {
    return 'Preencha todos os valores corretamente!'
  }

  return param1 * param2 * param3 + 2
}

// Invoque a função criada acima, passando só dois números como argumento.
calcula(10, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
calcula(10, 2, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 42

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calcular(param1, param2, param3) {
  if (param1 && param2 && param3) {
    return (param1 + param2) / param3
  } else if (param1 && param2) {
    return param1 + param2
  } else if (param1 && param3) {
    return param1 + param3
  } else if (param2 && param3) {
    return param2 + param3
  } else if (param1 || param2 || param3) {
    return param1 || param2 || param3
  } else {
    return false
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
calcular() // false
calcular(10) // 10
calcular(10, 20) // 30
calcular(10, 20, 30) // 1
```
