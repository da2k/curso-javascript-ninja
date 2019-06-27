# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
    function soma(a, b){
        return a+b
    }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
    var funcao = (soma(5,3)) + 5

// Qual o valor atualizado dessa variável?
    13

// Declare uma nova variável, sem valor.
    var semValor

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adiciona(semValor){
    semValor += 10
    
    return 'O valor da variável agora é: '+semValor; 
}

// Invoque a função criada acima.
 
 adiciona(semValor)

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 10 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

    function nova(a, b, c){
        if(!a || !b || !c){
            return 'Prencha todos os valores corretamente';
        }
        return (a*b*c)+2;
    }

// Invoque a função criada acima, passando só dois números como argumento.
    nova(3,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
 // Preencha os valores corretamente

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
    nova(3,2,1)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
 
function teste(a, b ,c ){
    if(arguments.length == 1){
        return arguments[0]

    }else if(arguments.length == 2){
        return arguments[0] + arguments[1]

    }else if(arguments.length == 3){
            return (arguments[0]+arguments[1])/arguments[2]

    }else if(arguments.length == 0){
        return false;

    }else{
        return null
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

// teste(1)    // 1 
//teste(2,1)   //3
//teste(2,3,1)  //5
//teste()  //false
//teste(4,6,5,3,2) //null