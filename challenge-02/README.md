# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma ( num1, num2 ) {
    return num1 + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = soma( 10, 10 ) + 5;

// Qual o valor atualizado dessa variável?
result; // 25

// Declare uma nova variável, sem valor.
var media;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function setValue ( media ) {
    return "O valor da variável agora é" + media;
}

// Invoque a função criada acima.
setValue(33);

// Qual o retorno da função? (Use comentários de bloco).
/*
O valor da variável agora é 33
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiply( a, b, c ) {
    if ( a === undefined || b === undefined || c === undefined) {
        return "Preencha todos os valores corretamente!";
    }
    return ( a * b * c ) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
multiply( a, b );

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiply( 30, 30, 10 );

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 9002

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calc( a, b, c ) {
   let values = [ a, b ,c ];
   var counter = 0;
    for (let value of values) {
        if( !isNaN( value ) ) {
            ++counter;
        }
    }
    if ( counter === 0 ) {
        return false;
    }
    if ( counter === 1 ) {
        return a;
    }
    if ( counter === 2 ) {
        return a + b;
    }
    if ( counter === 3 ) {
        return (a + b) / c;
    }
    return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
calc(); // null
calc( 10 ); // 10
calc( 10, 20 ); // 30
calc( 10, 20, 5 ); // 6
```
