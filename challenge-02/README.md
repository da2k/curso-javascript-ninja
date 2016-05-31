# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(num1, num2){
    return num1 + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var result = somar(10,2) + 5;

// Qual o valor atualizado dessa variável?
// 17

// Declare uma nova variável, sem valor.
var minhaVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribuir(){
    var minhaVar = 3;
    return 'O valor da variável agora é ' + minhaVar;
}

// Invoque a função criada acima.
atribuir();

// Qual o retorno da função? (Use comentários de bloco).
/* retorno da função: 3 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function recebeArgs(num1, num2, num3){
    if(num1 !== undefined && num2 !== undefined && num3 !== undefined){
        return (num1 * num2 * num3) + 2;
    }else{
        return 'Preencha todos os valores corretamente!';
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
recebeArgs(1,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
recebeArgs(1,5,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 17

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function testandoIfs(var1, var2, var3){
    if(var1 !== undefined && var2 === undefined && var3 === undefined){
        return var1;
    }else if(var1 !== undefined && var2 !== undefined && var3 === undefined ){
        return var1 + var2;
    }else if(var1 !== undefined && var2 !== undefined && var3 !== undefined){
        return (var1 + var2) / var3;
    }else if(var1 === undefined && var2 === undefined && var3 === undefined){
        return false;
    }else{
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
testandoIfs(); //false
testandoIfs(120); //120
testandoIfs(120,3); //123
testandoIfs(120,3,5); //24.6
```
