# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
 function soma(x,y) {
... return x+y;
... }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = (soma(x,y)) + '5'

// Qual o valor atualizado dessa variável?
'125'

// Declare uma nova variável, sem valor.
var newVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function newSoma(newVar) {
... newVar +=2;
... return "O valor da variavel agora é: "+newVar;
... }

// Invoque a função criada acima.
newSoma(newVar);

// Qual o retorno da função? (Use comentários de bloco).
/* Retorna o o valor: 'O valor da variavel agora é: 4',
quando foi passado o valor de 2 na variavel newVar.*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplica3(a,b,c) {
... if(isNaN(a) || isNaN(b) || isNaN(c)) {
..... return "Preencha todos os valores corretamente" } else {
..... return (a * b * c) + '2';}
... }

// Invoque a função criada acima, passando só dois números como argumento.
multiplica3(a,b);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//'Preencha todos os valores corretamente'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplica3(a,b,c);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* 62
O resultado acima foi obtido quando a= 1, b = 2 e c = 3*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function desafio2 (x,y,z){

	if((isNaN(x)==false) && ((isNaN(y)==true) && (isNaN(z)==true))){
		return x;
	}else if((isNaN(y)==false) && ((isNaN(x)==true) && (isNaN(z)==true))){
		return y;
	}else if((isNaN(z)==false) && ((isNaN(x)==true) && (isNaN(y)==true))){
		return z;

	}else if ((isNaN(z)==true) && ((isNaN(x)==false) && (isNaN(y)==false))){
		return x+y;
	}else if ((isNaN(y)==true) && ((isNaN(x)==false) && (isNaN(z)==false))){
		return x+z;
	}else if ((isNaN(x)==true) && ((isNaN(y)==false) && (isNaN(z)==false))){
		return y+z;

	}else if ((isNaN(x)==false) && (isNaN(y)==false) && (isNaN(z)==false)){
		return (x+y)/z;

	}else if ((isNaN(x)==true) && (isNaN(y)==true) && (isNaN(z)==true)){
		return false;

	}else{
		return null;
	}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
> desafio2() //false
> desafio2(1) //1
> desafio2(1,2) //3
> desafio2(1,2,3) //1
