//# Desafio da semana #2

//Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

//```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma_dois(a, b){
    return a + b ;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somatoria = 5 + soma_dois(3, 4) ;

// Qual o valor atualizado dessa variável?
console.log(somatoria)

// Declare uma nova variável, sem valor.

var nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function adiciona(){
    nova =+ 30;
    console.log("O valor da variável agora é ", nova)
}


// Invoque a função criada acima.
adiciona();

// Qual o retorno da função? (Use comentários de bloco).

/*

foi criadoa função adiciona que retorna o valor 30.

*/


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function tres_argumentos(x, y, z){
    if (isNaN(x) || isNaN(y) || isNaN(z) ) {
        console.log("Preencha todos os valores corretamente!");
    }else{
        console.log((x*y*z) + 2);
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
tres_argumentos(1,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// R. Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
tres_argumentos(1, 2, 3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// R. 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function recebe_tres(x, y, z){
    if (typeof x === "number" && isNaN(y) && isNaN(z)) {
        console.log("x = ", x)
    } else if (typeof y === "number" && isNaN(z) && isNaN(x)) {
        console.log("y = ",y)
    } else if (typeof z === "number" && isNaN(x) && isNaN(y)) {
        console.log("z = ",z)
    } else if (typeof x === "number" && typeof y === "number" && isNaN(z)) {
        console.log("x + y = ", x + y)
    } else if (typeof x === "number" && typeof y === "number" && typeof z === "number"){
        console.log("x + y + z = ", x + y + z)
    } else if ( !x &&  !y &&  !z){
        console.log("false");
    } else {
        console.log("null");
    } 
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
recebe_tres(1) //2. Se somente um argumento for passado, retorne o valor do argumento.
recebe_tres(1, 2) //3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
recebe_tres(1, 2 , 3) //4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
recebe_tres() //5. Se nenhum argumento for passado, retorne o valor booleano `false`.
recebe_tres("a", "b", "c") //6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
//```
