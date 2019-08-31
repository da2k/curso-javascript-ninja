# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(arg1,arg2) {
return arg1 + arg2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var x = soma(1,9) + 5

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
var numero;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function defineValor(x) {
x = 8;
return "O valor da variável agora é " + x;
}

// Invoque a função criada acima.
defineValor(numero)

// Qual o retorno da função? (Use comentários de bloco).
/* numero = 8
O valor da variável agora é 8 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function XXX(a,b,c) {
if (a == undefined && b == undefined && c == undefined) {
return "Preencha todos os valores corretamente!"
} else {
return (a*b*c) +2 }}
// Invoque a função criada acima, passando só dois números como argumento.
?
XXX(a,b)
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?
NaN
// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
?
XXX(2,10,8)
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?
162
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function XX (a,b,c) {
  if (a == undefined && b == undefined && c== undefined){
    return false
  }
  else if ( a != undefined && b == undefined && c == undefined){
    return a
  }
  else if ( a != undefined && b != undefined && c == undefined){
    return a+b}
  else if ( a != undefined && b!=undefined && c != undefined){
    return (a+b)/c}
  else {
    return 'null'}
  }
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
XX() // false
XX(10) // 10
XX(10,2) // 12
XX(10,2,3) // 4
```
