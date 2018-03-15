# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
const sum = ( x, y ) => x + y;

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const mySum = sum( 10, 2 ) + 5;

console.log( mySum );

// Qual o valor atualizado dessa variável?
17

// Declare uma nova variável, sem valor.
let noValue;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
const addValue = ( arg ) => ( noValue = arg ) && `O valor da variável agora é ${ noValue }`;

// Invoque a função criada acima.
console.log( addValue( 23 ) );

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 23 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
const checkArgs = ( x, y, z ) => ( z ) ? ( x * y * z ) + 2 : 'Preencha todos os valores corretamente!'

// Invoque a função criada acima, passando só dois números como argumento.
console.log( checkArgs( 1, 2 ))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log( checkArgs( 1, 2, 3 ));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function checkArgs( x, y, z ) {
    return arguments.length > 3
    ? null
        : z
        ? ( x + y ) / z
        : y
            ? ( x + y )
            : x
        ? ( x )
        : false
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(
    checkArgs(  ), // false
    checkArgs( 1 ), // 1
    checkArgs( 1, 2 ), // 3
    checkArgs( 1, 2, 3 ), // 1
    checkArgs( 1, 2, 3, 4 ) // null
);
```