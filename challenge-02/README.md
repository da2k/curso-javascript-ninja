# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b) {
    return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var minhaSoma = soma(2, 3) + 5;

// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var novaVariavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribuiDez() {
    novaVariavel = 10;
    return 'O valor da variável agora é ' + novaVariavel + '.';
}

// Invoque a função criada acima.
atribuiDez();

// Qual o retorno da função? (Use comentários de bloco).
/*
A função retorna a string: 'O valor da variável agora é 10.', com o ponto no final.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function novaFuncao(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
        return 'Preencha os valores corretamente!';
    } else {
        return a * b * c + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
novaFuncao(2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
A função retornará a string: 'Preencha os valores corretamente!'
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
novaFuncao(2, 2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
Retorno da função será o número 10.
2 * 2 * 2 = 8 
8 + 2 = 10
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

function outraFuncao(a, b, c) {
    if (a && !b && !c) {
        return a
    } else if (!a && b && !c) {
        return b;
    } else if (!a && !b && c) {
        return c;
    } else if (a && b && !c) {
        return a + b;
    } else if (a && !b && c) {
        return a + c;
    } else if (!a && b && c) {
        return b + c;
    } else if (a && b && c) {
        return (a + b) / c;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

// Passando um único parâmetro.
outraFuncao(1); // Retorna o número 1.
outraFuncao(2); // Retorna o número 3.
outraFuncao(3); // Retorna o número 3.

// Passando apenas 2 parâmetros.
outraFuncao(1, 2); // Retorna o número 3, resultado da soma dos dois parâmetros.

// Passando três parâmetros, mas com apenas dois parâmetros válidos.
outraFuncao(1, 2, undefined); // Retorna 3, resultado da soma dos parâmetros a e b;
outraFuncao(1, undefined, 3); // Retorna 4, resultado da soma dos parâmetros a e c;
outraFuncao(undefined, 2, 3); // Retorna 5, resultado da soma dos parâmetros b e c;

// Passando três parâmetros válidos.
outraFuncao(1, 2, 3); // Retorna 1, resultado da soma de a e b, dividido por c;

// Não passando parâmetros ou três parâmetros inválidos
outraFuncao(); // Retorna null, como especificado na função;
outraFuncao(undefined, undefined, undefined); // Retorna null;




```