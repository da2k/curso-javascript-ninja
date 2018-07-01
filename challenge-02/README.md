# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
? function add(a, b) {
    return a + b; 
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
? var soma = add(2, 6) + 5; 

// Qual o valor atualizado dessa variável?
? 13

// Declare uma nova variável, sem valor.
? var value; 

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
? function numberToString() {
    value += 23; 
    return "O valor da variável agora é " + value; 
}

// Invoque a função criada acima.
? numberToString();

// Qual o retorno da função? (Use comentários de bloco).
? //O valor da variável agora é 23

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
? function simpleExpression(a, b, c) {
    if (a == null|| b == null || c == null) {
        return "Preencha todos os valores corretamente!";
    } else { 
        return (a * b * c) + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
? simpleExpression (3, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
? //Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
? simpleExpression (3, 2, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
? //14

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
? function tester(a, b, c) { //1.
    if (a == undefined) {
        return false //5.
    } else {
        var value = a; //2.
        if (b != undefined) { 
            value += b; //3.
        }
        if (c != undefined) {
            value /= c; //4.
        }
        return value;
    }
    return null; //6.
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
? > tester()
// false
> tester(2)
// 2
> tester(3,4)
// 7
> tester(1,2,3)
// 1
