///# Desafio da semana #2

//Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

//```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(a, b) { return a + b; };
console.log('A soma de 2 e 4 é ' + soma(2, 4));

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somacinco = soma(7, 2) + 5;

// Qual o valor atualizado dessa variável?
console.log(somacinco);

// Declare uma nova variável, sem valor.
var alfa;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function darvalor(VALOR) {
    alfa = VALOR;
    return "O valor da variável agora é " + alfa;
}

// Invoque a função criada acima.

console.log(darvalor(5));
// Qual o retorno da função? (Use comentários de bloco).


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multmais2(x, y, z) {
    if (x === undefined || y === undefined || z === undefined) {
        return "Preencha todos os valores corretamente!";
    } else {
        return x * y * z + 2;
    }
}
// Invoque a função criada acima, passando só dois números como argumento.


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// resultado da invocação: Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

console.log('O valor de multmais2(1,2,3) é ' + multmais2(1, 2, 3));
console.log('O valor de multmais2(1,2,0) é ' + multmais2(1, 2, 0));
console.log('O valor de multmais2(1,2) é ' + multmais2(1, 2));
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function poss(a, b, c) {
    if (a === undefined && b === undefined && c === undefined)
        return false;
    else if (a !== undefined && b === undefined && c === undefined)
        return a;
    else if (a !== undefined && b !== undefined && c === undefined)
        return a + b;
    else if (a !== undefined && b !== undefined && c !== undefined)
        return (a + b) / c;
    else
        return null;
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

console.log('O valor de poss(3) é ' + poss(3));
// ->
console.log('O valor de poss(1, 9) é ' + poss(1, 9));
// ->
console.log('O valor de poss() é ' + poss());
//->
console.log('O valor de poss(null) é ' + poss(null));
//->
console.log('O valor de poss(1,2,3) é ' + poss(1, 2, 3));
//->