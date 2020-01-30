# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a,b) { return a + b; }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = 5 + soma(2,3);

// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var temp;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function concatenar(str) { return temp + str; }

// Invoque a função criada acima.
temp = concatenar('valor');

// Qual o retorno da função? (Use comentários de bloco).
/* VALOR */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicar(a,b,c) {
    if ( a == undefined || b == undefined || c == undefined ) { 
        return 'Preencha todos os valores corretamente!'; 
        } else {
            return a * b * c + 2;
        }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicar(2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicar(2,3,1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function challenge02(a,b,c) {
    if (typeof(a) != 'number' && typeof(b) != 'number' && typeof(c) != 'number') {
        // todas indefinidas
            return false;
        } else if (typeof(a) == 'number' && typeof(b) == 'number' && typeof(c) == 'number') {
        // nenhuma indefinida
            return (a + b) / c;
        } else if (typeof(a) == 'number' && typeof(b) != 'number' && typeof(c) != 'number') {
        // 'b' e 'c' indefinidas
            return a;
        } else if (typeof(a) != 'number' && typeof(b) == 'number' && typeof(c) != 'number') {
        // 'a' e 'c' indefinidas
            return b;
        } else if (typeof(a) != 'number' && typeof(b) != 'number' && typeof(c) == 'number') {
        // 'a' e 'b' indefinidas
            return c;
        } else if (typeof(a) != 'number' && typeof(b) == 'number' && typeof(c) == 'number') {
        // 'a' indefinida
            return b + c;
        } else if (typeof(a) == 'number' && typeof(b) != 'number' && typeof(c) == 'number') {
        // 'b' indefinida
            return a + c;
        } else if (typeof(a) == 'number' && typeof(b) == 'number' && typeof(c) != 'number') {
        // 'c' indefinida
            return a + b;
        } else { 
            // esta instrução nunca será executada 
            return null; 
            }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
challenge02(1,2,3) // 1
challenge02(); // false
challenge02(null,2,3) // 5
challenge02(1,'',3) // 4
challenge02(1,2,'Lorem Ipsum'); // 3
challenge02(1,undefined); // 1
challenge02('',2); // 2
challenge02('',false,3); // 3
