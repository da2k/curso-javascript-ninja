# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar( x, y ){
	return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var myvar = somar(3, 6) + 5;

// Qual o valor atualizado dessa variável?
14

// Declare uma nova variável, sem valor.
var newvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValor( newvar){
	newvar = 'VALOR';
	retunr 'O valor da variável agora é' + newvar;
}

// Invoque a função criada acima.
addValor()

// Qual o retorno da função? (Use comentários de bloco).
/* 
retorna uma string com a mensage: 
'O valor da variável agora é VALOR'
/*

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function resolve( a, b, c ){
	if ( a == null || b == null || c == null ){
		return 'Preencha todos os valores corretamente';
		}else {
			return ( a*b*c ) + 2;
			}
}

// Invoque a função criada acima, passando só dois números como argumento.
resolve(2,6)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preecha todos os valores corretamente'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
resolve(2,5,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 22

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calcula( a, b, c ){
	if ( a === undefined ){
		return false;
	} else if ( a && b && c !==  undefined ){
		return ( a + b ) / c;
	} else if ( a && b !== undefined ){
		return a + b;
	} else if ( a !== undefined ){
		return a;
	} else{
		return null;
	}
}
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
calcula() // retorna false.
calcula(3) // retorna o número 3.
calcula(3,5) // retorna 8 que é a soma de 3 + 5.
calcula(3,5,2) // retorna 4 que é a divisão do soma de 3 + 5.
```
