# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b) {
    return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somaFinal = soma(10, 20) + 5;

// Qual o valor atualizado dessa variável?
35

// Declare uma nova variável, sem valor.
var valor();

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function retornaStr(valor) {
    valor = 5;
    return 'O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável';
}

// Invoque a função criada acima.
retornaStr(valor);

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicacao(a, b, c) {
    if (a !== '' && b !== '' && c !== '') {
        return (a * b * c) + 2;
    } elseif () {
        return 'Preencha todos os valores corretamente!';
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicacao(5, 10);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicacao(2, 3, 4);

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
function verifica(a, b, c) {
    if (a !== '' && b === '' && c === '') {
        return a;
    } elseif (a !== '' && b !== '' && c === '') {
        return a + b;
    } elseif (a !== '' && b !== '' && c !== '') {
        return (a + b) / c;
    } elseif (a === '' && b === '' && c === '') {
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
verifica(); // false
verifica(2); // 2
verifica(2, 4); // 6
verifica(2, 4, 6); // 1