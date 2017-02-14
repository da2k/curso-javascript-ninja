//# Desafio da semana #2

//Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

//```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
	return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somaTotal = soma(2,2) + 5;

// Qual o valor atualizado dessa variável?
9

// Declare uma nova variável, sem valor.
var newVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addToNewVar(x){
	newVar = 0;
	return 'O valor da variável agora é ' + (newVar + x);
}

// Invoque a função criada acima.
addToNewVar(5)

// Qual o retorno da função? (Use comentários de bloco).
/*
** 	O valor da variável agora é 5
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calculate(x,y,z){
	if(x && y && z){
		return (x * y * z) + 2;

	}else{
		if(x === 0 || y === 0 || z === 0){
			return (x * y * z) + 2;
		}else{
			return 'Preencha todos os valores corretamente!';
		}
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
calculate(2,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// "Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
calculate(2,2,2)

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
function foo(x, y, z){
	if(x && y && z){
		return (x + y)/z;

	}else if(x && y){
		return x + y;

		if(x && z){
			return x + z;
		}else{
			return x + y;
		}

	}else if(x){
		return x;

		if(y){
			return y;
		}else{
			return z;
		}
	}else{
		return false;
	}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
//newThreeArgs() //Retorna null
		//newThreeArgs(1,null,null) // Retorna 1
		//newThreeArgs(null,2,null) // Retorna 2
		//newThreeArgs(null,null,3) // Retorna 3
		//newThreeArgs(2,3) // Retorna 5
		//newThreeArgs(2,undefined,4) // Retorna 6
		//newThreeArgs(undefined,3,4) // Retorna 7
		//newThreeArgs()
		//newThreeArgs()
		// newThreeArgs(2,3,4) // Retorna 1.25
		//newThreeArgs()
		//newThreeArgs()
		//newThreeArgs()
		//newThreeArgs()