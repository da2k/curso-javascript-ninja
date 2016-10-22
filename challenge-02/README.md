# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(x,y) {
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var totalSum = sum(10, 5) + 5;

// Qual o valor atualizado dessa variável?
//O valor do totalSum é 20;

// Declare uma nova variável, sem valor.
var anyValue;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function createValue(value) {
    anyvalue = value;
    return anyValue = 'O valor da variável agora é' + value;
}

// Invoque a função criada acima.
createValue('JS Rules');

// Qual o retorno da função? (Use comentários de bloco).
/* A função retorna o novo valor passado a variável anyValue, 
   ou seja passa 'O valor da variável é VALOR' */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplyThreeValues(x,y,z) {
    if (x && y  && z) {
        return (x * y * z) + 2;
    }
    return 'Preencha todos os valores corretamente!' 
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplyThreeValues(2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Deve ser a string 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplyThreeValues(2,3,4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//26

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function threeArguments(x, y, z) {
    if(x && (!y)  && (!z) ) {
        return x;
    } else if (x && y  && (!z) ) {
        return x + y;
    } else if(x && y  && z ) {
        return (x +y) / z;
    } else if (!(x && y && z)) {
        return false;
    } else {
        return null
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
threeArguments();
threeArguments(1);
threeArguments(2,3);
threeArguments(4,5,6);