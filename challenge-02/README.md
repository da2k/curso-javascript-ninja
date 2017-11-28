# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(n1, n2){
    return n1 + n2;
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = soma (1, 3);
var result + 5;

// Qual o valor atualizado dessa variável?
8

// Declare uma nova variável, sem valor.
var nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribuirValor(valor){
    nova = valor;
    return nova;
};

// Invoque a função criada acima.
atribuirValor('O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável.')

// Qual o retorno da função? (Use comentários de bloco).
/*
O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function caracteristicas(n1, n2, n3){
    if(n1 === '' || n2 === '' || n3 === ''){
        return 'Preencha todos os valores corretamente!'
    }
    else{
        return (n1*n2*n3) + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
caracteristicas(n1, n2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
NaN

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
caracteristicas(5,5,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//127

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function verificaArgumentos(a1, a2, a3){
    
    if((a1 !== null) && (a2 === null) && (a3 === null)){
        return a1;
    }
    else if((a1 === null) && (a2 !== null) && (a3 === null)){
        return a2;
    }
    else if((a1 === null) && (a2 === null) && (a3 !== null)){
        return a3;
    }
    else if((a1 !== null) && (a2 !== null) && (a3 === null)){
        return a1 + a2;
    }
    else if((a1 !== null) && (a2 === null) && (a3 !== null)){
        return a1 + a3;
    }
    else if((a1 === null) && (a2 !== null) && (a3 !== null)){
        return a2 + a3;
    }
    else if((a1 === null) && (a2 !== null) && (a3 !== null)){
        return a2 + a3;
    }
    else if((a1 !== null) && (a2 !== null) && (a3 !== null)){
        return (a1 + a2)/a3;
    }
    else if((a1 === null) && (a2 === null) && (a3 === null)){
        return false;
    }
    else{
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

verificaArgumentos(3, null, null); //3
verificaArgumentos(3, 2, null); //5
verificaArgumentos(3, 2, 2);//2.5
verificaArgumentos(null, null, null) // false;

```