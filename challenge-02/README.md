# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function Somar(numero1, numero2) {
    return numero1 + numero2;
}

Somar(10,5); //Resultado será: 15;

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, 
//e somando `5` ao resultado retornado da função.
var x = Somar(10,5) + 5;
x; // o valor de x será 20;

// Qual o valor atualizado dessa variável?
x = 20;

// Declare uma nova variável, sem valor.
var y; //undefinied

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR. Onde VALOR é o novo valor da variável.
*/
function Adicionar() {
    y = 30;
    return 'O valor da variável agora é...: ' + y;
}

Adicionar(); // o 'y' retornará: 25.

// Invoque a função criada acima.
Adicionar();

// Qual o retorno da função? (Use comentários de bloco).
/* Dá erro. uma vez que o valor da variável não
*  não está definida.
*/
/* O valor da variável agora é...:  25 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function Func(numero1, numero2, numero3) {
    if(numero1 === undefinied || numero2 === undefinied || numero3 === undefinied) {
        return 'Preencha todos os valores corretamente!';
    } 
    return (numero1 * numero2 * numero3) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
Func(4,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* Preencha todos os valores corretamente! */

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
Func(4, 5, 6);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 122

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function Func2(numero1, numero2, numero3) {
    if(numero1 !== undefinied && numero2 === undefinied && numero3 === undefinied) {
        return numero1;
    } else if(numero1 !== undefinied && numero2 !== && numero3 === undefinied) {
        return numero1 + numero2;
    } else if(numero1 !== undefinied && numero2 !== undefinied && numero3 !===) {
        return (numero1 + numero2) / numero3;
    } else if(numero1 === undefinied && numero2 === undefinied && numero3 === undefinied) {
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) 
//Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
Func2(); // retorno dessa Func2 será: false;
Func2(1); // retorno dessa Func2 com 1 argumento será: 1
Func2(1, 2); //retorno dessa Func2 com 2 argumentos será: 3
Func2(1,2,3) //retorno dessa Func2 com 3 argumentos será: 1
```