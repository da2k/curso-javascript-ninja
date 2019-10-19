# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma( x , y ) {
    return x + y;
    };

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var z = soma( 1 , 2 ) + 5;

// Qual o valor atualizado dessa variável?
8

// Declare uma nova variável, sem valor.
var nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function troca(){
    nova = 10;
    return 'O valor da variável agora é ' + nova;
    };

// Invoque a função criada acima.
troca();

// Qual o retorno da função? (Use comentários de bloco).
/*
  A função troca() retorna uma string concatenada com o valor da variável nova.
  A variável nova por sua vez tem o valor 10.
  Sendo assim, quando a função troca() é invocada, retorna 'O valor da variável agora é 10'.
*/  
  
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multiplicacao(arg1 , arg2, arg3){
    if(arg1 !== undefined){
      if(arg2 !== undefined){
        if(arg3 !== undefined){
          return (arg1 * arg2 * arg3) + 2
          }
        }
      }
    return 'Preencha todos os valores corretamente!'
    }

// Invoque a função criada acima, passando só dois números como argumento.
multiplicacao( 1 , 2 );

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
    Ao invocar a função multiplicacao passando apenas dois argumentos (neste caso, dois números),
    o retorno é a string 'Preencha todos os valores corretamente!'
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicacao( 1 , 2 , 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
    Ao invocar a função multiplicacao passando todos os três argumentos (neste caso, três números),
    o retorno é a multiplicação destes números, portanto o valor 8.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function opcoes( opc1 , opc2 , opc3 ){
    if(opc1 !== undefined){
      if(opc2 !== undefined){
        if(opc3 !== undefined){
          return (opc1 + opc2)/opc3
          }
        return opc1 + opc2
       }
      return opc1
      }
    return false
    }

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

opcoes(); // false

opcoes( 1 ); // 1

opcoes( 1 , 2 ); // 3

opcoes( 1 , 2 , 3 ); // 1

```
