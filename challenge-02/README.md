# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
fuction soma( y, z) {
    return(y + z);
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var receba = soma(3,5) + 5;

// Qual o valor atualizado dessa variável?
13

// Declare uma nova variável, sem valor.
var noValue;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function valor() {
    noValue = 50;
    return "O valor da variável agora é " + noValue;
}

// Invoque a função criada acima.
valor();

// Qual o retorno da função? (Use comentários de bloco).
"O valor da variável agora é 50" 

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function preenchimento( z, y, h) {
    if(z === undefined || y === undefined || h === undefined) {
        return "preencha os campos faltando";
    }else return z * y * h + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
preenchimento(4,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
'preencha os campos faltando'
// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
preenchimento(10,10,10);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
1002

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function myFunction(a, b, c) {
    if(a !== undefined && b === undefined && c === undefined) {
          return a;
        }else if(a !== undefined && b !== undefined && c === undefined){
          return a + b;
        }else if(a !== undefined && b !== undefined && c !== undefined){
          return (a + b) / c;
        }else if(a === undefined && b === undefined && c === undefined){
          return false;
        }else null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
myFunction(); //false
myFunction(10); // 10
myFunction(10,2); // 12
myFunction(10,2,5); // 2.5