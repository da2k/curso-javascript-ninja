# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
?function soma(num1 , num2){
retunr num1+ num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
? var total = soma(1, 2) + 5

// Qual o valor atualizado dessa variável?
? 8

// Declare uma nova variável, sem valor.
?var novaVariavel

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
?function add(num){
  this.nomeVariavel = num;
 return 'O valor da variavel é '+ num
 }

// Invoque a função criada acima.
?add(1)

// Qual o retorno da função? (Use comentários de bloco).
?/*
retorna o valor da variavel
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
?function ver(arg1, arg2, arg3){
... if(arg1 == undefined || arg2 == undefined || arg3 == undefined){
..... return 'preencher todos os campos'
..... }else{
..... return arg1 * arg2 * arg3
... }

// Invoque a função criada acima, passando só dois números como argumento.
?ver(1 ,1)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?// verifica o valor
'preencher todos os campos'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
?
ver(1, 1, 1)
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?// o resultado é
1

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
?function question(a1, a2, a3){
	 if(a1 != undefined && a2 == undefined && a3 == undefined){return a1}
	 else if(a1 != undefined && a2 != undefined && a3 == undefined){return a1 + a2}
	 else if(arg1 != undefined && arg2 != undefined || arg3 != undefined){return (a1 + a2)/a3}
	 else if(arg1 == undefined || arg2 == undefined || arg3 == undefined){return false;}
	 else{ return null}
 }

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?question(1) // resultado 1
question(1, 2) // resultado 3
question(1, 2, 1) // resultado 3
question() //false

``` 

  
