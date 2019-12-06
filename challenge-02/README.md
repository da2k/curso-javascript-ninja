# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a,b) {
    var resultado = a + b;
    return resultado;
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var myvar = soma(5,5) + 5;

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
var nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function infoValor(){
    nova = 15;
    return ('O valor da variável agora é ' + nova);
}

// Invoque a função criada acima.
infoValor();

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 15 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function soma(a, b, c){
    if ( a === undefined || b === undefined || c === undefined) {
        return "Preencha todos os valores corretamente!"
    } else {
        var calculo = (a * b * c) + 2;
        return calculo;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
soma(1,1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*Preencha todos os valores corretamente!*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
soma(1,1,1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 3

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function calculo(x, y, z){ 
    if ( x !== undefined && y === undefined && z === undefined ){
        return "REGRA2 - valor do argumento: " + x;
    } else if (x !== undefined && y !== undefined && z === undefined){
        return "REGRA3 - soma dos argumentos: " + (x+y);
    } else if (x !== undefined && y !== undefined && z !== undefined){
        var resultado = (x + y)/z;
        return "REGRA4 - calculo: " + resultado;
    } else if ((x === undefined && y === undefined && z === undefined)){
        return "REGRA 5 - nenhum argumento: " + false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

calculo(); //REGRA 5 - nenhum argumento: false
calculo(1); //REGRA2 - valor do argumento: 1
calculo(10,10); //REGRA3 - soma dos argumentos: 20
calculo(5,5,2); //REGRA4 - calculo: 5
```