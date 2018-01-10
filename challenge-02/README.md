# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y) {
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var soma = soma(2, 3) + 5;

// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var novaVariavel;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionaValorParaNovaVariavel() {
    novaVariavel = 11;
    return 'O valor da variável agora é ' + novaVariavel;
}

// Invoque a função criada acima.
adicionaValorParaNovaVariavel();

// Qual o retorno da função? (Use comentários de bloco).
/*
    O retorno da função é uma String com o resultado "O valor da variável agora é 11"
    Podemos ver exibindo o valor do retorno da função no console com o comando: console.log(adicionaValorParaNovaVariavel());
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicaESoma2(a, b, c) {
    if (!(a && b && c)) {
        return 'Preencha todos os valores corretamente!';
    }
    return (a * b * c) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicaESoma2(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicaESoma2(1, 2, 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function somaOsDoisPrimeirosEMultiplicaPeloTerceiro(a, b, c) {
    var argumentos = [a, b, c];
    var tamanho = argumentos.length;

    for (var i = 0; i < tamanho; i++) {
        if (!argumentos[i]) {
            argumentos.splice(i, 1);
            tamanho = argumentos.length;
            i--;
        }
    }

    if (tamanho) {
        if (tamanho === 1) {
            return argumentos[tamanho-1];
        } else if (tamanho === 2) {
            return argumentos[tamanho-1] + argumentos[tamanho-2];
        } else if (tamanho === 3) {
            return (argumentos[tamanho-3] + argumentos[tamanho-2]) / argumentos[tamanho-1];
        }
    } else {
        return false;
    }

    return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(somaOsDoisPrimeirosEMultiplicaPeloTerceiro(1)); // 1
console.log(somaOsDoisPrimeirosEMultiplicaPeloTerceiro(1, 2)); // 3
console.log(somaOsDoisPrimeirosEMultiplicaPeloTerceiro(2, 2, 2)); // 2
console.log(somaOsDoisPrimeirosEMultiplicaPeloTerceiro()); // false
```