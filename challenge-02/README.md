# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:


// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
 function sum(num1, num2){
	return num1 + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var total = sum(2, 3) + 5;

// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var offValue = null;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
 function attrValue(value){
	var offValue = value;
	return "O valor da variavel offValue é: "+offValue;
}

// Invoque a função criada acima.
attrValue(10);

// Qual o retorno da função? (Use comentários de bloco).
'O valor da variavel offValue é: 10'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
 function treeArg(arg1, arg2, arg3){
	 if(arg1 == null || arg2 == null || arg3 == null){
	 	return "Preencha todos os valores corretamente!";
	 }else {
	 	return (arg1 * arg2 * arg3) + 2;
	 }
}

// Invoque a função criada acima, passando só dois números como argumento.
treeArg(2, 2, );

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*'Preencha todos os valores corretamente!'*/


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
treeArg(2, 2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
?

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
```