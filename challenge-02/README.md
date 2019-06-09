# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
return x+y
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
?
adicao = soma(2,2)
adicao+=5

// Qual o valor atualizado dessa variável?
9

// Declare uma nova variável, sem valor.
var frase

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function txt() {
    return 'VALOR'
}

var frase = txt()

// Invoque a função criada acima.

frase = txt()

// Qual o retorno da função? (Use comentários de bloco).
'VALOR'
/*

Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function operacao(x, y, z) {

    if (x == null || x , y == null || x,y,z == null) {
            console.log("Preencha todos os valores corretamente!")
    }


    else {
        var res = (x*y*z)+2
        console.log(res)
    }
}


// Invoque a função criada acima, passando só dois números como argumento.


var ab = operacao(4, 6)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
Preencha todos os valores corretamente!


// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

var abc = operacao(4, 6, 2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

50

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function operacao(x, y, z) {

    if (x !== null || x , y !== null || x,y,z !== null) {
        if (y == null && z == null) {
            console.log(x)
        }

        else if (z == null) {
            console.log(x + y)
        }

        else {
            console.log((x + y) / z)
        }
    }


    else {
        var res = false
        console.log(res)
    }
}

var a = operacao(4)
var ab = operacao(4, 6)
var abc = operacao(4, 6, 2)
var c = operacao()

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

4
10
5
null
```
