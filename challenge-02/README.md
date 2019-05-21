# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma (x,y){ return x+y; }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somaDois = soma(5, 7) + 5; 

// Qual o valor atualizado dessa variável?
somaDois;

// Declare uma nova variável, sem valor.
var nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function nomeiaNova () { return "O valor da variável agora é VALOR"; }

// Invoque a função criada acima.
nova = nomeiaNova();

// Qual o retorno da função? (Use comentários de bloco).
nova;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplica (x, y, z) { if(arguments.length<3){return "Preencha todos os valores corretamente"}; return x*y*z;  }

// Invoque a função criada acima, passando só dois números como argumento.
multiplica(3,4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplica(2,3,4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 24

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function op (x, y, z) {
    if(arguments.length == 1){
        return arguments[0];
    } else if (arguments.length == 2){
        return arguments [0] + arguments[1];
    } else if (arguments.length == 3) {
        return (arguments[0] + arguments[1]) / arguments[2];
    } else if (arguments.length == 0) { return false; }
    else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
```
