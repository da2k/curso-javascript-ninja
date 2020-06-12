# Desafio da semana #2

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
    return x + y;
}

console.log(soma(5,2));

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var testeFuncaoSoma = soma(5,2)+5;
console.log(testeFuncaoSoma);

// Qual o valor atualizado dessa variável?
12

// Declare uma nova variável, sem valor.
var variavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function somaValor(){
    variavel = 20;
    return "O valor da variável agora é "+ variavel;
    
}

// Invoque a função criada acima.
somaValor();

//Qual o retorno da função? (Use comentários de bloco).
/*"O valor da variavel agora é 20" */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function expressao(numeroX, numeroY, numeroZ){
    if (numeroX===undefined || numeroY===undefined || numeroZ===undefined){
        return "Preencha todos os valores corretamente";
    } else {
        return (numeroX*numeroY*numeroZ) + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
expressao(3,4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// "Preencha todos os valores corretamente"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
expressao(2,2,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function novaFuncao(numeroX, numeroY, numeroZ){
    if(numeroX !== undefined && numeroY !== undefined && numeroZ !== undefined){
        return (numeroX + numeroY) / numeroZ;
    } else if(numeroX !== undefined && numeroY===undefined && numeroZ===undefined){
        return numeroX;
    } else if(numeroX!==undefined && numeroY!==undefined){
        return numeroX + numeroY;
    } else if(numeroX === undefined && numeroY === undefined && numeroZ===undefined){
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

novaFuncao(); //False
novaFuncao(10); //10
novaFuncao(10, 2); //12
novaFuncao(10, 2, 2); //6



