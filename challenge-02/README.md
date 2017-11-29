# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var sum = soma(2, 2) + 5;

// Qual o valor atualizado dessa variável?
9

// Declare uma nova variável, sem valor.
var new_var;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function add(){
    new_var = "Rick and Morty";
    return "O valor da variável agora é " + new_var;
}

// Invoque a função criada acima.
add();

// Qual o retorno da função? (Use comentários de bloco).
    /* 
        'O valor da variável agora é Rick and Morty'
    */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function valida(arg1, arg2, arg3){
    if((arg1 === null || arg1 !== "") || (arg2 === null || arg2 !== "") || (arg3 === null || arg3 !== "")){
        return "Preencha todos os valores corretamente!";
    }
    return (arg1 * arg2 * arg3) + '2';
}

// Invoque a função criada acima, passando só dois números como argumento.
valida(2, 4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
        // 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
valida(2, 3, 4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
    // 26

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function validator(a, b, c){
    if((a == undefined || a == "") && (b == undefined || b == "") && (c == undefined || c == "")){
        return false;
    }else if((a != null || a != "") && (b == null || b == "") && (c == null || c === "")){
        return a;
    }else if((a == null || a == "") && (b != null || b != "") && (c == null || c == "")){
        return b;
    }else if((a == null || a == "") && (b == null || b == "") && (c != null || c != "")){
        return c;
    }else if((a != null || a != "") && (b != null || b != "") && (c != null && c != "")){
        return (a + b) / c;
    }else if((a != null || a != "") && (b != null && b != "")){
        return a + b;
    }else if((a != null || a != "") && (c != null || c != "")){
        return a + c;
    }else if((b != null || b != "") && (c != null || c != "")){
        return b + c;
    }else{
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
validator();
validator(51);
validator(2,2);
validator(5,5,2);
```