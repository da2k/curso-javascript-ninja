# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma (x,y) {
	Return x+y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

x=5;
Y=6;
S= soma(x,y) + 5;


// Qual o valor atualizado dessa variável?

16

// Declare uma nova variável, sem valor.

var nova

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function frase () {
	nova ="VALOR";
	return "O valor da variável agora é "+nova;
	}

// Invoque a função criada acima.

frase()


// Qual o retorno da função? (Use comentários de bloco).

/* O valor do retorno da função é "O valor da variável agora é VALOR" do tipo string.*/


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function retorna (x,y,z) {
	if ((x===undefined || y===undefined || z===undefined) || (x===null || y===null || z===null)) {
		return "Preencha os valores corretamente!";
	} else {
		return x*y*z + +'2';
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
x=2;
y=3;
retorna ()

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
'Preencha os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
//A função neste caso não retornou corretamente.

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

/* Não consegui caracterizar na condição if a inexistência da variável.
<<<<<<< HEAD
Meu raciocínio se baseou no teste das variáveis se elas eram do tipo undefined ou null. */
=======
Meu raciocínio se baseou no teste das variáveis se eram do tipo undefined ou null. */
>>>>>>> 808422c561cf24b2419d2cf4024abf2c567a0c7b

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

/* Entendi a questão mas não consegui estabelecer os parâmetros para testar as condicionais*/

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

 //Como explicado acima, não consegui construir esta função.
```