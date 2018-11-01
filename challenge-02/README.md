# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
    return x + y;
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somaSoma = soma(10, 2) + 5;

// Qual o valor atualizado dessa variável?
17;

// Declare uma nova variável, sem valor.
var num;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function retornaValor(num) {
    return console.log('O valor da vaviavel agora é ' + num);
};

// Invoque a função criada acima.
retornaValor(7);

// Qual o retorno da função? (Use comentários de bloco).
/* O valor retornado é 7, dado como parâmetro em nossa função */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicacaoTres(x, y, z) {
    if ((x === undefinied) || (y === undefinied) || (z === undefinied)) {
        return 'Preencha todos os valores corretamente!';
    } else {
        return x * y * z;
    };
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicacaoTres(3, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* Retorna 'Preencha todos os valores corretamente!' */ 

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicacaoTres(3, 2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado). 
18;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calcFunc( x, y, z ) {
    if (x !== undefined && y === undefined && z === undefined) {
        return x;
    } else if (x !== undefined && y !== undefined && z === undefined) {
        return x + y;
    } else if (x !== undefined && y !== undefined && z !== undefined) {
        return ( x + y ) / z;
    } else if (x === undefined && y === undefined && z === undefined) {
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

calcFunc(1); // retorna x = 1

calcFunc(1, 2); // retorna x + y = 3

calcFunc(2, 2, 2); // retorna (x + y) / z = 2

calcFunc(); // retorna false

calcFunc(null); // retorna null
