# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = soma (5 + 5);
resultado +=5;

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
var variavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function nomeString(variavel){
    return 'o Valor da variavel agora é' + variavel
}


// Invoque a função criada acima.
nomeString(3)

// Qual o retorno da função? (Use comentários de bloco).
// O valor da retornado da função será 3
nomeString(3);

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function calculo(a1,a2,a3){
    if (a1 & a2 & a3 === null){
        return 'Preencha todos os valores corretamente!'
    } else {
        var expressao = a1*a2*a3
        expressao += 2;
        return expressao
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
calculo(30,20)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// A String retornada será "Preenche todos os valores corretamente"
calculo(30,20)

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
calculo(2,2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// O valor retornado será 10 
calculo(2,2,2)

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calculo2(a,b,c){
    if (a){
        return a;
    } else if (a && b){
        return a + b;
    } else if (a && b && c){
        return (a + b)/c
    } else if () {
        return false;
    } else  {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

calculo2(1) // 1
calculo2(1,2) // 3
calculo2(1,2,3) // 0
calculo2() // false
calculo2(1,2,3,4) // null
