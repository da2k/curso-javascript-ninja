# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b) {
    return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = soma(10, 13) + 5;

// Qual o valor atualizado dessa variável?
// 28

// Declare uma nova variável, sem valor.
var myvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue(value) {
    myvar = value;

    return myvar.toString();
}

// Invoque a função criada acima.
addValue('fernando');

// Qual o retorno da função? (Use comentários de bloco).
/* 
    retorno da função é igual a:
    'fernando'
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multValues(a, b, c) {
    if (a && b && c)  {
        return (a * b * c) + 2;
    } else {
        return 'preencha todos os valores corretamente e execute a função';
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
multValues(2, 4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// O retorno será: preencha os valores corretamente e execute a função

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multValues(2, 4, 6);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* O retorno será: 2 * 4 = 8 * 6 = 48 + 2 =   50 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function testValues(a, b, c) {
    var arg1, arg2, arg3;

    var result = false;

    if(a) {
        if(!isNaN(a)){
            arg1 = true;
            result = a;
        } else {
            return null;
        }
    } 
    if(b) {
        if(!isNaN(a)){
            arg2 = true;
            result += b;
        } else {
            return null;
        }
    }

    if(c) {
        if(!isNaN(c)) {
            arg3 = true;
        } else {
            return null;
        }
    }

    if(arg1 && arg2 && arg3) {
        return (a + b) / c;
    }

    return result;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
testValues(); // false
testValues(2); // 2
testValues(1, 2); // 3
testValues(1, 2, 3); // 1
testValues(1, 2, '3a'); // null