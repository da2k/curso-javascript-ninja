# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:


// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y) {
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var total = (soma(2,4))+5;


// Qual o valor atualizado dessa variável?
11

// Declare uma nova variável, sem valor.
var semvalor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function change() {
    return "O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável.";
}

// Invoque a função criada acima.
change(semvalor);

// Qual o retorno da função? (Use comentários de bloco).
/*
change(semvalor);
"O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável."
*/

/*Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function tres(arg1,arg2,arg3) {
    if ((arg1 == null) || (arg2 == null) || (arg3 == null)){
        return "Preencha todos os valores corretamente!"}
        return (arg1 * arg2 * arg3) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
tres(2,4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
"Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
tres(2,3,4);

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

function tres2(arg1,arg2, arg3) {
    if ((arg1 == null) && (arg2 == null) && (arg3 == null)){
        return false;
    }
    else if ((arg1 == null) && (arg2 == null)) {
        return arg3;
    }
    else if ((arg2 == null) && (arg3 == null)) {
        return arg1;
    }
    else if ((arg1 == null) && (arg3 == null)) {
        return arg2;
    }
    else if (arg1 == null){
        return arg2 + arg3;
    }
    else if (arg2 == null){
        return arg1 + arg3;
    }
    else if (arg3 == null){
        return arg2 + arg1;
    }
    else if ((arg1 != null) && (arg2 != null) && (arg3 != null)){
        return (arg1 + arg2) / arg3;
    }
        else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

// tres2 (null,null,null); false

// tres2 (7,null,null); 7

// tres2 (8,4,null); 12

// tres2 (8,4,3); 4


```