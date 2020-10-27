# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
	return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var res = soma(10, 85) + 5;

// Qual o valor atualizado dessa variável?
100

// Declare uma nova variável, sem valor.
var numNull;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValueVar() {
	numNull = 10;
	return numNull;
}

// Invoque a função criada acima.
addValueVar();

// Qual o retorno da função? (Use comentários de bloco).
/*
10
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function math(x, y, z) {
  
  if(!x || !y || !z) {
    return 'Preencha todos os valores corretamente!';
    
  } else {
	  var mult = x * y;
	  var rmath = mult * z + 2;
	  return rmath;
	};
}
// Invoque a função criada acima, passando só dois números como argumento.
math(10, 19);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
"Preencha todos os valores corretamente!"
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
math(2, 5, 10);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
102
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function math(x, y, z) {

  if (x != undefined && y == undefined && z == undefined) {
    return x; // math(100) retorna 100
  } else if (x != undefined && y != undefined && z == undefined) {
      return x + y; // math(50,50) retorna a soma de 'x' e 'y'
  } else if (x != undefined && y != undefined && z != undefined) {
    var res = x + y; // somando 'x' e 'y'
    return res / z; // math(250, 250, 5) retorna 100
  } else if (x == undefined && y == undefined && z == undefined) {
    return false; // math() retorna false
  }
  else {
    return null; // retorna null
  }

}
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
math(100) // retorna 100
math(50, 50) // retorna 100
math(100, 100, 2) // retorna 100
math() // retorna false
```
