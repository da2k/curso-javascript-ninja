/* # Desafio da semana #2 */


//Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:


// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function sum( x, y ){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

var resul = sum(5,2) + 5;

// Qual o valor atualizado dessa variável?

console.log('O resultado da variável é:', resul);

// Declare uma nova variável, sem valor.

var value;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function add(newValue){
    value = newValue;
    return 'O valor da variável agora é ' +value+ '.';
}

// Invoque a função criada acima.

add(3);

// Qual o retorno da função? (Use comentários de bloco).

console.log();
/* O valor da variável agora é 3. */ 

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multi(x, y, z){

   if(x !== undefined && y !== undefined && z !== undefined){
       return (x * y * z) + 2;
   } 
    
   return 'Preencha todos os valores corretamente!';
}

// Invoque a função criada acima, passando só dois números como argumento.

console.log(multi(5,2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

console.log(); // Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

console.log(multi(5,2,3));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

console.log(); // 32

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function values( value1, value2, value3 ){

    if(value1 !== undefined && value2 === undefined && value3 === undefined){
        return value1;
    }

    if(value1 !== undefined && value2 !== undefined && value3 === undefined){
        return value1 + value2;
    }

    if(value !== undefined && value2 !== undefined && value3 !== undefined){
        return (value1 + value2) / value3;
    }

    if(value1 === undefined && value2 === undefined && value3 === undefined){
        return false;
    }

    return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(values()); // false
console.log(values(5)); // 5
console.log(values(5,2)); // 7
console.log(values(5,2,2)); // 3.5