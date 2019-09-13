# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

var x = 0;
var y = 0;

function soma(){
    return x + y; 
}

soma(27, 7);
//34


// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = 0;

result = soma(27, 7);

result += 5;
// result == 39

// Qual o valor atualizado dessa variável?

 Valor final da 'var' result == 39

// Declare uma nova variável, sem valor.
var newVra;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

function adicionar(){
    newvar = 25;
    return 'O valor da variavel agora é' + newvar;
}

newVar = adicionar();
newVar; // 'O valor da variavel agora e VALOR'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function argumentos(x, y, z){
    if( x=== undefined || y === undefined || z === undefined){
        return 'Preencha todos os valores corretamente';
    } else{
        return ( x * y * z) + 2;
        }
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
argumentos(2, 8);


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//'Preencha todos os valores corretamente'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

argumentos(2, 4, 8);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

// 66

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
function argumentos2(x, y, z){

    if( x === undefined && y === undefined && z === undefined){
        return false;
    }

    else if( x === undefined && y === undefined){
        return z;
    }
    else if( x === undefined && z === undefined){
        return y;
    }
    else if( y === undefined && z === undefined){
        return x;
    }

    else if( z === undefined){
        return x + y;
    }

    else if( y === undefined){
        return x + z;
    }

    else if( x === undefined){
        return y + z;
    }

    else{
        return (x + y)/z;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

argumentos2();
//false

argumentos2(2, 4, 5);
// 1.2

argumentos2(2, 4);
//6

argumentos2(5);
//5

