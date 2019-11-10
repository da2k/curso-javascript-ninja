# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somarValores(firstArgs, secondArgs) {
    return firstArgs + secondArgs ;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = somarValores(1, 2) + "5"
var resultado = somarValores(1, 2) + 5

// Qual o valor atualizado dessa variável?
/*
O resultado --> "var resultado = somarValores(1, 2) + '5'" da "35"
O resultado --> "var resultado = somarValores(1, 2) + 5" da 8
*/

// Declare uma nova variável, sem valor.
var newVar
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
// Várias formas de concatenar:
function atribuirValor(arg) {
    newVar = arg ;
    return `O Valor da variável agora é ${newVar}` ;
}

function atribuirValor(arg) {
    newVar = arg ;
    return "O Valor da variável agora é " + newVar ;
}

function atribuirValor(arg) {
    newVar = arg ;
    return "O Valor da variável agora é ".concat(newVar) ;
}

// Invoque a função criada acima.
atribuirValor(10) ;

// Qual o retorno da função? (Use comentários de bloco).
/*
O retorno da função é:
  --> 'O Valor da variável agora é 10'
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function manipularValores(arg1, arg2, arg3) {
    var result ;
    if (arg1 === undefined || arg2 === undefined || arg3 === undefined) {
        result = "Preencha todos os valores corretamente!" ;
    } else {
        result = (arg1 * arg2 * arg3) + 2 ;
    }
    return result ;
}

// Invoque a função criada acima, passando só dois números como argumento.
manipularValores(2, 2) ;

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
    Como passamos apenas dois parâmetros, assim que entrou na verificação (IF), o 
    terceiro argumento retornou true, e como estamos usando o operador OU (||),
    foi alimentado a string "Preencha todos os valores corretamente!" para a variável 
    result que por suas vez está atribuida para o retorno da função.
*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
manipularValores(2, 2, 2) ;

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
    Como todos os parâmetros foram passados, a verificação IF retornou false e no else
    foi realizado a conta: (arg1 * arg2 * arg3) + 2 e atribuida para a variável result.
    o valor de result é 10 que foi atribuida para o retorno da função.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function manipularSomatorias(arg1, arg2, arg3) {
    var result ;
    if (arg1 !== undefined && arg2 === undefined && arg3 === undefined) {
        result = arg1 ;
    } else if (arg1 !== undefined && arg2 !== undefined && arg3 === undefined) {
        result = arg1 + arg2 ;
    } else if (arg1 !== undefined && arg2 !== undefined && arg3 !== undefined) {
        result = (arg1 + arg2) / arg3 ;
    } else if (arg1 === undefined && arg2 === undefined && arg3 === undefined) {
        result = false ;
    } else {
        result = null ;
    }
    return result ;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
manipularSomatorias() ; // false
manipularSomatorias(5) ; // 5
manipularSomatorias(5, 5) ; // 10
manipularSomatorias(5, 5, 5) ; // 2
manipularSomatorias(undefined, 5, 5) ; // null
