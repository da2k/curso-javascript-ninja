# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(x, y) {
  return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var numSum = sum(5, 3) + 5;

// Qual o valor atualizado dessa variável?
13

// Declare uma nova variável, sem valor.
var text;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function insertText() {
  text = 'VALOR';
  return 'O valor da variável agora é ' + text + '.';
}

// Invoque a função criada acima.
insertText();

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
function equation(x,y,z) {
  if(x === undefined) {
    return 'Preencha todos os valores corretamente!';
  } else if(y === undefined) {
    return 'Preencha todos os valores corretamente!';
  } else if(z === undefined) {
    return 'Preencha todos os valores corretamente!';
  } else {
    return x * y * z + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
equation(2,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
equation(2,5,10)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 102

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function newEquation(x,y,z) {
	if(arguments.length === 1){
  	return arguments[0];
  } else if(arguments.length === 2){
    return arguments[0] + arguments[1];
  } else if(arguments.length === 3) {
  	return (arguments[0] + arguments[1]) / arguments[2];
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
newEquation(5) //5
newEquation(5,10) //15
newEquation(5,10,3) //5
```
