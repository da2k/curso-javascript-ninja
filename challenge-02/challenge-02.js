// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma (arg1, arg2){
    return arg1 + arg2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let resultado = soma(2, 3) + 5;

// Qual o valor atualizado dessa variável?
console.log("O Resultado é: ", resultado);

// Declare uma nova variável, sem valor.
let valor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável.
*/

// Invoque a função criada acima.
function insertValue(){

    this.valor = 103;

    return "O valor da variável agora é " + this.valor;
}

// Qual o retorno da função? (Use comentários de bloco).
console.log(insertValue());

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function verificaValores(arg1, arg2, arg3){


    if(arg1 === undefined || arg2 === undefined || arg3 === undefined){
        return "Preencha todos os valores corretamente";
    }
    else{
        return (2 + (arg1 * arg2 * arg3));
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(verificaValores(1,2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//return "Preencha todos os valores corretamente";

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(verificaValores(2,3,1));

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos - // OK
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`. // OK
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function verificarParametros(arg1, arg2, arg3){

    let argsList = [];

    if(arg1 === undefined && arg2 === undefined && arg3 === undefined)
        return false;
    else if(arg1 !== undefined && arg2 === undefined && arg3 === undefined)
        return arg1;
    else if(arg1 !== undefined && arg2 !== undefined && arg3 === undefined)
        return arg1 + arg2;
    else if(arg1 !== undefined && arg2 !== undefined && arg3 !== undefined)
        return ((arg1 + arg2) / arg3);
    else
        return null;
}

console.log("Nenhum argumento: ", verificarParametros()); // Nenhum argumento passado
console.log("Somente 1 argumento passado: ", verificarParametros(1));
console.log("Somente 2 argumentos passados:", verificarParametros(2, 2));
console.log("Todos os argumentos passados: ", verificarParametros(2, 2, 2));