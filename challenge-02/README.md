# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
	return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = soma(1, 2)  + 5;

// Qual o valor atualizado dessa variável?
result == 8;

// Declare uma nova variável, sem valor.
var second;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue(){
	second = 5;

	return 'O valor da variável agora é ' + second + '.';
}

// Invoque a função criada acima.
addValue();

// Qual o retorno da função? (Use comentários de bloco).
/*
'O valor da variável agora é 5.'
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplyValues(x, y, z){
	if(x && y && z){
		return x * y * z + 2;
	}
	return 'Preencha todos os valores corretamente!';
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplyValues(2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
'Preencha todos os valores corretamente!'
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplyValues(1, 2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
8
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
function newValues(x, y, z){
	// Caso não tenha nenhum parâmetro
	if(!(x | y | z)) return false;

	var count = 0;

	// Contagem de argumentos passados
	if(x) count++;
	if(y) count++;
	if(z) count++;

	switch(count){

		// Se houver 1 ou 2 argumentos, somar eles
		case 1:
		case 2:
			return (x ? x : 0) + (y ? y : 0) + (z ? z : 0);
			break;

		/*
		Se houver todos os argumentos, somar o primeiro com o segundo e
		dividir a soma entre eles pelo terceiro argumento
		*/
		default:
			return (x + y) / z;
	}

}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
newValues(); // false
newValues(2); // 2
newValues(2, 2); // 4
newValues(2, 2, 2); // 2
```