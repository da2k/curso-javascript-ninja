/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myArray = [ 10 , 'String' , true , {a : 'Letra A'} , function(){} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

var myFunction = function ( value ) {

    return value;

};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log( myFunction( myArray )[ 1 ] );


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

var myFunctionTwo = function ( value , index ){

    return value[ index ];

};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myArrayTwo = [ 9.5, null , function( x , y ){ return x + y } , true , 'Jonathan' ];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log( myFunctionTwo( myArrayTwo , 0 ) );
console.log( myFunctionTwo( myArrayTwo , 1 ) );
console.log( myFunctionTwo( myArrayTwo , 2 ) );
console.log( myFunctionTwo( myArrayTwo , 3 ) );
console.log( myFunctionTwo( myArrayTwo , 4 ) );


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

var book = function ( nameBook ){

    var books = {
        'JavaScript: O Guia Definitivo' : {

            quantidadePaginas : 1080,
            autor : 'David Flanagan',
            editora : 'Bookman'

        },
        'Segredos do Ninja Javascript' : {

            quantidadePaginas : 488,
            autor : 'John Resing',
            editora : 'Novatec'

        },
        'JavaScript Patterns' : {

            quantidadePaginas : 236,
            autor : 'Stoyan Stefanov',
            editora : 'O\'Reilly'

        }
    };


   return !nameBook ? books : books[ nameBook ];

/*     if( !nameBook ) {
        return books
    }
   
    return books[ nameBook ]; */


};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log( 'O livro JavaScript: O Guia Definitivo tem ' + book('JavaScript: O Guia Definitivo').quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log( 'O autor do livro Segredos do Ninja Javascript é ' + book('Segredos do Ninja Javascript').autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log( 'O livro JavaScript Patterns foi publicado pela editora ' + book('JavaScript Patterns').editora + '.' );
