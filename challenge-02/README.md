# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somaDosNumeros(num1, num2){
    var soma = num1 + num2;
    return soma;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somaNumeros = somaDosNumeros(5, 8) + 5;


// Qual o valor atualizado dessa variável?
18


// Declare uma nova variável, sem valor.
var nova;


/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function verifica(){
    nova = 20;
    return "O valor da variável agora é VALOR." + nova;
}


// Invoque a função criada acima.
verifica();


// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 15 */


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function tresArgumentos(argu1, argu2, argu3){
    if(argu1 == undefined || argu2 == undefined || argu3 == undefined){
        return "Preencha todos os valores corretamente!";
    }else{
        return (argu1 * argu2 * argu3) + 2;
    }
}


// Invoque a função criada acima, passando só dois números como argumento.
tresArgumentos(10,20);


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
tresArgumentos(10,20,30);


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 6002


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function desa02(argu1, argu2, argu3){
    if (argu1 !== undefined && argu2 === undefined && argu3 === undefined){
        return argu1;
    }else if(argu1 !== undefined && argu2 !== undefined && argu3 == undefined){
        var soma = argu1 + argu2;
        return soma;
    }else if(argu1 !== undefined && argu2 !== undefined || argu3 !== undefined){
        var conta = (argu1 + argu2) / argu3;
        return conta;
    }else if(argu1 == undefined && argu2 == undefined && argu3 == undefined){
        return false;
    }else{
        return null;
    }
}


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
desa02() //false
desa02(10) //10
desa02(10,10) //20
desa02(10,10,10) //2

```