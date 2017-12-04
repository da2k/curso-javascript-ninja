# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
	return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
soma(10,5) + 5;

// Qual o valor atualizado dessa variável?
20

// Declare uma nova variável, sem valor.
var rios;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function fun01(x){
	rios = 'O valor da variável agora é: ' + x;
	return rios;
}

// Invoque a função criada acima.
fun01(4);

// Qual o retorno da função? (Use comentários de bloco).
// 'O valor da variável agora é: 4'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multipla(x,y,z){
	var mult;
	if(x != null && y != null && z != null){
		mult = (x * y * z) + 2;
		return mult;
	} else {
		var frase = 'Preencha todos os valores corretamente!';
		return frase;
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
multipla(4,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multipla(4,2,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 18

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function area(x,y,z){
	console.log('chamou', x, y, z);
	if(x != null && y != null && z != null){
		return (x + y) / z;
	}else if(x != null && y != null){
		return x + y;
	}else if(x != null && z != null){
		return x + z;
	}else if(y != null && z != null){
		return y + z;
	}else if(x != null ){
		return x;
	}else if(y != null){
		return y;
	}else if(z != null){
		return z;
	}else {
		return false;
	}
	return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
area(); // false
area(10); // 10
area(10, 20); // 20
area(10, 20, 2); // 15