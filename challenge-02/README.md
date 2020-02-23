# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma(2, 8) + 5;

// Qual o valor atualizado dessa variável?
resultado;
// 15

// Declare uma nova variável, sem valor.
var qualquer;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function valorQualquer(valor) {
    qualquer = valor;
    return 'O valor da variável agora é ' + qualquer;
}

// Invoque a função criada acima.
valorQualquer(5);

// Qual o retorno da função? (Use comentários de bloco).
// 'O valor da variável qualquer agora é 5'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multiplicacao(valor1, valor2, valor3) {
    var resultado;
    if(valor1 === undefined || valor2 === undefined || valor3 === undefined) {
        resultado = 'Preencha todos os valores corretamente';
    } else {
        resultado = (valor1 * valor2 * valor3) + 2;
    }
    return resultado;
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicacao(7, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//'Preencha todos os valores corretamente'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multipliccacao(7, 5, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//107


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function exercicio(argumento_1, argumento_2, argumento_3) {
    var resultado;
    if(argumento_1 !== undefined && argumento_2 === undefined && argumento_3 === undefined) {
        resultado = argumento_1;
    } else if (argumento_2 !== undefined && argumento_1 === undefined && argumento_3 === undefined) {
        resultado = argumento_2;
    } else if (argumento_3 !== undefined && argumento_2 === undefined && argumento_1 === undefined) {
        resultado = argumento_3;
    } else if (argumento_1 !== undefined && argumento_2 !== undefined && argumento_3 === undefined) {
        resultado = argumento_1 + argumento_2;
    } else if (argumento_2 !== undefined && argumento_3 !== undefined && argumento_1 === undefined) {
        resultado = argumento_2 + argumento_3;
    } else if (argumento_1 !== undefined && argumento_3 !== undefined && argumento_2 === undefined) {
        resultado = argumento_1 + argumento_3;
    } else if (argumento_1 !== undefined && argumento_2 !== undefined && argumento_3 !== undefined) {
        resultado = (argumento_1 + argumento_2) / argumento_3;
    } else if (argumento_1 === undefined && argumento_2 === undefined && argumento_3 === undefined) {
        resultado = false;
    } else {
        resultado = null;
    }
    return resultado;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
exercicio(); //false
exercicio(3); //3
exercicio(3, 5); //8
exercicio(3, 5, 2); //4