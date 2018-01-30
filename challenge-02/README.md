# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b){
    return a+b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = 5 + soma(3,2);

// Qual o valor atualizado dessa variável?
resultado; // 5

// Declare uma nova variável, sem valor.
var semValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function novoValor(semValor){
    let resultado = "\tO valor da variável agora é "+semValor+".\n";
    resultado += "Onde "+semValor+" é o novo valor da variável.";
    return resultado;
}

// Invoque a função criada acima.
novoValor('teste');

// Qual o retorno da função? (Use comentários de bloco).
/* 

        O valor da variável agora é teste.
Onde teste é o novo valor da variável.

*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplica(a,b,c){
    if ((typeof a == 'undefined') || (typeof b == 'undefined') || (typeof c == 'undefined')){
        return "Preencha todos os valores corretamente!"
    }
    return (a*b*c) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplica(5,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplica(2,2,1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
multiplica(2,2,1); // 6

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calcula(a,b,c){
    if (arguments.length == 0){
        return false;
    } else if (arguments.length == 1){
        return a;
    } else if (arguments.length == 2){
        return a + b;
    } else if (arguments.length == 3){
        return (a + b) / c
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
calcula() // false
calcula(1) // 1
calcula(1,2) // 3
calcula(1,2,6) // 0.5
calcula(1,2,6,4) // null
```