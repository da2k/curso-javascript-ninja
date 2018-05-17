# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar (numero, numero2){
    return numero + numero2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var soma = somar(3, 9) + 5;

// Qual o valor atualizado dessa variável?
//17

// Declare uma nova variável, sem valor.
var msg;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValor (){
    msg = "VALOR";
    return msg;
}

// Invoque a função criada acima.
console.log(addValor());

// Qual o retorno da função? (Use comentários de bloco).
/*VALOR*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicar (num, num2, num3){
    
    if (num == null || num2 == null || num3 == null){
          console.log("Preencha todos os valores corretamente.");
    } else{
        return ((num * num2 * num3) + 2);
    }
}



// Invoque a função criada acima, passando só dois números como argumento.
console.log(multiplicar(2, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente.

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(multiplicar(2, 2, 2));

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
function calc(numero, numero2, numero3){
    if (numero !== undefined && numero2 === undefined && numero3 === undefined){
        return numero;
    
    } else if (numero !== undefined && numero2 === undefined && numero3 === undefined){
        return numero + numero2;
    
    } else if (numero !== undefined && numero2 === undefined && numero3 !== undefined){
        return (numero + numero2) / numero3;
    
    } else if(numero === undefined && numero2 === undefined && numero3 === undefined){
        return false;
    
    }  else{
        return null;
    }

}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

console.log(calc());  //false
console.log(calc(10)); //10
console.log(calc(10, 20)); //30
console.log(calc(10, 20, 30)); //1
