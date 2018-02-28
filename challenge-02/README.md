# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum(a, b) {
    return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = sum(a, b) + 5;

// Qual o valor atualizado dessa variável?
//O valor é igual a soma dos parâmetros [a + b] mais 5 (Caso a = 2 e b = 3, o valor de result é igual a 10)

// Declare uma nova variável, sem valor.
var newVariable;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function showVarValue() {
    newVariable = 15;
    return "O valor da variável agora é " + newVariable;
}

// Invoque a função criada acima.
showVarValue();

// Qual o retorno da função? (Use comentários de bloco).
//A função retornará "O valor da variável agora é 15".


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplyThreeNumbers(a, b, c) {
    if (a !== undefined && b !== undefined && c !== undefined) {
        return (a * b * c) + 2;
    } else {
        return "Preencha todos os valores corretamente!" + a + " " + b + " " + c;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplyThreeNumbers(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// O resultado será a mensagem "Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplyThreeNumbers(1, 2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//O resultado será 1 * 2 * 3 [6] + 2 (ou seja: 8)

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function newFunction(a, b, c) {
    var args = Array.from(arguments);
    if (a !== undefined && b !== undefined && c !== undefined) {
        return (a + b) / c;
    } else if (a !== undefined && b !== undefined) {
        return (a + b);
    } else if (a !== undefined) {
        return a;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
newFunction(1, 2, 3); //RESULTADO: [1+2]/3 -> 1
newFunction(1, 2); //RESULTADO: [1+2] -> 3
newFunction(1); //RESULTADO: ->1
newFunction(); //RESULTADO: null
```
