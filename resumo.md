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

!! Diferença entre null e undefined:
undefined aparece quando uma variável é declarada, porém não há um valor ainda. JS automaticamente determina as variáveis como undefined.
null é um valor por si só. Pode ser a representação de um valor nulo ou sem valor. JS nunca determina um valor como nulo, isso tem que ser feito pelo programador.

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

Referência:
https://www.codecademy.com/en/forum_questions/51392b8a3bd5292a360000eb

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
> +'3' // retorna 3
> +'fernando' // retorna NaN (not a number)
> '3'  + 3 // retorna '33' (concatena)

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
>   return ( x +=1, x ); // faz a incrementação e em seguida retorna x (que é x++)
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
Nesse caso, a variável deveria ser criada antes de sua chamada para não retornar undefined.

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



/* 
Seção 11
*/

// Vídeo 65
Laços/loops: do while. A primeira instrução sempre é feita, independente se a condição é cumprida.
> var counter = 1;
> do {
>    console.log( counter++ );
> } while( counter < 10 );

For/in: percorre as propriedades de um objeto ou verifica se há propriedade dentro do objeto.
> var car = {
>     brand: 'VW',
>     model: 'Gol',
>     year: 2013
> };
> for ( var prop in car ) {
>     console.log( prop ); // retorna 'brand, model, year'
> }
> for ( var prop in car ) {
>     console.log( car[prop] ); // retorna 'VW, Gol, 2013'
> }

> console.log( 'brand' in car ); // retorna 'true'


// Vídeo 66
Saltos: return, por exemplo pode ser usado em qualquer lugar na função. Ele pula instruções depois do return, se certa condição é encontrada.
Return, break.
Continue, por sua vez, dá continuidade, ignorando o resto da expressão.



/* 
Seção 12
*/

// Vídeo 70
Objetos: são mutáveis
> var obj = {
>     prop1: 'prop1',
>     prop2: 'prop2'
> }
> obj.prop1 = 'propriedade 1'; // obj = { prop1: 'propriedade 1', prop2: 'prop2' }
> delete obj.prop1 // obj = { prop2: 'prop2' }
> obj.prop1 = 'prop1' // obj = { prop2: 'prop2', prop1: 'prop1' }

São manipulados por referência
> var objCopy = obj
> objCopy === obj // true
> objCopy.prop1 = 'propriedade do objeto copy'
> objCopy // { prop2: 'prop2', prop1: 'propriedade do objeto copy' }
> obj // { prop2: 'prop2', prop1: 'propriedade do objeto copy' }
objCopy tem como referência o obj, ou seja, toda mudança feita em um é feito no outro.

Criando objetos:
* Literais; // var obj = {}
* Como construtor (new); // var newObj = new Object();
* Object.create(); // herda propriedades de um objeto


// Vídeo 71
> var obj2 = Object.create(obj);
obj2 herda propriedades do Object.prototype
Se algum elemento é modificado no obj2, não é modificado no obj. Porém, se há alguma propriedade modificada no obj, obj2 é atualizado de acordo.
> obj.toString() // '[object Object]'
> obj.hasOwnProperty('x'); // true
> obj2.hasOwnProperty('y') // false, obj2 não é dele, é herdado do obj


// Vídeo 72
Métodos do objeto
Object.keys(obj): pega as propriedades do objeto
> Object.keys(obj); // [ 'x', 'y' ]
> Object.keys(obj).length; // 2

obj.isPrototypeOf(obj2): retorna uma booleana, pra saber se o objeto em questão é pai de outro (parâmetro)
> obj.isPrototypeOf(obj2); // true
> obj2.isPrototypeOf(obj); // false, obj que é pai do obj2

JSON.stringify(obj): transforma objeto em string
JSON.parse(str): transforma string em objeto
> JSON.stringify(obj); // '{"x":1, "y":2}'
> JSON.parse(obj); // { x: 1, y: 2 }

Arrays - adicionar e remover itens
> var arr = [];
> arr[12] = 'doze';
// [ , , , , , , , , , , , 'doze' ]
> var outro = arr.pop(); // retorna e retira o último elemento 
// [ , , , , , , , , , , , ]
> outro
// 'doze'


// Vídeo 73
Array: join(): junta elementos de um array em uma única string.
> var arr = [ 'arroz', 'feijao', 'macarrao' ];
> arr.join();
// arroz feijao macarrao
> arr.join(', ');
// arroz, feijao, macarrao

reverse(): inverte a ordem dos elementos do array. Ele modifica o array.
> arr.reverse();
// [ 'macarrao', 'feijao', 'arroz' ]

sort(): ordena em ordem alfabética. Modifica o array principal.
> arr.sort();
// [ 'arroz', 'feijao', 'macarrao' ]



/* 
Seção 13
*/

// Vídeo 76
toString(): transforma os itens do array em string (junta todos os elementos, separados por uma vírgula);
concat(): adiciona um elemento ao array, porém não modifica o objeto original. Junta todos em uma array só.
unshift(): adiciona um elemento no começo do array.
shift(): remove o primeiro elemento do array.


//Vídeo 77
slice( x, y ): retorna um intervalo do array. Se usado número negativo, ele pega o número total do array e subtrai por esse número e retorna a partir dele.
splice( x, y ): retira itens e modifica o array principal. Se usado um único parâmetro, ele retorna os números depois desse índice. O array principal fica com os elementos restantes.
splice( x, y, z ): x - onde vai começar a inserção dos novos elementos, y - se algum deles vai ser removido, z - elemento a ser inserido.

//Vídeo 78
forEach(): 
> var arr = [ 1, 2, 3, 4, 5, 6, 7 ];
> arr.forEach( function( item, index, array ) {
    console.log( item, index, array );
});

every(): passa por todos os elementos do array, testando algum tipo de verificação e retorna true ou false. Se todos forem verdeiros, ele retorna true.
> var every = arr.every(function(item) {
>    console.log(item);
>    return item < 5;
> });

some(): passa por todos os elementos do array, testando algum tipo de verificação e retorna true ou false. Se pelo menos um for verdadeiro, ele retorna true.
var some = arr.some(function(item) {
    return item % 2 === 0;
});

//Vídeo 79
map(): varre todo o array, modificando conforme uma certa lógica, não modificando o array original.
> var map = arr.map(function(item, index, array) {
>     return item + 1;
> });
> console.log( arr, map );

filter(): ele filtra de acordo com alguma condição.
var filter = arr. filter(function(item){
    return item > 2;
});




/* 
Seção 14
*/

//Vídeo 83
reduce(): varre todo o array e faz uma ação pré-determinada em cada etapa.
var arr = [ 1, 2, 3, 4, 5 ];
arr.reduce(function( acumulado, atual, index, array ) {
    return acumulado + atual;
});
Acumulado é o valor somado na etapa anterior.

reduceRight(): faz a mesma coisa do reduce(), porém da direita pra esquerda.


//Vídeo 84
indexOf(): procura o valor dentro de um array e retorna o índice desse item. Se não houver o item, ele retorna -1.
O segundo parâmetro determina a partir de qual índice ele deve procurar.
console.log( arr.indexOf( 3, 1 ) ); // retorna 2

lastIndexOf(): faz a mesma coisa que o indexOf(), porém ele começa a verificar de trás pra frente.

isArray(): um método que retorna true ou false, verificando se o objeto é um array ou não.



/* 
Seção 15
*/

//Vídeo 89
JS no Browser
> <script src="main.js"> </script>
Cuidado com as variáveis globais! Usar IIFE (function(){}());
this: chama o objeto principal, podendo ser um objeto mesmo ou a window.
>    var myObject = {
>        myProperty: 1,
>        init: function init(){
>            return this;
>            // aponta para o objeto principal
>        }
>    };
>    console.log('myObject(): ', myObject.init());
>
>    function myFunction() {
>        return this;
>        // aponta para o objeto do navegador, window
>    }
>    console.log('myFunction(): ', myFunction());

//Vídeo 90
arguments: variável que retorna os argumentos da sua função em forma de array. 
Não usar 'arguments' como nome de variável ou argumento.



/* 
Seção 16
*/

//Vídeo 93
'use strict': não permite a criação de uma variável sem o var. Usar em toda função IIFE para não entrar em conflito com outras funções de terceiros.


//Vídeo 94
'use strict': não permite o uso de with.
with: encurta o caminho de um objeto.
>    var obj = {
>        prop1: {
>            prop2: {
>                prop3: {
>                    prop31: 'prop31',
>                    prop32: 'prop32',
>                    prop33: 'prop33'
>                }
>            }
>        }
>    };
>
>    with ( obj.prop1.prop2.prop3 ) {
>        console.log( prop31, prop32, prop3 );
>    }


//Vídeo 95
'use strict': se delete não pode ser executado, ele retorna SyntaxError. Delete é só permitido se deletar propriedades do objeto.
Propriedades tem que ter nomes diferentes. Argumento de funções tem que ter nomes diferentes.


//Vídeo 96
Objeto String
.length: conta a quantidade de caracteres do string.
.charAt(n): seleciona o caracter do índice indicado.
.concat('string', var): adiciona à variável principal os parâmetros.
.indexOf('string'), lastIndexOf('string'): faz o movimento contrário do charAt. É indicado a string e ele retorna o índice, número.
.replace('string'): substitui um trecho de uma string por outra. Faz o replace somente do primeiro caracter, se houver mais de 1.
.slice(start, end): são indicados os números para "recortar" a string principal.
.split('string'): é indicado uma string onde será seccionado a string, para a criação de um array. O parâmetro é removido do resultado.
**Para realizar o replace de mais de uma string repetida, usar o var.split('string').join('string2'). Por exemplo, quero substituir todos os 'n' de fernando por 'z'. Usar var.split('n').join('z')

//Vídeo 97
.substring(n, n): faz a mesma coisa que o slice, com a diferença que se o primeiro número for maior que o segundo, ele retorna a string ao contrário.
.toLowerCase(): retorna a string em caixa baixa.
.toUpperCase(): returna a string em caixa alta.



/* 
Seção 17
*/
//Vídeo 101
Expressões regulares (regex): servem para manipular strings. É um tipo primitivo de Javascript.
Ferramenta para teste de regex: https://regex101.com/
Objeto RegExp()
> var regex = /m/;
> var texto = "Famous Fantastic Mysteries was an American science fiction and fantasy pulp magazine published from 1939 to 1953, edited by Mary Gnaedinger. It was launched by the Munsey Company to reprint stories from their magazines, including Argosy. Frequently reprinted authors included George Allan England, A. Merritt, and Austin Hall. The artwork, including some of the best work of Virgil Finlay and Lawrence Stevens, contributed to the success of the magazine."
> texto.match(/m/g); // retorna ['m','m','m','m'];


//Vídeo 102
Flags:
g: global;
i: ignore case;

Termos
\w: caracteres alfanuméricos e _
\d: números (digits)
> texto.match(/\w/g); // retorna um array com todos os caracteres do texto separados
> texto.match(/Fernando/); // retorna null
> texto.match(/\d/); // retorna o primeiro numero do texto;
> texto.match(/\d\d/); // retorna os dois primeiros numeros do texto

Classe de caracteres (listas)
Ou: |
Lista de caracteres: [abcd] - vai achar todos os a, b, c, d em separado
> texto.match(de|da); // retorna todos os 'de' e 'da'
> texto.match([abcd]); // retorna todos os a, b, c, d
[1-9] // seleciona todos os numeros de 1 a 9
[a-z] // seleciona todas as letras do alfabeto
[A-Za-z0-9] // seleciona todos os alfanumericos tirando espaços e caracteres especiais
Agrupamento de caracteres: ()


//Vídeo 103
Os intervalos são baseados na tabela unicode. Se usado o [A-z], ele pegaria todos os caracteres alfanúmericos, inclusive [, \, ], ^, _, ´, porque eles estão na tabela unicode.
Referência: http://www.ftrain.com/unicode/
.replace();
> texto.replace(/de/g, 'DE'); // modifica todos os 'de' por 'DE'
$1: captura o próprio elemento
> texto.replace(/de/g, '$1$1'); // modifica todos os 'de' por 'dede'
> texto.replace(/(d)(e)/g, '--$2' ) // modifica todos os 'de' por '--e'. O $2 seleciona o segundo item
Também funciona com funções
> texto.replace(/(d)(e)/g, function(capturaTotal, d, e) {
>    return (d + e).toUpperCase;
> });
> texto.replace(/(\w)(\w)/g, function(capturaTotal, letra1, letra2) {
>    return letra1.toUpperCase() + letra2.toLowerCase(); // returna letras intercaladas em minusculo e maiusculo
> });



/* 
Seção 18
*/
//Vídeo 107
\s: espaço em branco
\n: quebra de linha
\t: espaçamento tab
.: qualquer caracter, exceto quebra de linha


//Vídeo 108
Negação
[^abc]: o match é feito com qualquer item, menos com os da lista, ou seja a, b, c.
\W: qualquer caractere, menos os alfanuméricos
\D: qualquer caractere, menos dígitos
\S: qualquer caractere, menos os espaços em branco

Repetidores
Intervalo
{n,m}: intem anterior ao menos n vezes, e no máximo m vezes.
Por exemplo
\d{2,4} seleciona dígitos com 2, 3 ou 4 números seguidos.
11, 111, 1111 são selecionados, ao passo que 1, 11111 não são


//Vídeo 109
Intervalo aberto
\d{n,}: captura um dígito com no mínimo n números
\d{n}: captura dígito com o número exato de n

Opcional
?: o item anterior é uma adição opcional.
Exemplo:
\s\d? seleciona os espaços em branco, inclusive aqueles que possuem um dígito em seguida. Ou seja, os caracteres ' 3' serão selecionados.
\w+: uma ou mais ocorrências
\w*: zero ou mais ocorrências

Para filtrar URLs válias:
http://wwww.google.com
regex: / https?:\/\/\w+[.\w]+ /

teste@gmail.com
Para filtrar email:
regex: / [\w+]+@\w+\.\w+([.\w]+)? /



/* 
Seção 19
*/
//Vídeo 113
^: início da string. Captura somente se houver match no começo da string.
$: fim de string. Uso: >$ (caracter a ser testado tem que vir antes do $)
?: depois de um repetidor, + por exemplo, ele faz uma captura não gulosa. Captura não gulosa: captura o mínimo de caracteres que estão dentro dessa condição.
(?:) : faz a seleção mas não agrupa os caracteres dentro da seleção. Por exemplo: ju(n|l)ho seleciona junho, julho, n, l. Para não selecionar n nem o l, utilizamos a expressão: ju(?:n|lho).
\1, \2: referência dentro da regex. Faz uma referência de agrupamento dentro da própria regex. Por exemplo, <(\w+)>.+?<\/(\1)> seleciona todas as tags iguais, ou seja <h1> teste </h1> (\1 repete a primeira captura).

flags
m: captura caracteres em outras linhas. Funcioa com os ^ e $.


//Vídeo 114
.match(regexp): retorna tudo que combina com os caracteres especificados.
.replace(regexp, string): retorna a string com a substituição de caracteres.
.split(regexp, string): converte a string em um array e divide a string de acordo com o caracter especificado.
.search(regexp): retorna o índice do caracter especificado. Funciona que nem o indexOf(). Flag global não funciona.


//Vídeo 115
Construtor RegExp()
> var regex = new RegExp( 'nando' );
> 'fernando'.match ( regex );
Na RegExp, a barra é usada pra considerar o caracter como literal. Para usar como global, usa-se a dupla barra. Por exemplo:
> regex = new RegExp( '\\d' ); // captura digitos. Funciona como se fosse /\d/.

Métodos de RegExp
.test('string'): verifica se há o conjunto de caracter. Retorna uma boolean.
> /\d/.test(name) // retorna true;
> /z/.test(name) // retona false;

.exec('string'): executa o search e guarda os resultados em um array.
> var regex = /\d/g;
> var name = 'fer123nando';
> var result;
> while ( result = regex.exec(name) !== null ) {
>    console.log(result); //retorna true 3 vezes;
> }

Caracteres especiais:
\t: tab
\n: quebra de linha
Para usar aspas simples em um string: usar barra para escapar
'Julio\'s bar'



/* 
Seção 20
*/
//Vídeo 119
if de uma linha só: não precisa usar {}
>	(function(win) {
>	  if( win === window )
>	    console.log( 'win é uma referência local à window' );
>	})(window);
Somente a primeira linha depois do if é considerada.

Métodos do window
window.alert( 'string' ): aparece um popup de alerta no navegador. Não é muito mais usado.
> (function(win) {
>     'use strict';
>     window.alert( 'Mensagem' ); // também pode ser usado sem o 'window.'
> })(window);
window.prompt( 'string' ): recebe input do usuário.


//Vídeo 120
.prompt, exemplo:
> (function(win){
>    'use strict';
>     var name = prompt( 'Qual o seu nome?' );
>     if( name )
>         console.log( 'Olá', name );
>     else
>         console.log( 'não respondeu :(' );
> })(window);

window.confirm( 'string' ): retorna true ou false.

window.document: referente ao DOM (Document Object Model), ao HTML.
> (function(win, doc){
>    'use strict';
>    console.log( doc.getElementById( 'my-link' ) ); // retorna o elemento cujo id é my-link
>    console.log( doc.getElementsByClassName( 'my-link' ) ); // retorna elementos cujas classes são my-link. Retorna um HTML collection
>    console.log( doc.getElementsByTagName( 'a' ) ); // retorna elementos de tags a. Retorna um HTML collection
> })(window, document);


//Vídeo 121
getElementByTagName(), getElementByName(), querySelector(), querySelectorAll()

> (function(win, doc){
>    'use strict';
>    var $inputs = doc.getElementsByTagName( 'input' ); // esse valor é dinâmico
>    console.log( doc.getElementByName( 'username' ) ); // retorna o elemento cujo name (atributo) é username
>
>    $input = doc.querySelector( 'input' ); // seleciona a partir de um seletor CSS. Esse valor não é dinâmico
>    $input = doc.querySelector( '[type="text"]' );
>    $input = doc.querySelector( '.my-link' ); // seleciona o primeiro elemento de class='my-link'
>    $input = doc.querySelectorAll( '.my-link' ); // seleciona elementos de class='my-link'
> })(window, document);


//Vídeo 122
Formulários
> (function(win, doc){
>    'use strict';
>
>    var $inputUsername = doc.querySelector( '#username' );
>    var $inputPassword = doc.querySelector( '#password' );
>    $inputUsername.value = 'Fernando Daciuk'; // muda o atribute value dos elementos selecionados
>    $inputPassword.value = 'minhasenha'; 
>
> })(window, document);

Introdução a eventos
.addEventListener('click')
Formulários
> (function(win, doc){
>    'use strict';
>
>    var $inputUsername = doc.querySelector( '#username' );
>    var $inputPassword = doc.querySelector( '#password' );
>    var $button = doc.querySelector( '#button' );
>
>    $button.addEventListener( 'click', function(event) {
>       event.preventDefault(); // previne a ação padrão do clique nesse elemento
>       console.log( 'Click no botão' );    
> }, false );
>
>    $inputUsername.addEventListener( 'click', function(event) {
>       alert('Clique no input');    
> }, false );
> })(window, document);



/* 
Seção 21
*/
//Vídeo 126
Sync e Async: sync efetua funções em sequência e bloqueia interação com o site até que todo o script seja carregado.
Event listener é um tipo de função async, pois é acionado apenas quando um determinado evento é acionado.


//Vídeo 127
setTimeout( function() {}, 1000): efetua determinada função depois de um tempo pré-estabelecido.
setInterval( function() {}, 1000 ): efetua determinada função a cada x tempo.
Para criar uma função com um loop não infinito:

> (function(win, doc) {
>     'use strict';
> 
>     var counter = 0;
>     function timer() {
>         console.log( 'timer', counter++ );
>         if ( counter > 10 )
>             return;
>         setTimeout( timer, 1000 );
>     }
>     timer();
> 
> })(window, document);


//Vídeo 128
setInterval vs setTimeout: a função do Timeout somente é executada depois de executar funções anteiores. Sua função é colocada na fila de eventos.
A função do Interval executa nos intervalos independente de existir outra função em conjunto.

Funções de cancelamento de Timeout e Interval:
clearTimeout(id)
clearInterval(id)


/* 
Seção 22
*/
//Vídeo 131
Propriedades e métodos de funções
.name: retorna o nome da função
.lenght: retorna o número de parâmetros que a função recebe
.toString: converte toda a função em string
.call(): chama/invoca a função
.call(this): 
> function myFunction( a, b, c, d ) {
>     console.log( this.lastName );
> }
> 
> var obj = {
>     lastName: 'Daciuk';
> }
> 
> myFunction.call(); // retorna undefined
> myFunction.call(obj); // retorna Daciuk;


//Vídeo 132
call( arg1, arg2,... ):
apply(): funciona da mesma forma que o call, porém os argumentos ficam dentro de um array
apply( this, [arg1, arg2, ..., argN] )
> function myFunction( a, b, c, d ) {
>     console.log( this.lastName, a, b, c, d );
> }
> 
> var obj = {
>     lastName: 'Daciuk';
> }
> 
> myFunction.call(obj, 'a', 'b', 'c', 'd'); // retorna Daciuk a b c d;
> myFunction.apply(obj, ['a', 'b', 'c', 'd']); // retorna Daciuk a b c d;


//Vídeo 133
.prototype: estende um construtor
> (function(){
>     'use strict';
> 
>     function MyFunction( name, lastName ) { //construtores possuem letra maiúscula
>         this.name = name;
>         this.lastName = lastName;
>     }
> 
>     MyFunction.prototype.fullname = function() {
>         return this.name + ' ' + this.lastName;
>     }
> 
>     var fernando = new MyFunction ( 'Fernando', 'Daciuk' );
> 
>      MyFunction.prototype.age = 30;
> 
>     console.log( fernando.fullName() ); // retorna Fernando Daciuk
>     console.log( fernando.age ); // retorna 30. Se existisse no construtor original, o do valor do construtor se sobrepoe
> })();


//Vídeo 134
Array.prototype: pode receber outros tipos de métodos.
Array-like: elementos que se comportam como arrays, mas não o são. arguments, elementos de querySelectorAll são exemplos de array like
> (function(){
>     'use strict';
> 
>     function myFunction() {
>         Array.prototype.forEach.call( arguments, function(item, index) {
>             console.log( item );
>         });
>     }
>     myFunction( 1, 2, 3, 4, 5 ); // retorna cada número em uma linha
> })();



/* 
Seção 23
*/
//Vídeo 137
Debug 1
Breakpoint: no Developer Tools, na aba Sources, ao clicar no número da linha se cria um Breakpoint. Nesse ponto, o código para de rodar.
Scope: verifica todas as variáveis, locais e globais chamadas até o momento


//Vídeo 138
Debug 2
Breakpoint: se selecionado uma linha de código dentro de uma função que se repete, é mostrado cada valor atualizado das variáveis da função.
Também se pode acessar variáveis na parada do breakpoint.


//Vídeo 139
Debug 3
Seta com bolinhas: vai para a próxima chamada de função ou a anterior.
console.log: usar para saber se cada função está funcionando ou sendo chamada.
debugger; : específico do navegador. ele cria um breakpoint manualmente no código. Funciona no Chrome


//Vídeo 140
Debug 4
console.time e console.timeEnd: calcula o tempo de início e final de execução de determinadas funções
console.table: mostra em forma de tabela os itens de um array



/* 
Seção 25
*/
//Vídeo 150
script inline: são scripts que são chamados dentro de uma tag HTML. Não é uma boa prática.
> <a href="javascript:boom()">Boom!</a>
void (0) retorna sempre undefined e pode ser usada como 'preventDefault'.

Eventos
Referência de eventos:
https://developer.mozilla.org/en-US/docs/Web/Events

evento inline: não é uma boa prática utilizá-los.
> <a href="javascript:" onclick="boom()">Boom!</a>
ele faz o evento do evento inline depois direciona para o href


//Vídeo 151
false nos eventos de clique

no HTML:
<div data-js="div">
  <a href="#" data-js="link">Link no <span data-js="span">span</span></a>
</div>

> function on(element, event, callback){
>   document.querySelector(element)
>     .addEventListener(event, callback, false); //false
> }
> 
> on('[data-js]="link"', 'click', function(event) {
>   event.preventDefault();
>   alert('clicou no a');
> });
> 
> on('[data-js]="div"', 'click', function() {
>   alert('clicou na div');
> });
> 
> on('[data-js]="span"', 'click', function() {
>   alert('clicou no span');
> });

>> ação do usuário: clicou no span. Se false:
clicou no span > clicou no a > clicou na div
Os eventos são acionados do elemento clicado para fora (child to parent)

>> ação do usuário: clicou no span. Se true:
clicou na div > clicou no a > clicou no span
Os eventos são acionados no elemento pai para dentro (parent to child)


//Vídeo 152
eventos são cumulativos. Pode-se manipular eventos usando uma função. Lembrar que funções em javascript são lidadas como objetos.
novos eventos:
'input': quando o usuário muda algo no form
'keyup': quando o usuário solta uma tecla
'keydown': uma tecla é pressionada
'change': em uma tag "select", o valor é modificado



/* 
Seção 26
*/
//Vídeo 153
API DOM: cria uma árvore de hierarquia da página do navegador. Ele cria nós que podem ser manipulados separadamentes. 
Percorrer elementos.
Eles contam quebras de linha:
.parentNode: traz os nós (NodeList) parent
.childNode: traz os nós (NodeList) child.
.firstChild e .lastChild: trás o primeiro e últimos filhos.
.nextSibling e .previousSibling: mostra o próximo irmão e o anterior. 


//Vídeo 154
.nodeType: retorna um número de acordo com o tipo de nó.
Document: 9
Element: 1
Text: 3
Comments: 8
documentFragment: 11

.nodeValue: retorna o conteúdo textual do nó.
.nodeName: o nome do nó. Em elementos HTML, retorna o nome da tag.


//Vídeo 155
.child: HTMLCollection. Apesar de não ser padronizada, é bastante utilizada. Retorna os elementos filhos de um nó.
.firstElementChild, .lastElementChild, .nextElementSibling, .previousElementSibling: retorna o filho elemento. Retorna toda a tag.
.childElementCount: retorna um número de child de um nó. Funciona da mesma forma que elemento.length

Métodos
.hasAttribute(name): retorna uma booleana. Verifica se existe um atributo no elemento.
.hasAttributes(): se existir qualquer atributo retorna true.


//Vídeo 156
.appendChild(child): adiciona ou move um elemento dentro de um nó.
.insertBefore(node, beforeWhom): adiciona um elemento. Parâmentros: node: o que inserir; beforeWhom: antes desse elemento.
.cloneNode(boolean): clona um elemento. Recebe como parâmetro uma booleana para definir se o conteúdo desse elemento é clonado ou não.
.hasChildNodes(): retorna uma booleana, verificando se dentro do elemento especificado existe nós filhos.


//Vídeo 157
.removeChild(child): remove um filho especificado dentro do nó.
.replaceChild(new, old): substitui ou remaneja um elemento filho por outro.
document.createTextNode(text): cria um texto dentro do document.
document.createElement(tagName): cria um elemento. Os dois métodos podem ser usados em conjunto. Exemplo:
> var newTextNode = document.createTextNode('Opa!');
> var $newP = document.createElement('p');
> $newP.appendChild(newTextNode);
> $main.appendChild($newP);
// é criado um novo parágrafo com o conteúdo do newTextNode


//Vídeo 158
Atributos
element.id: retorna o id do elemento.
element.className: retorna a classe do elemento.
São getters e setters, ou seja, podemos receber ou atribuir um valor com esses atributos.

.getAttribute(attr): retorna o atributo determinado pelo parâmetro. Retorna sempre string.
.setAttribute(attr, value): atributos podem ser criados e determinados valores para eles.



/* 
Seção 27
*/
//Vídeo 161
DOM Atributos: funciona pra qualquer atributo HTML válido.
element.id, element.className, element.value, element.href, element.title, element.src

Manipular com performance
> document.createDocumentFragment(): melhora a performance, manipulando elementos fora do DOM. Use sempre para adição de elementos no DOM.
>   .parentNode === null
> 
> var fragment = document.createDocumentFragment();
> var childP = document.createElement('p');
> var textChildP = document.createTextNode('Texto da tag P!');
> 
> childP.appendChild(textChildP);
> fragment.appendChild(childP);
> 
> document.body.appendChild(fragment);


//Vídeo 162
Eventos
Ordem dos scripts importa: quando o navegador lê o código, ele para em um script e aciona o que é necessário. Se o elemento chamado não foi carregado ainda, vai ocorrer um erro.

Para evitar esse erro, use o evento:
document = 'DOMContentLoaded'
Isso significa que os elementos internos podem não ter carregados ainda, mas os elementos sim.

Boa prática: colocar script no final do <body>

Para carregar todos os elementos, usar evento:
windows = load


//Vídeo 163
Técnicas Ninja
Copiar array: atribuindo um array a outro, é criado uma referência do primeiro, portanto, não uma cópia
> var arr = [ 1, 2, 3, 4, 5 ];
> var arr2 = arr.slice(); //ele copia o primeiro array

Saber de tipo de dado real: o typeof, para arrays, retorna object. Para saber o tipo real do objeto, utilizamos:
Object.prototype.toString.call(arr); // retorna [object Array]
Object.prototype.toString.call(myFunction); // retorna [object Function]
Object.prototype.toString.call(arguments); // retorna [object Arguments]



/* 
Seção 28
*/
//Vídeo 167
AJAX: asynchronous Javascript and XML
a ação ocorre de maneira paralela, assíncrona. Requisições na mesma URL e traz informações sem fazer o refresh.

windows.XMLHttpRequest()
1. Instanciar objeto:
> var ajax = new XMLHttpRequest(); //não precisa do window. pois é um objeto global;
2. Abrir a conexão:
> ajax.open(<protocol>, <url>) //protocolo http, tipo post, get. Qual URL ele vai buscar essas informações

> var ajax = new XMLHttpRequest();
> ajax.open('GET', '/');
> ajax.send();
Na aba Network do developer tools, ele eparece como Type: xhr (xml http request).


//Vídeo 168
evento onreadystatechange: quando há mudança de estado

ajax.readyState
0: não enviado
1: conexão aberta
2: Headers recebidos //informações básicas sobre o arquivo
3: Carregando o corpo do request
4: Concluído

ajax.status: verifica o status do http (200, 403, 404, 500 etc)

> ajax.addEventListener('onreadystatechange', function(){
>  console.log('Terminou a requisição', ajax.readyState, ajax.status);
> });


//Vídeo 169
Verificando se conexão foi bem sucedida.

ajax.responseText: recebe o conteúdo do objeto ajax como texto
ajax.responseXML: recebe conteúdo do tipo xml

> function isRequestOk() {
>   return ajax.readyState === 4 ajax.status === 200;
> }
> ajax.addEventListener('onreadystatechange', function(){
>   if( isRequestOk() ){
>   var data = JSON.parse(ajax.responseText); // transformar dados JSON pra objetos, para manipulação
>   console.log('Requisição ok', data.message);
> }
> });


//Vídeo 170
Tratamento de erro
throw: cria objeto de erro
> thow new Error('Mensagem de erro');
try | catch: se houver erro, ele não para o código, mas joga para o catch 
> try {
>   throw new Error('Mensagem de erro');
> }
> catch(e) {
>   console.log(e);
> }



/* 
Seção 29
*/
//Vídeo 175
Module pattern: criar código modular para ser usado em outras aplicações.

Colocar dentro de uma função e chamá-la.

> function app(){
>   //código modular
> }
> app();
> //para ser exportado:
>  window.app = app;

No documento de importação:
1. não esquecer de chamar o arquivo .js antes do main.js
2. no script, fazer
> (function(DOM){
>   //código
> })(window.DOM);



/* 
Seção 30
*/
//Vídeo 182
Closure: determinar valor de uma variável através de uma IIFE, para evitar conflitos.
> var counter = 0;
> var increment = (function(){
>   var counter = 0;
>   return function(){
>     return counter++;
>   }
> })();
> 
> function otherFunction() {
>   counter = 150;
> }
> 
> otherFunction(); // isso interfere no resultado do incremento, se não houvesse uma IIFE no var increment.

Manipulando CSS:
element.style.propertie = 'value';
$div.style.width = '100px';
$div.style.backgroundColor = 'black'; //se a propriedade tem um -, trocar para uma letra maiúscula.
ou
$div.setAttribute('style', 'width:100px; position: relative;' );

element.classList: traz a lista de clases de um elemento
contains
$div.classList.contains('blue'); // retorna true ou false
$div.classList.add('red'); // adiciona a classe 'red'
$div.classList.toggle('blue'); // se tiver o blue, ele retira e vice-versa
$div.classList.remove('container'); // remove a classe 'container'



/* 
Seção 31
*/
//Vídeo 183
innerHTML: getter e setter. Pega o conteúdo como string. Diferente do textContent, porque ele insere como texto mesmo, não como elementos HTML.


//Vídeo 184
Problemas de segurança: se aceitar o input do usuário sem tratar, o seu site fica a merce de mal uso, hacker, inserção de scripts e propagandas.
Verificar a entrada do usuário para que não entre scripts tanto no front quanto no back.


//Vídeo 185
insertAdjacentHTML(pos, text-str)
pos: position, onde vai ser inserido seu HTML
beforebegin - afterbegin
beforeend - afterend
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->

exemplo: $form.insertAdjacentHTML('afterbegin', '<h1>Meu Formulário</h1>');

console.dir(): mostra o HTML como objeto, mostrando suas propriedades e métodos.
.outerHTML: representação em string da tag.


//Vídeo 186
devdocs.io: reúne a documentação de várias linguagens

var date = new Date(year, month, day, hour, min, sec, milliseconds);
console.log(date); // retorna a data e horário


//Vídeo 187
Date.now(): não precisa ser instanciado para ser iniciado
vai representar o número de milisegundos que se passaram desde 1º janeiro 1970.
É útil para saber quanto tempo se passou entre uma ação e outra.

date.getDate(); // 0-31 dia do mês
date.getDay(); // 0-6 dia da semana
date.getFullYear(); // 2015 ano com 4 dígitos
date.getYear(); // 115, contagem feita a partir de 1900
date.getHours(); // 0-23 retorna a hora
date.getMilliseconds(); // 0-999 milisegundos
date.getMinutes(); // 0-59
date.getMonth(); // 0-11
date.getSeconds(); // 0-59
date.getTime(); // retorna o tempo em ms desde 1970, como o Date.now()


//Vídeo 188
Math Object
Math.PI: retorna o número pi. Útil para cálculo de circunferência.
Math.abs(x): valor absoluto, positivo de um número.
Math.abs(-10) // retorna 10
Math.ceil(x): arredonda para cima
Math.ceil(10.1) // retorna 11
Math.floor: arredonda para baixo
Math.floor(10.9) // retorna 10
Math.round(x): faz o arredondamento normal
Math.round(10.5) //retorna 11
Math.round(10.4) //retorna 10
Math.sqrt(x): retorna raiz quadrada
Math.cbrt(x): retorna a raiz cúbica
Math.max([x1, x2, xn]): retorna o maior número
Math.min([x1, x2, xn]): retorna o menor número
Math.random(): retorna um número aleatório entre 0 e 1



/* 
Seção 32
*/
//Vídeo 189 - 190
Como funciona o AJAX no lado do servidor?
Fazer uma simulação  com REST API.

> front
> rest-api > index.js, package.json

Para instalar o REST API
npm install -g nodemon
nodemon index.js

/* instalar express */
npm install --save express

rest-api > index.js
> 'use strict';
> 
> var express = require('express'); // ele verifica se existe uma pasta 'express' e um index.js
> var app = express();
> 
> app.get('/', function(request, response){ // resquest (req) são dados que vem do front; response (res) é a resposta do servidor
>  response.send('Home'); //o que é respondido para o cliente. Pode ser código em HTML
> });
> 
> app.get('/user', function(request, response){
>   response.send('User');
> });
> 
> app.listen(3000); //porta que é enviado

front > index.html
> (function(){
>   'use strict';
> 
>   var ajax = new XHttpRequest();
>   ajax.open('GET', 'localhost:3000/user');
>   ajax.send();
> 
>   ajax.addEventListener('readystatechange', function(e) {
>     if( ajax.readyState === 4 && ajax.status === 200 ){
>       console.log(ajax.responseText);
>     }
>   }, false);
> })();


//Vídeo 191
Cors: corrige o erro de portas
npm install --save cors

rest-api > index.js
> 'use strict';
> 
> var express = require('express');
> var cors = require('cors');
> var app = express();
> var users = {
>   joao: {
>     nome: 'João',
>     idade: 30
>   },
>   maria: {
>     nome: 'Maria',
>     idade: 22
>   }
> };
>
> app.use(cors());
> 
> app.get('/', function(req, res){
>  res.send('Home');
> });
> 
> app.get('/user/:username', function(req, res){ // :username é uma variável
>   res.send('req.params.username'); // retorna valores dinâmicos
>   var username = req.params.username;
>   res.json(users[username]);
>   if (users[username]){
>     return res.json(users[username]);  
> }
> res.status(404).json({ error: 'Usuário não encontrado' });
> });
> 
> app.listen(3000); //porta que é enviado


front > index.html
> (function(){
>   'use strict';
> 
>   var ajax = new XHttpRequest();
>   ajax.open('GET', 'http://localhost:3000/user');
>   ajax.send();
> 
>   ajax.addEventListener('readystatechange', function(e) {
>     if( ajax.readyState === 4 && ajax.status === 200 ){
>       console.log(ajax.responseText);
>     }
>   }, false);
> })();


//Vídeo 192
ajax.open('GET', url, async); // não usar o ajax.open('GET', url, false)
Sendo síncrona, ele pode quebrar a sua aplicação

ajax.abort(); // para a requisição

Método POST
ajax.open('POST', url);
ajax.setRequestHeader(
  'Content-Type',
  'application/x-www-form-urlencoded'
);
ajax.send('key1=value1&key2=value2');


//Vídeo 193
rest-api > index.js
> 'use strict';
> 
> var express = require('express');
> var cors = require('cors');
> var bodyParser = require('body-parser');
> var app = express();
> var users = [
>   {
>     username: 'joao',
>     name: 'João',
>     age: 30
>   },
>   {
>     username: 'maria',
>     name: 'Maria',
>     age: 22
>   }
> ];
>
> app.use(bodyParser.urlencoded({ extended: false }));
> app.use(cors());
> 
> app.get('/', function(req, res){
>  res.json({ response: 'Home' });
> });
> 
> app.get('/user/:username', function(req, res){ // :username é uma variável
>   var username = req.params.username;
>   var hasUser = users.some( function(user) {
>   return users.username === username;
> });
>   if ( hasUser ){
>     return res.json( user.filter(function(user){
>   }));  
> }
> res.status(404).json({ error: 'Usuário não encontrado' });
> });
> 
> app.post('/user', function(req, res) {
>   var username = req.body.username;
>   var age = req.body.age;
>   res.json({ username: username, age: age });
> });
> 
> app.listen(3000); //porta que é enviado

>> para parsear dados, é necessário instalar o body parser
npm install --save body-parser


front > index.html
> (function(){
>   'use strict';
> 
>   var ajax = new XHttpRequest();
>   ajax.open('POST', 'http://localhost:3000/user');
>   ajax.setRequestHeader('Content-Type', 'application/x-www-form-url-urlencoded');
>   ajax.send('username=roberto&age=32');
> 
>   ajax.onreadystatechange = function(){
>     if(ajax.readyState === 4) {
>       console.log('Usuário cadastrado!');
>     }
>   }
> })();


//Vídeo 194
Como cadastrar o usuário

rest-api > index.js
> 'use strict';
> 
> var express = require('express');
> var cors = require('cors');
> var bodyParser = require('body-parser');
> var app = express();
> var users = [
>   {
>     username: 'joao',
>     name: 'João',
>     age: 30
>   },
>   {
>     username: 'maria',
>     name: 'Maria',
>     age: 22
>   }
> ];
>
> app.use(bodyParser.urlencoded({ extended: false }));
> app.use(cors());
> 
> app.get('/', function(req, res){
>  res.json({ response: 'Home' });
> });
> 
> app.get('/user/:username', function(req, res){ // :username é uma variável
>   var username = req.params.username;
>   var hasUser = users.some( function(user) {
>   return user.username === username;
> });
>   if ( hasUser ){
>     return res.json( user.filter(function(user){
>        return user.username === username;
>   }));  
> }
> res.status(404).json({ error: 'Usuário não encontrado' });
> });
> 
> app.post('/user', function(req, res) {
>   var username = req.body.username;
>   var age = req.body.age;
>   var user = req.body.user;
>
>   var hasUser = users.some( function(user) {
>     return user.username === username;
>   });
>
>   if( !hasUser ){
>     users.push({
>       username: username,
>       age: age
>     });
>   }
>   return res.json(users);
> });
> 
> app.listen(3000); //porta que é enviado

front > index.html
> (function(){
>   'use strict';
> 
>   var ajax = new XHttpRequest();
>   ajax.open('POST', 'http://localhost:3000/user');
>   ajax.setRequestHeader('Content-Type', 'application/x-www-form-url-urlencoded');
>   ajax.send('username=roberto&user=Roberto&age=32');
> 
>   ajax.onreadystatechange = function(){
>     if(ajax.readyState === 4) {
>       console.log('Usuário cadastrado!');
>     }
>   }
> })();