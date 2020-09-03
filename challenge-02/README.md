# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(x, y) {
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = somar(10, 5) + 5;

// Qual o valor atualizado dessa variável?
20

// Declare uma nova variável, sem valor.
var nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribuir() {
    nova = 10;

    return 'O valor da variável é ' + nova;
}

// Invoque a função criada acima.
atribuir();

// Qual o retorno da função? (Use comentários de bloco).
O valor da variável é 10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calc(x, y, z) {
    if (x === undefined || y === undefined || z === undefined) {
        return 'Preencha todos os valores';
    }
    else {
        return x * y * z + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
calc(2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
Preencha todos os valores

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
calc(2, 3, 4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 26

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function gerar(x, y, z) {
    if (x !== undefined && y === undefined) {
        return x;
    }
    else if (y !== undefined && z === undefined) {
        return x + y;
    }
    else if (z !== undefined) {
        return (x + y) / z;
    }
    else if (x === undefined && y === undefined && z === undefined){
        return false;
    }
    else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
gerar(null)     // null
gerar()         // false
gerar(1)        // 1
gerar(1, 2)     // 3
gerar(1, 2, 3)  // 1
```