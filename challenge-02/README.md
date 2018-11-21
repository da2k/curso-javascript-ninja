# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultadoSoma = soma(2, 3) + 5;

// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var challenge02;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addChallengeValue() {
    challenge02 = 'VALOR'
    return 'O valor da variável agora é VALOR.'
}

// Invoque a função criada acima.
addChallengeValue();

// Qual o retorno da função? (Use comentários de bloco).
/*
 * O retorno da função é a string 'O valor da variável agora é VALOR.'  
 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function challenge02Function(arg1, arg2, arg3) {
    if (arg1 === undefined || arg2 === undefined || arg3 === undefined) {
        return 'Preencha todos os valores corretamente!'
    }
    else {
        return (arg1 * arg2 * arg3) + 2;
    }

}

// Invoque a função criada acima, passando só dois números como argumento.
challenge02Function(2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//O resultado da função é: 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
challenge02Function(2, 3, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//O resultado da função é: 14

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function challenge02Function02(arg1, arg2, arg3) {
    if(arg1 !== undefined && arg2 === undefined && arg3 === undefined) {
        return arg1;
    }
    else if(arg1 !== undefined && arg2 !== undefined && arg3 === undefined) {
        return arg1 + arg2
    }
    else if(arg1 !== undefined && arg2 !== undefined && arg3 !== undefined) {
        return (arg1 + arg2) / arg3
    }
    else if(arg1 === undefined && arg2 === undefined && arg3 === undefined) {
        return false
    }
    else {
        return null
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
challenge02Function02(2); // o resultado será 2
challenge02Function02(2, 3); // o resultado será 5
challenge02Function02(2, 3, 5); // o resultado será 1
challenge02Function02(); // o resultado será false
challenge02Function02(2, undefined, 2); // o resultado será null