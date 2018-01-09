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