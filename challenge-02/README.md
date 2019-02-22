# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
  return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somarNumeros = soma(1, 2) + 5;

// Qual o valor atualizado dessa variável?
8

// Declare uma nova variável, sem valor.
var a;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function alteraValor() {
  a = 'VALOR';
  return a;
}

// Invoque a função criada acima.
alteraValor();

// Qual o retorno da função? (Use comentários de bloco).
/* O valor de retorno é uma string 'VALOR'. */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function Multiplicar(a, b, c) {
  if(a && b && c) {
    return (a * b * c) + 2;
  } else {
    return 'Preencha todos os valores corretamente!';
  }
}


// Invoque a função criada acima, passando só dois números como argumento.
Multiplicar(2, 3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// A função retorna a string 'Preencha todos os valores corretamente!';

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
Multiplicar(2, 3, 4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// A função retorna o número 26

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function validarArgumentos(a, b, c) {
  if(a && !b) {
    return a;
  } else if(a && b && !c) {
    return a + b;
  } else if(a && b && c) {
    return (a + b)/c;
  } else if(!a && !b && !c){
    return false;
  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
/*Professor no caso essa função, ela deve funcionar apenas com argumentos númericos, não? Pois se receber um argumento de string no terceiro caso, pode ocorrer de o returno ser NaN.*/
validarArgumentos(); //false
validarArgumentos(1); //1
validarArgumentos(1, 2); //3
validarArgumentos(1, 2, 3); //1
```
