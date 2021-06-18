# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a,b){
    return a+b;
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
//Resultado 1:
var valor;
valor = soma(3,2) + 5
//Resultado 2:
var valor = soma(3,2) + 5;


// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var newvalor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function soma_newvalor(){
    newvalor = 25;
    return "O valor da variável agora é " + newvalor;
};

// Invoque a função criada acima.
soma_newvalor();

// Qual o retorno da função? (Use comentários de bloco).
"O valor da variável agora é 25"

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
    // exemplo 1
function recebe_argumentos(d,f,g){
    if(d === undefined|| f === undefined || g === undefined){
        return "Preencha todos os valores corretamente!";
    } else {
        return (d * f * g) + 2;
    }
};
// exemplo 2
function recebe_argumentos(d,f,g){
    if(d === undefined|| f === undefined || g === undefined){
        return "Preencha todos os valores corretamente!";
    } 
    return (d * f * g) + 2;
};

// Invoque a função criada acima, passando só dois números como argumento.
recebe_argumentos(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
"Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
recebe_argumentos(1, 4, 5);


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
22

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function argumentos(h,i,j){
    if (h !== undefined && i === undefined && j === undefined ){
        return h;
    }
    else if (h !== undefined && i !== undefined && j === undefined){
        return h + i;
    }
    else if ( h !== undefined && i !== undefined && j !== undefined){
        return (h + i) / j;
    }
    else if (h === undefined && i === undefined &&& j === undefined){
        return false;
    }
    else {
        return null;
    }
}; 

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
argumentos(2); // 2
argumentos(2, 3); // 5
argumentos(2, 3, 5); // 1
argumentos(); // false
argumentos(null); // false
```