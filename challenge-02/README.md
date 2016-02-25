# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
	return x+y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var recebeSoma = soma(1,2) + 5;

// Qual o valor atualizado dessa variável?
//8

// Declare uma nova variável, sem valor.
var nVar = null;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValor(){
	nVar = true;
	return 'O valor da variável agora é '+nVar;
}

// Invoque a função criada acima.
addValor();

// Qual o retorno da função? (Use comentários de bloco).
/*
Retorna "O valor da variável agora é true";
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multTres(x,y,z){
	if((x == null || x == undefined) || (y == null || y == undefined) || (z == null || z == undefined)){
		return 'Preencha todos os valores corretamente!';
	}
	return (x * y * z) + 2;	
}

// Invoque a função criada acima, passando só dois números como argumento.
multTres(1,2);


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// "Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multTres(1,2,3);

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
function recebeTres(x,y,z){
	if((x !== undefined) && (y === undefined) && (z === undefined)){
		return x;
	}
	
	else if((x === undefined) && (y === undefined) && (z === undefined)){
		return false;
	}
	
		
	else if((x !== undefined) && (y !== undefined) && (z === undefined)){
		return x+y;
	}
	
	else if((x !== undefined) && (y !== undefined) && (z !== undefined)){
		return (x+y)/z;
	}
	
	return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
recebeTres(); //false 
recebeTres(1); //1
recebeTres(1,2); //3 
recebeTres(1,2,3); //1
```
