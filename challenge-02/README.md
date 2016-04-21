# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma( num1, num2 ) {
    return num1 + num2;
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var total = soma( 20, 30 ) + 5;
/* Se era para ser com string:
var total = soma( 20, 30 ) + "5";
*/

// Qual o valor atualizado dessa variável?
55
// Ou "505"

// Declare uma nova variável, sem valor.
var novaVariavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function novoValor( valor ) {
    novaVariavel = valor;
    return "O valor da variável agora é " + valor + "."  
};

// Invoque a função criada acima.
novoValor(5);

// Qual o retorno da função? (Use comentários de bloco).
/*
O valor da variável agora é 5.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function conta(num1, num2, num3) {
    var resultado;
    if( num1 && num2 && num3 ){
        resultado = (num1 * num2 * num3) + 2; // Ou "2", se era pra ser string
    } else {
        resultado = "Preencha todos os valores corretamente!";
    }
    return resultado;
};

// Invoque a função criada acima, passando só dois números como argumento.
conta(4, 5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
conta(2, 3, 4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 26. Ou "242", se era pra ser string.

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function outraConta(x, y, z) {
    if( !x && !y && !z ) {
        return false;
    } else if( x && !y && !z ) {
        return x;
    } else if( x && y && !z ) {
        return x + y;
    } else if( x && y && z ) {
        return (x + y) / z;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
outraConta(); // false
outraConta(4); // 4
outraConta(4,5); // 9
outraConta(10,10,2); // 10
```