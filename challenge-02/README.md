# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
var x = 3;
var y = 7;
function somar(x, y) {
  var equac = x + y;
  return equac;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var d = somar(x, y);
d += 5;

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
var b;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function result() {
  b = d;
  return 'O valor da variável agora é '+b;
}

// Invoque a função criada acima.
result();

// Qual o retorno da função? (Use comentários de bloco).
15

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multip(x, y, z) {
  if(x == null || y == null || z == null) {
    return 'Preencha todos os valores corretamente!';
  } else {
    var som = (x * y * z) + 2;
    return som;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
multip(2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multip(5, 10, 25);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
752

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function final(x, y, z) {
  if(x == null && y == null && z == null) {
    return 'false';
  } else if(y == null && z == null) {
    return x;
  } else if(z == null) {
    var soma = x + y;
    return soma;
  } else {
    var calc = (x + y) / z;
    return calc;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
final(); // 'false'
final(5); // 5
final(5,10); // 15
final(5,10,25); // 0.6
```
