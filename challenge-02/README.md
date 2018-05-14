# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(x, y) {
	return x + y;
}


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somaCinco = soma(2, 2) + 5;

// Qual o valor atualizado dessa variável?
9

// Declare uma nova variável, sem valor.
var nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adiciona() {
	nova = 10;
	return "o valor da variável agora é " + nova;
}

// Invoque a função criada acima.
adiciona();

// Qual o retorno da função? (Use comentários de bloco).
/* 'o valor da variável agora é 10' */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function funcao (a, b, c) {
	if (a == undefined || b == undefined || c == undefined) {
		return "Preencha todos os valores corretamente!";
	} else {
		var result = (a * b * c) + 2;
		return result;
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
funcao(3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* 'Preencha todos os valores corretamente!' */

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
funcao(3, 3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* 29 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function ifes (a, b, c) {
	if (a != undefined && b == undefined && c == undefined) {
		var printA = a;
		return printA;
	} else if (a != undefined && b != undefined && c == undefined) {
		var beCe = a + b;
		return beCe;
	} else if (a != undefined && b != undefined && c != undefined) {
		var result = (a + b) / c;
		return result;
	} else if (a == undefined && b == undefined && c == undefined){
		var falso = false;
		return falso;
	} else {
		var nulo = null;
		return null;
	}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

ifes();
// false

ifes(7);
// 7

ifes (4, 4);
// 8

ifes (4, 6, 8);
// 1.25


```