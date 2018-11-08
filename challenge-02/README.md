# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function recebe (x,y) {
	return x + y;
}


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var qualquer = recebe(2, 6) + 5;


// Qual o valor atualizado dessa variável?
13

// Declare uma nova variável, sem valor.
var without;


/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function bora() {
	without = 'with value';
	return `Onde ${without} é o novo valor da variavel`
}


// Invoque a função criada acima.
bora()

// Qual o retorno da função? (Use comentários de bloco).
/* resultado da function
	Onde with value é o novo valor da variavel
*/


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function lero(x, y, z) {
	if(typeof x === 'number' && typeof y === 'number' && typeof z === 'number' ) {
		return (x * y * z) + 2;
	} else {	
		return 'Preencha todos os valores corretamente!'
	}
}


// Invoque a função criada acima, passando só dois números como argumento.
lero(2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
lero(2,2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function lero(x, y, z) {
	if (typeof x === 'number' && typeof y === 'undefined' && typeof z === 'undefined' ) {
		return x;
	} else if (typeof x === 'number' && typeof y === 'number' && typeof z === 'undefined') {
		return x + y;
	} else if (typeof x === 'number' && typeof y === 'number' && typeof z === 'number') {
		return (x + y) / z;
	} else if (typeof x === 'undefined' && typeof y === undefined && z === undefined) {
		return false;
	} else {
		return null;
	}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
// nenhum: false
// um: 1
// dois: 6
// tres: 3 


```