# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(numberOne, numberTwo){
    return numberOne + numberTwo;}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
soma2 = soma(5,6) + 5;

// Qual o valor atualizado dessa variável?
16

// Declare uma nova variável, sem valor.
var myvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribuir(x){
    myvar = x;
    retornoString = 'O valor da variavel agora é ' + myvar;
    retornoString2 = ' onde ' + myvar + ' e o novo valor da variavel';
    return retornoString + retornoString2;}

// Invoque a função criada acima.
atribuir(5)

// Qual o retorno da função? (Use comentários de bloco).
/*O valor da variável agora é 5.
Onde 5 é o novo valor da variável.*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function MyFunction(x, y, z){
    if(x == null || y == null || z == null){
        return 'Preencha todos os valores corretamente!'
    }
    var num = +'2';
    return x * y *z + num;}

// Invoque a função criada acima, passando só dois números como argumento.
MyFunction(2,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
MyFunction(2,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
14

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function MyFunction(x, y, z){
    if(x != null && y == null && z == null){
        return x;};
    if(x != null && y != null){
        return x + y;};
    if(x != null && y != null && z != null){
        return (x + y)/z;}; 
    if(x == null){
        return  false;};
    return null;}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
MyFunction(); // false
MyFunction(5); // 5
MyFunction(2,5); // 7
MyFunction(10,2,3); // 4
```
