# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

> function soma(x,y){
... return x + y;
... }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var minhasoma = soma(4,9) + 5;

// Qual o valor atualizado dessa variável?
18

// Declare uma nova variável, sem valor.
var semvalor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
var semvalor;
function addvalor(){
novovalor = 02;
return 'O valor da variável agora é ' + novovalor + '. Onde ' + novovalor + ' é o novo valor da variável.';
}

// Invoque a função criada acima.
addvalor()

// Qual o retorno da função? (Use comentários de bloco).
/* O valor da variável agora é 02.
Onde 02 é o novo valor da variável.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function newtres(x,y,z){
    if (x===undefined && y===undefined && z===undefined){
        return 'Preencha todos os valores corretamente!';
    }else{
        return (x*y*z) + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
newtres(1,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//"Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
newtres(1,2,3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function segueolider(a,l,p){
    if( a!==undefined && l===undefined && p===undefined){
        return a;
    } else if (a!==undefined && l!==undefined && p===undefined){
        return a + l;
    } else if (a!==undefined && l!==undefined && p!==undefined){
        return (a + l)/p;
    }else if (a === undefined && l===undefined && p===undefined){
        return false;
    }else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
segueolider(); // false
segueolider(1);// 1
segueolider(1,2); // 3
segueolider(2,4,6); // 1

```
