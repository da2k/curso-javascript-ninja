```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function somaNum (x,y){
return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let funSoma = somaNum(10,5) + 5


// Qual o valor atualizado dessa variável?
20

// Declare uma nova variável, sem valor.
let newVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValueNewVar(x) {
    newVar = x
    return `O valor da variável agora é ${newVar}, onde ${newVar} é o novo valor da variável.`
}

// Invoque a função criada acima.
// se invocado passando parametro:
addValueNewVar(10)
// `O valor da variável agora é 10, onde 10 é o novo valor da variável.

// sem passar parametro:
addValueNewVar()
// Qual o retorno da função? (Use comentários de bloco).
// O valor da variável agora é undefined, onde undefined é o novo valor da variável.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

    function tresArgumentos(x,y,z){
       
       if(x === undefined || y === undefined || z === undefined){
        return 'Preencha todos os valores corretamente!'
       }

        let somaTotal = 2
        let multiArg = x * y * z
        return multiArg + somaTotal 
    }

// Invoque a função criada acima, passando só dois números como argumento.
tresArgumentos(10,10)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
tresArgumentos(10,10,10)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 1002

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function recebeTres(a,b,c){
    if(a !== undefined  && b === undefined && c === undefined){
        return a
    } else if (a !== undefined && b !== undefined && c === undefined){
        return a + b
    } else if (a !== undefined && b !== undefined && c !== undefined){
     return (a + b) / c
    } else if (a === undefined && b === undefined && c === undefined){
        return false
    } else {
        return null
    }

}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
recebeTres(10)
recebeTres(10,10)
recebeTres(10,10,10)
recebeTres()
recebeTres(false)

// 10
// 20
// 2
// false
// null
