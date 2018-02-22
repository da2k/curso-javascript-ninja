# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(valor1, valor2) {
  return valor1 + valor2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var valorSoma = soma(10, 20); //Retorna 30
valorSoma += 5;

// Qual o valor atualizado dessa variável?
35

// Declare uma nova variável, sem valor.
var meuValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionaValor(novoValor) {
  return novoValor;
}

meuValor = adicionaValor('VALOR');

// Invoque a função criada acima.
adicionaValor('VALOR');

// Qual o retorno da função? (Use comentários de bloco).
/*
* O retorno será a string VALOR.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiSoma(valor1, valor2, valor3) {
    if (valor2 == null || valor3 == null) {
        return "Preencha todos os valores corretamente!";
    } else {
        return (valor1 * valor2 * valor3) + 2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(multiSoma(2, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Ele retorna a string "Preencha todos os valores corretamente!"

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(multiSoma(2, 2, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// O valor retornado é 10.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function novaFuncao(valor1, valor2, valor3) {

    if (valor1 != null & valor2 != null && valor3 != null)  {
        return (valor1 + valor2) / valor3;

    } else if (valor2 == null && valor3 == null) {
        return valor1;

    } else if (valor3 == null) {
        return valor1 + valor2;

    } else if (valor1 == null && valor2 == null && valor3 == null) {
        return false;

    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(novaFuncao(10, 20, 30)); //1
console.log(novaFuncao(10, 20)); //30
console.log(novaFuncao(10)); //10
console.log(); //false
```
