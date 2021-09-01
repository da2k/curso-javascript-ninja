# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
fucntion lc(x,y) {
retun x + y ;
};

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var mysun = lc(2 , 5 ) + 5;

// Qual o valor atualizado dessa variável?
mysun  = 12

// Declare uma nova variável, sem valor.
var novavar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
novavar
undefined
function exemplo2() { 
    novavar = 25
    return ' valor da variavel agora é ' + novavar; }
undefined
exemplo2()
" valor da variavel agora é 25"

// Invoque a função criada acima.
exemplo2()
" valor da variavel agora é 25"

// Qual o retorno da função? (Use comentários de bloco).

exemplo2();
 'o valor da variável agora é 25'
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function newfunction(a , b, c) { // esse é o jeito de ser feito com else // 
    if( a===undefined || b === undefined || c=== undefined) {
        return 'preencha todos os valores corretamente !';
    } else {
       return (A * B * C) + 2  
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
newfunction(1 , 2);
 'preencha todos os valores corretamente'

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
26

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
newfunction(1 , 2 , 3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//26

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function threeArgs(x ,y ,z ) {
    if( x !== undefined && y === undefined && z === undefined ){ //se todos menos o premeiro valor passarem ai usa o returne
        return x;

    } else if( x !== undefined && y !== undefined && z === undefined) {
        return x , y;

    } else if( x !== undefined && y !== undefined &&  z=== undefined) {
        return (x + y) / z

    } else if( x === undefined && y === undefined &&  z === undefined ) {
        return 'false';
    } else null;
    
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
threeArgs();
false
threeArgs (); // false
false 
threeArgs (1); 
1
threeArgs(1) ; // false
1
threeArgs(1 , 2); // 3
3
threeArgs(1 , 2 , 3);  // 1 
1
```
