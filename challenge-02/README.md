# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a,b){
    return a + b;
}
soma(5, 3); // 8

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = soma(10,2);
result += 5; //17;

//correcao professor
var result = soma(10,2) + 5;

// Qual o valor atualizado dessa variável?
17

// Declare uma nova variável, sem valor.
var nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function info(){
    nova = "O valor da variável agora é" .result;
    return nova;
}

//correcao professor
function addValue(){
    nova = 25;
    return "O valor da variavel agora é " + nova;
}


// Invoque a função criada acima.
Info();

// Qual o retorno da função? (Use comentários de bloco).
undefined;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function dados(a, b, c){
    if(a === "" || b === "" || c === "" ){
        var res = "Preencha todos os valores corretamente!";
        return  res;
    } else {
        var res2 = a*b*c;
        res2 += 2;
        return res2;
    }

}

//correcao professor
function novosValores(a, b, c){
    if(a === undefined || b === undefined || c === undefined){
    return "Preencha todos os valorers corretamente!";
    }else{
        return (a*b*c) + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
dados(2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//"Preencha todos os valorers corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
dados(2, 5, 4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//42;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function novaFunc(a, b, c){
    if(a !== undefined && b === undefined && c === undefined){
        return a;
    } else if( a !== undefined && b !== undefined && c === undefined){
        return a + b; 
    } else if( a !== undefined && b !== undefined && c !== undefined){
        return (a + b) / c; 
    } else if( a === undefined && b === undefined && c === undefined){
        return false;
    }else{
        return null; 
    }

}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

novaFunc(); //false;
novaFunc(2); //2
novaFunc(2, 5); //7
novaFunc(2, 5, 8); //0.875

```
