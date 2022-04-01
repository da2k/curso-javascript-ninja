# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
    >> function soma(x,y){
    ... return x + y;
    ... }
    undefined
    > soma(10,15)
    25
    >

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

    > var resultado = soma(10,15) + 5;
    undefined

// Qual o valor atualizado dessa variável?
    > resultado
    30
    >

// Declare uma nova variável, sem valor.
    > var nvalue

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
?

// Invoque a função criada acima.
?

// Qual o retorno da função? (Use comentários de bloco).
?

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/    
    > var x;
    > var y = 20;
    > var w = 10;
    > funcition test(x, y, w){
    ... if( x === undefined || y === undefined || w === undefined){
    ... 'Variáveis Indefinidas';
    ... } else{
    ... (x * y * w) + 2;
    ...}
    }
    'Variáveis Indefinidas'
    > var x = 30
    undefined
    > if( x === undefined || y === undefined || w === undefined){
    ... 'Variáveis Indefinidas';
    ... } else{
    ... (x * y * w) + 2;
    ... }
    6002

// Invoque a função criada acima, passando só dois números como argumento.
? Resolvido acima

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
? Variáveis Indefinidas

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
? Variáveis Definidas

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
? // 6002 foi o resultado da multiplicação

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
?

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
```