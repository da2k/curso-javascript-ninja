# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somando(x, y) {
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var res_soma = somando(84, 19) + '5';

// Qual o valor atualizado dessa variável?
'1035'

// Declare uma nova variável, sem valor.
var vazia;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function add_valor() {
    vazia = 48;
    return 'O valor da variável agora é 48';
}

// Invoque a função criada acima.
add_valor();

// Qual o retorno da função? (Use comentários de bloco).

/*
    'O valor da variável agora é 48'
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function valida(a, b, c) {
    if(a == null || b == null || c == null) {
        return 'Preencha todos os valores corretamente!';
    } else {
        return (a * b * c) + '2';
    }
}    

// Invoque a função criada acima, passando só dois números como argumento.
valida(46, 17);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
valida(90, 6, 27);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// '145802'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function operacao(d, e, f) {
    if(d == null) {
        return false;
    } else if(e == null) {
        return d;
    } else if(f == null) {
        return d + e;
    } else if((d && e && f) != null ) {
        return (d + e) / f;
    } else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
operacao(); // false
operacao(10); // 10
operacao(10, 20); // 30
operacao(10, 20, 2); // 15
