# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
?
> var x = 2;
undefined
> var y = 3;
undefined
> function soma (x,y){
... return x + y;
... }
undefined
> soma(x,y)
5
>

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
?

> soma2 = soma(x,y);
5
> soma2
5
> soma2 = soma(x,y) + 5;
10
>

// Qual o valor atualizado dessa variável?
?
10


// Declare uma nova variável, sem valor.
?


/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
?

> function add (z){
... return 'O valor da variável agora é '. z = 'VALOR';
... }
undefined
> add(z);
'VALOR'

// Invoque a função criada acima.
?

add(z);

// Qual o retorno da função? (Use comentários de bloco).
?

// VALOR

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
?

> var x = 1;
undefined
> var y = 2;
undefined
> var z = 3;
undefined

> function argumentos (x, y, z) {
... if ( x === "" &&  y === "" && z === ""){
..... return "Preencha todos os valores corretamente!";
..... }else{
..... return (x * y * z) + 2;
..... }
... }
undefined
> argumentos(x,y,z)
8
>

// Invoque a função criada acima, passando só dois números como argumento.
?

argumentos(x,y);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?
> argumentos(x,y);
NaN
// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
?
> argumentos(x,y,z)
8
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?

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
?

> function arg2 (x, y, z){
... if (x === true){
..... return x;
..... }
... else if (x === true && y === true){
..... return x + y;
..... }
... else if (x === true && y === true && z === true){
..... return (x + y) / z;
..... }
... else if (x === "" && y ==="" && z === ""){
..... return false;
..... }
... else{
..... return null;
..... }
... }
undefined
>

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
```

