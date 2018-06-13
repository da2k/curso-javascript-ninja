# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
    return x + y;
}
?

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var soma = soma(2,3);

// Qual o valor atualizado dessa variável?
5

// Declare uma nova variável, sem valor.
var myvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue() {
    myvar = 5;
    var msg = "o valor da variável é "+ myvar;
    return msg;
}

// Invoque a função criada acima.
addValue();

// Qual o retorno da função? (Use comentários de bloco).
'o valor da variável é 5'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function detectNullVar(x, y, z) {
    var msgError = "Preencha todos os valores corretamente!";
    var calc = x * y * z * 2;

    if (x == null && y == null) {
        return msgError;
    } else if (z == null) {
        return msgError;
    } else {
        return calc;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
detectNullVar(1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
detectNullVar(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 12

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function detectNumbers(x, y, z) {

    var args = arguments.length;

    if (args === 1) {
        return arguments[0];
    } else if (args === 2) {
        return arguments[0] + arguments[1];
    } else if (args === 3) {
        soma = arguments[0] + arguments[1];
		return soma / arguments[2];
    } else if (args === 0) {
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
detectNumbers() // false    
detectNumbers(5); // 5
detectNumbers(5, 9) // 14
detectNumbers(6, 4, 10) // 1