// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

Function soma( x , y) {
Var resul = x + y;
Return resul;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

Soma(10,3) + 5;

// Qual o valor atualizado dessa variável?

17

// Declare uma nova variável, sem valor.

Var z;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function exibeValor(t){
return 'O valor da variavel agora é VALOR: ' + t;
}

// Invoque a função criada acima.

exibeValor(13);

// Qual o retorno da função? (Use comentários de bloco).

'O valor da variavel agora é VALOR: 18'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function tresArgs(x , y, z){
 	if(x == null) {
		return 'Favor preencher o valor de x!';
		}else if (y == null){
			return 'Favor preencher o valor de y!';
		} else if (z == null){
			return 'Favor preencher o valor de z!'
	}
	return (x + y + z)+2
}
// Invoque a função criada acima, passando só dois números como argumento.

tresArgs(10,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

'Favor preencher o valor de z!'


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

tresArgs(10,2,1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

15

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function tresArgs(x,y,z){
 if (x != null && y == null && z == null){
 return x;
 }else if(x != null && y != null && z == null){
 return x + y;
 }else if(x != null && y != null && z != null){
 return (x + y) / z;
 }else if( x == null && y == null && z == null){
 return 'false';
 }else {
 return 'null';
 }
 }

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

 tresArgs(); /*Sem parametros*/
'false'
 tresArgs(10);/*Apenas um parametro*/
10
tresArgs(10,2);/*Dois parametros*/
12
tresArgs(10,2,2);/*Três parametros*/
6
