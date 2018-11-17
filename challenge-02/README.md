# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(arg1, arg2) {
	return arg1 + arg2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var recebe = soma(6 , 23) + '5';

// Qual o valor atualizado dessa variável?
295

// Declare uma nova variável, sem valor.
var novavar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addvalor() {

	novavar = 6;
	return 'O valor da variável agora é ' + novavar + '.';
}

// Invoque a função criada acima.
addvalor();

// Qual o retorno da função? (Use comentários de bloco).

/*A função vai retornar o seguinte resultado: */
	O valor da variável agora é 6.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function condicao ( arg1, arg2 , arg3 ) {
	if ( arg1 == null || arg2 == null || arg3 == null) {
		return 'Preencha todos os valores corretamente!';
	} else {
		return (arg1 * arg2 * arg3) + '2';
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
condicao(2 , 4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
	// A função acima terá que retornar o seginte: 
	//Preencha todos os valores corretamente!


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
condicao (1 , 2 , 1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//22

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function novacondicao (arg1 , arg2 , arg3){
	if(arg1 != null && arg2 == null && arg3 == null){
		return arg1;
	} else if(arg1 == null && arg2 != null && arg3 == null) {
		return arg2;
	} else if( arg1 == null && arg2 == null && arg3 != null) {
		return arg3;
	} 
	// 3
	else if(arg1 != null && arg2 != null && arg3 == null ) {
		return arg1 + arg2;
	} else if(arg1 != null && arg2 == null && arg3 != null) {
		return arg1 + arg3;
	} else if(arg1 == null && arg2 != null && arg3 != null) {
		return arg 2 + arg3;
	}
	// 4 
	else if(arg1 != null && arg2 != null && arg3 != null ) {
		return (arg1 + arg2) / arg3;
	}
	//5
	else if(arg1 == null && arg2 == null && arg3 == null) {
		return false;
	}
	//6
	else {
		return null;
	}


}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
novacondicao(); // false
novacondicao(2); //2
novacondicao(2,3); //5
novacondicao(2, 3, 4); //1.25
```