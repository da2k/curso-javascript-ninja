# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(val1, val2){
	return val1 + val2
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var soma = sum(1,2) + 5

// Qual o valor atualizado dessa variável?
console.log(soma)


// Declare uma nova variável, sem valor.
var newValue

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function getValue(value){
	newValue = value
	return "O valor da variável agora é" + value +"."
}

// Invoque a função criada acima.
getValue(2)

// Qual o retorno da função? (Use comentários de bloco).
//o retorno da função é uma string

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiply(val1, val2, val3){
	if( !val1 || !val2 || !val3 )
		return 'Preencha todos os valores corretamente!'
	return val1 * val2 * val3
}

// Invoque a função criada acima, passando só dois números como argumento.
multiply(1,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//retora o erro "Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiply(1,2,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//o retorno é 6

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function teste(val1, val2, val3){
	if( arguments.length === 0 )
		return false
	if( arguments.length === 1 )
		return val1
	if( arguments.length === 2 )
		return val1 + val2
	if(arguments.length === 3)
		return ( val1 * val2 ) / val3
	return null
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
teste(1)
teste(1,2)
teste(1,2,3)
teste()
teste(1,2,3,4)
```