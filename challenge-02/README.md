# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b) {
  return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var FunçãoEmUmaVariavel = soma(2, 3);
FunçãoEmUmaVariavel += 5

// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var variavelSemValor

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValorEmUmaVariavelo () {
    variavelSemValor = 5;
    return  "O valor da variável agora é "+ variavelSemValor; 
}

// Invoque a função criada acima.
addValorEmUmaVariavelo()

// Qual o retorno da função? (Use comentários de bloco).
/* O retorno desse função é 5 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicaESoma2 (a, b, c) {
    if (a !== undefined && b !== undefined && c !== undefined) {
        mult = a * b * c
        var resultadoFinal = mult + 2
    } else (
        console.log('Preencha todos os valores corretamente!')
    )

    return resultadoFinal 
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicaESoma2(1,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicaESoma2(1,2,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function FunçãoNinja (arg1, arg2, arg3) {
    if(arg2 === undefined && arg3 === undefined) {
        var retorno = arg1
    } else if(arg3 === undefined) {
        var retorno = arg1 + arg2
    } else if(arg1 !== undefined && arg2 !== undefined && arg3 !== undefined) {
        var soma = arg1 + arg2
        var retorno =  soma / arg3
    } else if(arg1 === undefined && arg2 === undefined && arg3 === undefined) {
        var retorno = false
    } else {
        var retorno = null 
    }

    return retorno
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
FunçãoNinja() // false
FunçãoNinja(1) // 1 
FunçãoNinja(1, 2) // 3
FunçãoNinja(1, 2, 3) // 1
```
