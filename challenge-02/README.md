# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma( primeiro, segundo ) {
	return primeiro + segundo;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma( 3, 7 ) + 5;

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
var texto;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function valor_texto(valor) {
	return 'O valor da variável agora é ' + valor;
}

// Invoque a função criada acima.
valor_texto(50);

// Qual o retorno da função? (Use comentários de bloco).
/*
O valor da variável agora é 50
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function soma_com_validacao( valor_1, valor_2, valor_3 ) {
	if ( valor_1 === undefined || valor_2 === undefined || valor_3 === undefined ) {
		var resultado = 'Preencha todos os valores corretamente!';
	} else {
		var resultado = valor_1 * valor_2 * valor_3 + 2;
	}
	return resultado;
}

// Invoque a função criada acima, passando só dois números como argumento.
soma_com_validacao(3, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
soma_com_validacao(3, 3, 6);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
56

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function soma_com_condicao( primeiro_valor, segundo_valor, termeiro_valor ) {
	if ( primeiro_valor !== undefined && segundo_valor === undefined && termeiro_valor === undefined ) {
		var resultado = primeiro_valor;
	} else if ( primeiro_valor !== undefined && segundo_valor !== undefined && termeiro_valor === undefined ) {
		var resultado = primeiro_valor + segundo_valor;
	} else if ( primeiro_valor !== undefined && segundo_valor !== undefined && termeiro_valor !== undefined ) {
		var resultado = ( primeiro_valor + segundo_valor ) / termeiro_valor;
	} else if ( primeiro_valor === undefined && segundo_valor === undefined && termeiro_valor === undefined ) {
		var resultado = false;
	} else {
		var resultado = null;
	}
	return resultado;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
soma_com_condicao(); // false
soma_com_condicao( 10 ); // 10
soma_com_condicao( 10, 5 ); // 15
soma_com_condicao( 10, 5, 5 ); // 3
```