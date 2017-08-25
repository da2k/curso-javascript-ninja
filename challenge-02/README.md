# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
 function soma (num1, num2) {
 	return num1 + num2;
 	
 }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var retorno = soma(2, 3) + '5';

// Qual o valor atualizado dessa variável?
'55'

// Declare uma nova variável, sem valor.
var var1;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function retorno() {
 var1 = 10;
 return 'O valor da variavel agora é ' + var1;
}

// Invoque a função criada acima.
retorno();

// Qual o retorno da função? (Use comentários de bloco).
// 'O valor da variavel agora é 10'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function teste (a, b, c) {
 if (a === undefined || b === undefined || c === undefined) {
     return 'Preencha todos os valores corretamente!';
 }
 else{
     return a * b * c + '2';
 }
}
	

// Invoque a função criada acima, passando só dois números como argumento.
teste(1,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
teste(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//62

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
//Fiz primeiro dessa maneira mas não ficou legal
function teste (a, b, c) {
 if (a !== undefined && b !== undefined && c !== undefined) {
 	   var retornoSoma = a + b;
     var resultado = retornoSoma / c;
     return 'A soma do primeiro com segundo é: ' + retornoSoma + ' resultado: ' + resultado;
 }
 else if (a !== undefined || b !== undefined || c !== undefined) {
     return a + b + c;
 }
 else {
     return 'null';
 }
}

//Para funcionar legal, tive que fazer da maneira abaixo, funcionou mas tive que fazer muito IF

function teste (a, b, c) {
 var somaParcial = 0;	
 if (a !== undefined) {
 	somaParcial += a;
 }
 if (b !== undefined) {
 	somaParcial += b;
 }
 if (c !== undefined) {
 	somaParcial += c;
 }
 if (a !== undefined && b !== undefined && c !== undefined) {
 	   var retornoSoma = a + b;
     var resultado = retornoSoma / c;
     return 'A soma do primeiro com segundo é: ' + retornoSoma + ' resultado: ' + resultado;
 } else  if (a !== undefined || b !== undefined || c !== undefined) {
     return somaParcial;
 }
  else {
     return 'null';
 } 
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
teste(1,2)
//3
teste(1)
//1
teste(1,2,3)
//'A soma do primeiro com segundo é: 3 resultado: 1'
teste();
//'null'
```