# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function genji(num1, num2){
    return num1 + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var calculo = genji(10,5);
calculo += 5;

// Qual o valor atualizado dessa variável?
20

// Declare uma nova variável, sem valor.
var ninja;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionar(valor) {
    ninja = valor;
    return "O valor da variável agora é " + ninja;
}

// Invoque a função criada acima.
adicionar("Jiraya");

// Qual o retorno da função? (Use comentários de bloco).
/*
O valor da variável agora é Jiraya
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function gaiden(x, y, z){
    if(x == undefined || y == undefined || z == undefined){
        return "Preencha todos os valores corretamente!";
    }else{
        var resultado = (x * y * z) + 2;
        return resultado;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
gaiden(2,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
gaiden(2,5,1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 12

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function hanzo(x, y, z) {
    if(x != undefined && y == undefined && z == undefined) {
        return "O valor é " + x;
    } else if(x != undefined && y != undefined &&  z == undefined) {
        var parcial = x + y;
        return "A soma é igual a " + parcial;
    } else if(x && y && z) {
        var total = (x + y) / z;
        return "O total da conta é de " + total;
    } else if(x == undefined || y == undefined || z == undefined) {
        return false;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
hanzo(); //false
hanzo(2); // O valor é 2
hanzo(2,5); // A soma é igual a 7
hanzo(2,5,2); // O total da conta é de 3.5
```
