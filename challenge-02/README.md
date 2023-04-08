# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum_two_values(x,y){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
res1 = sum_two_values(5, 5) + 5;

// Qual o valor atualizado dessa variável?
15

// Declare uma nova variável, sem valor.
var new_var;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function return_string(){
    new_var = 'VALOR';
    return `O valor da variável é ${new_var}`
}
// Invoque a função criada acima.
return_string();

// Qual o retorno da função? (Use comentários de bloco).
'O valor da variável é VALOR'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function sum_three_values(x,y,z){
    if (x === undefined || y === undefined || z === undefined){
        return 'Preencha todos os valores corretamente!';
    }
    return x * y * z + 2;
}
// Invoque a função criada acima, passando só dois números como argumento.
sum_three_values(3,4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
sum_three_values(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function validate_three_values(x,y,z){

    if (x !== undefined && y !==undefined && z !==undefined) {
        return (x + y) / z;
    } else if (x === undefined && y === undefined && z === undefined) {
        return false;
    } else if (y === undefined && z === undefined) {
        return x;
    } else if (x === undefined && z === undefined) {
        return y;
    } else if (x === undefined && y === undefined) {
        return z;
    } else if ((x === undefined && !(y === undefined && z === undefined))||
               (y === undefined && !(x === undefined && z === undefined))||
               (z === undefined && !(x === undefined && y === undefined))) {
        if(x === undefined){
            return y + z
        }
        if(y === undefined){
            return x + z
        }
        if(z === undefined){
            return y + x
        }
    }
    return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
validate_three_values() // false
validate_three_values(null,null,5) // 5
validate_three_values(3,null,5) // 8
validate_three_values(3,7,2) // 5
```
