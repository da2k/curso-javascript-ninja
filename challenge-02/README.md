# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function getSum(num, num2) {
    return num + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var sum = getSum(2, 2) + 5;

// Qual o valor atualizado dessa variável?
console.log(' O valor de soma é ', sum);

// Declare uma nova variável, sem valor.
var anything;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function getNewValue() {
    anything = 8;
    return 'O valor da variável agora é ' + anything;
}

// Invoque a função criada acima.
console.log(getNewValue());

// Qual o retorno da função? (Use comentários de bloco).
/* O retorno foi: O valor da variável agora é 8 */


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function sumThreeValues(num, num2, num3) {

    if (num === undefined && num2 === undefined && num3 === undefined) {
        return 'Preencha todos os valores corretamente!';
    }

    return (num * num2 * num3) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
sumThreeValues(2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
sumThreeValues(1,2,3);

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
function bossChallenge(arg, arg2, arg3) {
    var counter = 0;
    var countArg = [arg, arg2, arg3];
    var validArg = [];

    for (var i = 0; i < countArg.length; i++) {
        if (!!countArg[i]) {
            counter++;
            validArg.push(countArg[i]);
        }
    }

    switch (counter) {
        case 0:
            return false;
            break;
        case 1:
            return validArg[0];
            break;
        case 2:
            return validArg[0] + validArg[1];
            break;
        case 3:
            return (validArg[0] + validArg[1]) / validArg[2];
            break;
        default:
            return null;

    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
bossChallenge();
// false

bossChallenge(1);
// 1

bossChallenge(1, 2);
// 3

bossChallenge(1, 2, 3);
// 1


```