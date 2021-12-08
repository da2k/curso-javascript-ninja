//# Desafio da semana #2

//Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(a,b){
    return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
mysoma = soma(5,5) + 5;

// Qual o valor atualizado dessa variável?
15;

// Declare uma nova variável, sem valor.

var myvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function myfunction (myvar){
return console.log('O valor da variável agora é '+ myvar);
}

// Invoque a função criada acima.

myfunction('Caio');
// Qual o retorno da função? (Use comentários de bloco).

/* 
O valor da variável agora é Caio
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function myfunction2 (a,b,c){
    if(a == undefined){
return console.log("Preencha todos os valores corretamente")
    }
    if(c == undefined){
        return console.log("Preencha todos os valores corretamente")
            }
            if(b == undefined){
                return console.log("Preencha todos os valores corretamente")
                    }
                    else{
                        return (a * b * c) + 2;
                    }
}

// Invoque a função criada acima, passando só dois números como argumento.

myfunction2(1,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

'Preencha todos os valores corretamente';

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

myfunction2(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

8;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function myfunction3(a,b,c){
    if(a !== undefined && b == undefined && c == undefined){
return console.log(a);
    }
    else if(c === undefined){
        return console.log(a+b);
    }else if(a != undefined && b != undefined && c != undefined){
        return console.log((a+b)/c);
    }else if(a === undefined && b === undefined && c === undefined){
        return false;
    }else{
        return null; 
    }
    
}
