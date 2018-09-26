# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(a,b) {
	return a + b;
}
somar(3,2);
//5

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var add = somar(3,2) + 5;

// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var num;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function retornarValor(num) {
	num = 5;
	return 'O valor da variavel agora é: ' + num;
}

// Invoque a função criada acima.
retornarValor()

// Qual o retorno da função? (Use comentários de bloco).
/*
Como retorno da função obtivemos a saida: 'O valor 
da variável agora é : 5 
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
var a = 1;
var b = 2;
var c = 3;
function hard(a,b,c) {
	if(a === 1 && b === 2 && c === 3) {
		return (a * b * c) + 2;
	}else {
		return 'Preencha todos os valores corretamente!';
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
hard(a,b);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//O retorno foi a string 'Preencha todos os valos corretamente'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
hard(a,b,c);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
var a = 1;
var b = 2;
var c = 3;
function hard(a,b,c) {
	if(a === 1){
		return a;
	}else if(a === 1 && b === 2) {
		return a + b;
	}else if(a === 1 && b === 2 && c === 3){
		return (a+b)/c;
	}else {
		return false;
	}
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
```