# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
soma = (valor1, valor2) => {
  return valor1 + valor2
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
receber = (numero1, numero2) => {
    return numero1 + numero2
}

let soma = receber(2,2) + 5

// Qual o valor atualizado dessa variável?
9

// Declare uma nova variável, sem valor.
let palavra

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
let valor

adicionar = (valor) => {
    valor = 10
    return console.log("o valor da variável agora é, ", valor)
}

adicionar(valor)

// Invoque a função criada acima.

adicionar(valor)
// Qual o retorno da função? (Use comentários de bloco).

/* 10 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
testarValores = (numero1, numero2, numero3 ) => {
    
    if (numero1 == null || numero2 == null || numero3 == null) 
    return console.log("Preencha todos os valores corretamente!")
    else
    return console.log((numero1 * numero2 * numero3)+2)
  }

testarValores(2,2,2)

// Invoque a função criada acima, passando só dois números como argumento.

testarValores(2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

/* Preencha todos os valores corretamente! */

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

testarValores(2,2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

/* 10 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

let i, cont= 0, valor = [], primeiroNumero = 0, segundoNumero = 0

analisarValores = (numero1, numero2, numero3) => { 
    valor[0] = numero1
    valor[1] = numero2
    valor[2] = numero3
    for(i=0; i<3; i++){
        if(valor[i] != null){
            cont++
            if(cont === 1){
                primeiroNumero = i
            }
            if (cont === 2){
                segundoNumero = i
            }   
        }
    } 

    switch (cont) {
       
        case 0:
                console.log(false)
        break;
        
        case 1:
                console.log("unico valor passado", valor[primeiroNumero])
        break;
        
        case 2:
                console.log("soma dos dois valores encontrados", valor[primeiroNumero] + valor[segundoNumero])
        break;
        
        case 3: 
                console.log("todos preenchidos", (valor[0] + valor[1]) / valor[2])
        break;

        default:
                console.log(null)
        break;
    }
}

analisarValores()

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

analisarValores() //null
analisarValores(1) // unico valor passado 1
analisarValores(1,2) // soma dos dois valores encontrados 3
analisarValores(2,2,2) // todos preenchidos 2

```
