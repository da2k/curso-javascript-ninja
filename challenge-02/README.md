# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a,b){
	return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var total = soma(10,2) + 5;

// Qual o valor atualizado dessa variável?
17

// Declare uma nova variável, sem valor.
var recebe;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribui(){
	total = 'VALOR';
	return  'O valor da variável agora é VALOR.';
}

// Invoque a função criada acima.
atribui();

// Qual o retorno da função? (Use comentários de bloco).
/*
O valor da variável agora é VALOR.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplica (a,b,c){
	if (a == null || b == null || c == null){
		return 'Preencha todos os valores corretamente!';
	}else{
	return (a * b * c) + 2;
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplica(10,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplica(2,9,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 92

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calcula(primeiro, segundo, terceiro){
	if(primeiro !== undefined && segundo == undefined && terceiro == undefined){
		return primeiro;
	}else if(segundo !== undefined && terceiro == undefined){
		return primeiro + segundo;
	}else if(terceiro !== undefined){
		return (primeiro + segundo) / terceiro;
	}else if(primeiro == undefined && segundo == undefined && terceiro == undefined){
		return false;
	}else{
	return null;
	}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
calcula(); //false
calcula(10); //10
calcula(10,10); //20
calcula(10,10,3); //6.666666666666667
```
