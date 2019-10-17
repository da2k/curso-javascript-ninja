# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b){
  return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var total = soma(1 , 3) + '5';

// Qual o valor atualizado dessa variável?
9

// Declare uma nova variável, sem valor.
var teste;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function setValor(a){
  a = 'O valor da variável agora eh ' + a;
  return a;
}  

// Invoque a função criada acima.
setValor(1501);

// Qual o retorno da função? (Use comentários de bloco).
//* "O valor da variável agora eh 1501"

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicar(a , b , c){
   if(a == 0) || (b == 0) || (c == 0) {
     return 'Preencha todos os valores corretamente!';
   }
   return (a * b * c) + 2;   

// Invoque a função criada acima, passando só dois números como argumento.
multiplicar(1 , 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicar(1 , 2 , 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function oper(a , b , c){
  var test[0 , 0 , 0];
  
  if(a > 0) {
    test[0] = 1;
  }
  if(b > 0){
    test[1] = 1;
  }
  if(c > 0){
    test[2] = 1;
    
  switch(test){
        case 001 : return c;
        case 010 : return b;
        case 011 : return b + c;
        case 100 : return a;
        case 101 : return a + c;
        case 111 : return (a + b) / c;
        case 000 : return false;
        default  : return null;
  } 
  
}  

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
oper (0, 2, 3);   //* resultado: 5
oper (1, 0, 3);   //* resultado: 4
oper (1, 2, 0);   //* resultado: 3
oper (0, 0, 3);   //* resultado: 3
oper (0, 2, 0);   //* resultado: 2
oper (1, 0, 0);   //* resultado: 1
oper (0, 0, 0);   //* resultado: false
oper ('a,'b','c');//* resultado: null
```
