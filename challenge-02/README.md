# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
let sum = (arg1, arg2) => arg1 + arg2;

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let result = sum(2, 7) + 5;

// Qual o valor atualizado dessa variável?
14

// Declare uma nova variável, sem valor.
let var1;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
const handleVar1 = () => var1 = `O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.`;

// Invoque a função criada acima.
handleVar1();

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é VALOR.\nOnde VALOR é o novo valor da variável. */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
const myFunc = (arg1, arg2, arg3) => {
    if (arg1 != null && arg2 != null && arg3 != null) {
        return arg1 * arg2 * arg3 + 2;
    }

    return 'Preencha todos os valores corretamente!';
}

// Invoque a função criada acima, passando só dois números como argumento.
myFunc(2, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
myFunc(2, 5, 7);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 72

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
const myFunc2 = (arg1, arg2, arg3) => {
    if (arg1 != null && arg2 == null && arg3 == null) {
        return arg1;
    } else if (arg1 != null && arg2 != null && arg3 == null) {
        return arg1 + arg2;
    } else if (arg1 != null && arg2 != null && arg3 != null) {
        return arg1 + arg2 / arg3;
    } else if (arg1 == null && arg2 == null && arg3 == null) {
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
myFunc2(2); // 2
myFunc2(2, 5); // 7
myFunc2(2, 5, 2); // 4.5
myFunc2(); // false
myFunc2(null, 5, 2); // null
```