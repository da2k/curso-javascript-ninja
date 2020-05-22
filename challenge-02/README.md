# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b){
	return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var y = soma(1, 1) + 5

// Qual o valor atualizado dessa variável?
7

// Declare uma nova variável, sem valor.
var copo;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
var copo
function loucas(){
 copo = 'vidro';
 return 'O valor da variavel prato agora é' +copo;
}

// Invoque a função criada acima.
loucas();

// Qual o retorno da função? (Use comentários de bloco).
/*
 	A função retorna a 
	variavel prato com o valor 
	= 'vidro'
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function notas(a, b, c){
	 if(a != undefined, b != undefined, c != undefined){
 		return ((a * b) * c) + 2;
 	}
 		return 'preencha os valores corretamente';	
}

// Invoque a função criada acima, passando só dois números como argumento.
notas(3, 3);
/* 		Ao fazer a função acima retorna a mensagem:
		'preencha os valores corretamente'
*/

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* A invocação acima deu false para a primeira condição e "if"
	true para a segunda condição "else" onde retorna a mensagem
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
notas(2, 2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* O resultado da função acima é 10 
	((2 * 2) * 2) + 2 = 10
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
function dados(x, y, z){
if(x !== undefined && y === undefined && z === undefined){
 return x;
 	}else if(x !== undefined && y !== undefined && z === undefined){
 		return x + y;
 	}else if(x !== undefined && y !== undefined && z !== undefined){
 		return (x + y)/ z;
 	}else if(x === undefined, y === undefined, z === undefined){
 		return 'false';
 	}else{
 		return null;
 	}
 }

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
dados(10); // chama a função com um argumento, retornando o resultado de x = 10.
dados(10, 2) // chama a função com dois argumentos, retornando oresultado de x + y = 12.
dados(10, 2, 2) // chama a função com tres argumentos, retornando o resultado de x + y dividido por z = 6.
dados(); //chama a função sem nenhum argumento retornando false.
// se nenhum das possibilidades for atendida, retorna null.
