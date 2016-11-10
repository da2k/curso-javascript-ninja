# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
	return x + y;
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var recebe = soma(1,2) + 5;

// Qual o valor atualizado dessa variável?
8

// Declare uma nova variável, sem valor.
var semvalor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function final(){
	semvalor = 4
	return('O valor da variável agora é ' + semvalor);
}

// Invoque a função criada acima.
final();

// Qual o retorno da função? (Use comentários de bloco).
/*
	'O valor da variável agora é 4'
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    	
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function funcao3(x,y,z){
	if(x === undefined || y === undefined || z === undefined){
		return('Preencha todos os valores corretamente!');
	}else{
		return (x * y * z) + 2;
	}
};

// Invoque a função criada acima, passando só dois números como argumento.
funcao3(1,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
funcao3(20,40,100);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
80002

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function funcao4(x, y, z){
 if(x && y && z){
  return(x + y) / z;
  } else if(x && y){
    return x + y;
  } else if(x){
    return x;
  } else if(!x){
    return false;
  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
funcao4(2,3,4);  // 1.25
funcao4(2,3);    // 5
funcao4(2);      // 2
funcao4();       // false

\