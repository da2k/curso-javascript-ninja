# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(numero1, numero2){
	return numero1 + numero2;
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var Soma = soma(12, 5987) + 5;

// Qual o valor atualizado dessa variável?
6004;

// Declare uma nova variável, sem valor.
var novaVariavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function modificaVariavel(){
	novaVariavel = 457;
	return 'O valor da variável agora é ' + novaVariavel;
}

// Invoque a função criada acima.
modificaVariavel();

// Qual o retorno da função? (Use comentários de bloco).
/*
'O valor da variável agora é 457'
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multiplica3(argumento1, argumento2, argumento3){
	if(argumento1 == undefined || argumento2 == undefined || argumento3 == undefined){
		return 'Preencha todos os valores corretamente!';
	}
	return (argumento1 * argumento2 * argumento3) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
var multiplica3 = multiplica3(10, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplica3(39, 23, 74);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 66380

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos. ✓
2. Se somente um argumento for passado, retorne o valor do argumento. ✓
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos. ✓
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro. ✓
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function funcaoMaluca(argumento1, argumento2, argumento3){
	if(argumento1 !== undefined && argumento2 === undefined && argumento3 === undefined){
		return argumento1;
	}
	else if(argumento1 !== undefined && argumento2 !== undefined && argumento3 === undefined){
		return argumento1 + argumento2;
	}
	else if(argumento1 !== undefined && argumento2 !== undefined && argumento3 !== undefined){
		return (argumento1 + argumento2) / argumento3;
	}
  else if(argumento1 === undefined && argumento2 === undefined && argumento3 === undefined){
    return false;
  }
  else{
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
funcaoMaluca('sim')            //'sim'
funcaoMaluca('sim', 2)         //'sim2'
funcaoMaluca('sim', 57, 3)     //NaN
funcaoMaluca()                 //false
funcaoMaluca('sim', 57, 3)            //NaN (tentando forçar um resultado de retorno null...)
funcaoMaluca('sim', 57, 3, 57, 100)   //NaN (sem sucesso)

```
