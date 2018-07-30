# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(num1, num2){
  let resultado = num1 + num2;
  return resultado;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let recebeSoma = soma(2, 3) + 5;

// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var novaVariavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function imprime() {
  novaVariavel = 5;
  var texto = "O valor da variável agora é ";
  var imprime = texto + novaVariavel;
  return imprime;
}

// Invoque a função criada acima.
impirme();

// Qual o retorno da função? (Use comentários de bloco).
O valor da varável agora é 5

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplica (num1, num2, num3) {
  if(num1 == null || num2 == null || num3 == null) {
    return "Preencha todos os valores corretamente!";
  }else {
    var resParcial = (num1 * num2) * num3;
    var resultado = resParcial + 2;
    return resultado;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplica(2, 3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplica(2, 3, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
14

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function argumentos(num1, num2, num3) {
  if(arguments.length == 1) {
    return num1;
  }else if(arguments.length == 2) {
    return num1 + num2;
  }else if(argum.length == 3) {
    return (num1 + num2)/num3;
  }else if(arguments.length == 0) {
    return false;
  }else if(arguments.length < 1 || arguments.length => 4) {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
```
