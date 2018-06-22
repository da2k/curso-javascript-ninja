# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
	 return x + y;
}


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var calculo = soma(10,5)+5;


// Qual o valor atualizado dessa variável?
20


// Declare uma nova variável, sem valor.
var salario

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function novosalario(){
	salario = 800;
	return 'O valor da variavel agora é '+salario;
}

// Invoque a função criada acima.
novosalario()

// Qual o retorno da função? (Use comentários de bloco).
/* 'O valor da variavel agora é 800 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function variados(x,y,z){
	if(x === undefined){
		return 	'Preencha todos os valores corretamente';
	}
	else if(y === undefined){
		return 'Preencha todos os valores corretamente';
	}
	else if(y === undefined){
		return 'Preencha todos os valores corretamente';
	}
	else{
		return x*y*z+2;
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
variados(10,20)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente'//

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
variados(10,10,10)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//1002

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function variados(x,y,z){
	if(x !== undefined && y === undefined && z === undefined){
		return x;
	}
	else if(x !== undefined && y !== undefined && z === undefined){
		return x+y;
	}
	else if(x !== undefined && y !== undefined && z !== undefined){
		return (x+y)/z;
	}
	return false;
	return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

variados() //false
variados(10) //10
variados(10,10) //20
variados(10,10,10) //2
```