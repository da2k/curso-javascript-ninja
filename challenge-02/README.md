# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x1, x2){
    return x1 + x2;
}
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
x = soma(10, 20) + 5;

// Qual o valor atualizado dessa variável?
35

// Declare uma nova variável, sem valor.
var y;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function retorna(y){
    y = "VALOR";
    return y;
}

// Invoque a função criada acima.
retorna(y);

// Qual o retorno da função? (Use comentários de bloco).
/*
O retorno da função retorna() é "VALOR"
*/


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicaSomaDois(a,b,c){
    //pode-se utilizar o undefined 
    //myvar; //aqui é undefined
    //myvar = null; // aqui é nulo
    //if(a === undefined || b === undefined || c === undefined)
    if(!a || !b || !c){
        return 'Preencha todos os valores corretamente!';
    }else{
        return a * b * c + 2;
    }
}

    //pode ser feito sem utilizar o else, sempre que chega no return ignora o resto...
    //se o if nao for satisfeito, vai diretamente ao segundo return

// Invoque a função criada acima, passando só dois números como argumento.
multiplicaSomaDois(2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicaSomaDois(2,2,2)


// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function tresArgumentos(a,b,c){
    if (a !== undefined && b === undefined && c === undefined){
        return a;
    }else if (a !== undefined && b !== undefined && c === undefined){
        return a + b;
    }else if (a !== undefined && b !== undefined && c !== undefined){
        return (a + b) / c;
    }else if (a === undefined && b === undefined && c === undefined) {
        return false;
    }else {
        return null
    } 
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
tresArgumentos() //null
tresArgumentos(1) //1
tresArgumentos(1,2) //3
tresArgumentos(1,2,3) //1
```