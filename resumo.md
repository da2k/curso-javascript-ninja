Resumo do curso JS Ninja

/* 
Seção 1
*/

// Vídeo 02
Variáveis: valores simbólicos de valores

Pra criar uma variável:
> var nome;
> var num = 1;

Tipos de dados: number, string, boolean, null, undefined, {} object, [] array.

Objetos:
> var x = {};
> var pessoa = {
> altura: 1.87,
> peso: 90   
> };

Array:
> var numeros = [];
> numeros = [ 1, 2, 3, 4 ];
Para acessar um determinado array:
> numero[0];
> numero[3];

// Vídeo 03
Operadores aritméticos:
+ Adição;
- Subtração;
* Multiplicação;
/ Divisão.

Operadores aritméticos abreviados:
++ adição de 1 (incremento);
-- substração de 1 (decréscimo).

+= soma valor;
> numero = 10;
> numero += 10; // é somado 10 ao número;
-= subtrai valor;
*= multiplica valor;
/= divide valor;

// Vídeo 04
Operadores de igualdade / relacionais:
== igual a
!= diferente de

=== igual a, e do mesmo tipo
!== diferente de, mas do mesmo tipo

> maior que
< menor que
>= maior ou igual a
<= menor ou igual a

// Vídeo 05
Funções: blocos de código Javascript nomeados, e que podem ser invocados usando o operador ().
> function nome() {};
>
> var x = 1;
> function soma() {
> x = x + 1;    
> };
> soma(); // retorna 2

Escopo: variáveis criadas dentro da função não podem ser invocadas fora dela.
Parâmetros: são argumentos, valores, que a função recebe e pode manipular dentro dela.
> function soma( x, y ) { return x + y; } // x e y são parâmetros



/* 
Seção 2
*/

// Vídeo 08
Operadores lógicos: combina dois valores e retorna se é true ou false.
&& (AND)
|| (OR)
! (NOT)

// Vídeo 09
Operadores unários: tenta converter valor para número ou concateca valores.
 + e -

 //Vídeo 10
Estrutura léxica
Javascript é case sensitive.
Comentários:
// de linha
/*
de bloco
*/

Literais: valores que fazem parte do código javascript.
Números 12, 1.2
Strings 'ninja' "ninja"
Null
Objetos { a: 1 }
Arrays [ 1, 2 ]
Bolleanas true false

Identificadores: nomes pra variáveis e funções
Podem iniciar com _ ou $, letras de a a z e A a Z.
Podem conter _ ou $, letras de a a z e A a Z, dígitos de 0 a 9 e qualquer caractere UNICODE.

Palavras reservadas: palavras reservadas pelos desenvolvedores de Javascript e por isso não podem ser usadas como identificadores.
https://www.w3schools.com/js/js_reserved.asp

// Vídeo 11
Instruções condicionais (IF)
> if(condicao) { rotina }
> var x = 3;
> var y = 3;
> if( x == y ) { return 'yes'; } // retorna 'yes'
> if( x !== y || y == 3 ) { return 'yes' } // retorna 'yes', porque y == 3

ELSE: caso a primeira condição do IF não se concretize, faça o de ELSE
> if (condicao) { rotina }
> else { rotina02 };

ELSEIF: cria uma segunda condicional no IF.
> if (condicao) { rotina }
> elseif (condicao) { rotina02 }
> else { rotina03 };



/* 
Seção 3
*/

// Vídeo 16
Objetos: conjunto de propriedades.
> { propriedade: 'valor' };
> var objeto = { propriedade: 'valor, propriedade2: 10, propriedade3: true };
> objeto.propriedade // retorna 'valor'

// Vídeo 17
Métodos do objeto: função dentro de um objeto
> var objeto2 = { metodo: function( num ) {return num} }
> objeto2.metodo();

Para alterar o valor:
> objeto.propriedade2 = 20;



/* 
Seção 4
*/

// Vídeo 21
Truthy e Falsy: valores que, em termos booleanos, são verdadeiros ou falso.

Valores falsy:
- undefined
- null
- NaN
- 0
- -0
- " ou "" (string vazia) // '0' retorna true

Objetos e arrays vazios são truthy.

Descobrir a representação booleana, sem usar o if:
!!variável


// Vídeo 22
Condicional ternário: uma forma abreviada de fazer uma condicional. Usar apenas pra instruções pequenas.

condição ? true : false.
> 1 === 2 ? true : false // returna false.
> var sexo = pessoa.sexo === 'Feminino' ? 'a' : 'o';
> var carro = 'string' ? 'porta' : 'janela' // returna 'porta'


// Vídeo 23
Escopo local e global: o que é declarado dentro de funções só é acessível dentro dela.

Utilização da var: utilizando-se o var, ele se detém ao escopo. Se não utilizado, o JS interpreta como se a variável fosse de escopo global,
> function newFunction() {
> newVar = 'variavel global';
> return newVar;   
> };
> newVar; // retorna 'variavel global'
Argumentos de função também são locais.



/* 
Seção 5
*/

// Vídeo 28
Retorno de funções com arrays e objetos
> myFunction() {
> return [ 1, 2, 3 ];   
> }
> myFunction(); // retorna [ 1, 2, 3 ]
> myFunction()[0]; // retorna 1

> myFunction2() {
> return {
>   prop1: 1,
>   prop2: 'fernando',
>   prop3: function() {return 'prop3'}   
> };   
> };
> myFunction2().prop1; // retorna 1


// Vídeo 29
Arrays e objetos como argumentos
> var arr = [ 1, 2, 3 ];
> function myFunction(arg) {
>   return arg[1];   
> };
> myFunction(arr); // retorna 2;

> var obj = { prop1: 1,
>   prop2: 'fernando',
>   prop3: function() {return 'prop3'}
>   };
> function myFunction2(arg) {
>   return arg.prop1;   
> };
> myFunction(obj); // retorna 1;



/* 
Seção 6
*/

// Vídeo 35
Operador vírgula: junta várias expressões
> var a, b = 2, c;
> function myFunc() {
>   var x = 0;
>   return ( x +=1, x ); // return ++x
> };

Estrutura condicional
Switch

switch (x) {
    case 1:
        console.log('x é 1');
        break;
    case 2:
        console.log('x é 2');
        break;
    default:
        console.log('x não é nem 1 nem 2');
}

Atenção: não esquecer de colocar o break depois de cada 'case'.


// Vídeo 36
Estrutura de repetição (loop)
While

while( counter < 10 ) {
    console.log(counter);
    counter++;
};



/* 
Seção 7
*/

// Vídeo 39
Operador módulo %: resto da divisão (inteiro).
3 % 3 = 0
5 % 2 = 1

Mostrar somente os números pares:
> num = 0;
> while( num <= 20 ) {
>    num % 2 === 0 ? console.log(num) : '';
>    num++;
> }


// Vídeo 40
Propriedade de arrays
length: conta quantos elementos tem no array

> var arr = [ 'Fernando', 1, true, function() {} ];
> arr.length // returna 4
> var qtd = arr.length;
> while( qtd > 0 ) {
>    console.log( arr[ --qtd ] );
> }; // retorna todos os elementos do array


// Vídeo 41
push(): adiciona elemento em um array
> arr.push(false); // arr = [ 'Fernando', 1, true, function() {}, false ]

Estrutura de repetição FOR
for ( init, condition, final-expression ) {};



/* 
Seção 8
*/

// Vídeo 44
Nomear funções: facilita o debug.
> var func = function func() {};
> func.name // retorna func


// Vídeo 45
Functional programming: maneira de programar.
Objetos de primeira classe. Objetos e funções tem o mesmo tratamento (pode fazer a mesma coisa com os dois).

Funções literais
> function sum( x, y ){
>    return x + y;
> }

Também pode-se atribuir uma função a uma variável
> var func = function sum( x, y ) {
>    return x + y;
> };

> function person() {
>    var info = {
>        name: 'Fernando',
>        lastName: 'Daciuk'
>    };
>    return info;
> };


// Vídeo 46
Retornar funções de outras funções

> function adder(x) {
>    function addOther(y) {
>        return x + y;
>    };
>    return addOther;
> };

> var add2 = adder(2);
> add2(3); // 5
> adder(2)(3); // 5


// Vídeo 47
Você pode passar funções por parâmetro

> function showOtherFunction(func) {
>    return func();
> };

> showOtherFunction(function() {
>    return 'Functional JS Ninja!';
> });

// retorna 'Functional JS Ninja!'



/* 
Seção 9
*/

// Vídeo 51
Escopo de funções: global e local
> function myFunction() {
>     function() {
>         return 1 + 2;
>     };
>     return sum();
> };
> console.log( myFunction() );
> console.log ( sum() ); // retorna um erro. sum() não é acessível globalmente


// Vídeo 52
HOISTING: move todas as funções literais pra cima do documento, pra que ela funcione pra todo o escopo dele ou da função na qual está inserida.
> function myFunction() {
>     var number1 = 1;
>     var number2 = 2
>     return sum();
>     function sum(){
>         return number1 + number2;
>     };
> };
> console.log( myFunction() );

Porém, se a função estiver atribuída a uma variável, ele não fará hoisting.
> function myFunction() {
>     var number1 = 1;
>     var number2 = 2
>     return sum();
>     var sum = function sum(){
>         return number1 + number2;
>     };
> };
> console.log( myFunction() ); // retorna um erro

// Vídeo 53
IIFE: função autoexecutável.
> (function() {
>     return 1 + 2;
> })();



/* 
Seção 10
*/

// Vídeo 58
Wrapper objects (construtores): criam novos objetos.
Valores primitivos não tem propriedades. Pra isso, usar os construtores para introduzir características de objetos neles.

> var name = new String('Daciuk');
> var age = new Number(30);
> var ninja new Boolean(false);

> name;
>> [String: 'Daciuk'];
> name.valueOf();
>> 'Daciuk';

Conversores (sem o new): convertem o tipo.
> var name = String(30);
> var age = Number('150');
> var ninja = Boolean(0);

// Vídeo 59
typeof: operador unário e retorna o tipo desse operando. Somente pra valores primitivos.

> typeof undefined; // 'undefined'
> typeof function() {}; // 'function'
> typeof true; // 'boolean'
> typeof 10; // 'number'
> typeof NaN; // 'number'
> typeof 'JS Ninja' // 'string'
Qualquer outro object que não seja function são object
> typeof {}; // 'object'
> typeof []; // 'object'
> typeof null; // 'object'

Pra testar null, usar:
> var num === null

