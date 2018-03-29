// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a,b){
	return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var myvar = soma(2,2) + 5;

// Qual o valor atualizado dessa variável?
myvar = 9;

// Declare uma nova variável, sem valor.
var f;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
var f;
function ff(){
f = 10;
return 'o valor de f é ' + f;
}
// Invoque a função criada acima.
ff();

// Qual o retorno da função? (Use comentários de bloco).

/* o valor de f é 10 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
// resolucao para variaveis A B e C externos ao parametro.
function ABC(){ //se voce colocar as varaveis a, b e c dentro do parametro '()', a funcao vai depender dde valores declarados dentro de (), por exemplo ABC(1,2,3), e nao irá considerar valores externos das variaveis.
	if ((a,b,c) === undefined){ //porem se voce nao colocar paremetros dentro de (), a funca ABC() irá buscar valores externos para as variaveis a b e c.
		return 'PREENCHA OS VALORES CORRETAMENTE!'
	}
	else{
		return 'o resultado é ' + ((a*b*c) + 2);
	}
}
// resolucao para A B e C internos ao parametro.
function ABC(a, b, c){
	if ((a,b,c) === undefined){ 
		return 'PREENCHA OS VALORES CORRETAMENTE!'
	}
	else{
		return 'o resultado é ' + ((a*b*c) + 2);
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
ABC(1,1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//'PREENCHA OS VALORES CORRETAMENTE!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
ABC(0,0,0)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'o resultado é 2'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function t(a, b, c){
	if ((a != undefined ) && (b == undefined) && (c == undefined)){
		return a;
	}
	else if((a != undefined) && (b != undefined) && (c == undefined)){
		return a + b;
	}
	else if((a == 0) && (b == 0) && ( c == 0)){
		return false;
	}
	else if((a  != undefined) && (b != undefined) && (c != undefined)){
		return (a + b)/c;
	}
	else{
		return null;
	}
	}
	
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
t(1) // 1
t(1,3) // 4
t(5,10,2) // 7.5
t(0,0,0) // false
t() // null
