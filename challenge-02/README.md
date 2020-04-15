# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma (n1, n2){
    return n1 + n2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var soma = soma(2, 2);

// Qual o valor atualizado dessa variável?
4;

// Declare uma nova variável, sem valor.
var = qualquer;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function outraQualquer(){
    return qualquer = 'Fernando Alves de Souza';
}

// Invoque a função criada acima.
console.log(outraQualquer());

// Qual o retorno da função? (Use comentários de bloco).
/*
* 'Fernando Alves de Souza'
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function funcao(a, b, c){
    var mult = a * b * c;
    if(a === '' || b === '' || c === ''){
        return 'Os parametros devem estar preenchidos';
    }
    return mult + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(1, 2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 'Os parametros devem estar preenchidos'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(funcao(1, 2, 3));

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
function funcao1(a, b, c){
    if(a){
        return a;
    }else if(a && b){
        return a + b;
    }else if(a && b && c){
        return (a + b) / c;
    }else{
        return false || null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(funcao1()); // False
console.log(funcao(2)); // 2
console.log(funcao1(2, 6)); // 8
console.log(funcao1(2, 6, 2)); // 4
```