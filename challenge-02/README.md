# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
	retun x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma(10, 15) + 5;

// Qual o valor atualizado dessa variável?
30

// Declare uma nova variável, sem valor.
var x = 0;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adiciona_valor(valor) {
	x = 'O valor da variável agora é ' + valor + '. Onde ' + valor + ' é o novo valor da variável';
}

// Invoque a função criada acima.
adiciona_valor(10);

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 10. Onde 10 é o novo valor da variável */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calcula (x, y, z) {
	if (!x || !y || !z) {
		return 'Preencha todos os valores corretamente!';
	} else {
		return x * y * z + 2;
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
calcula(2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
calcula(2, 2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calcula2(x, y, z) {
	if (x && !y && !z) {
		return x;
	} else if (x && y && !z) {
		return x + y;
	} else if (x && y && z) {
		return (x + y) / z;
	} else if (!x && !y && !z) {
		return false;
	} else {
		return null;
	}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
calcula2(); // false
calcula2(2); // 2
calcula2(2, 4); // 6
calcula2(2, 4, 6); // 1
```