/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var twilightPrincess = [ 7, 'midna', true, { a: 1 }, undefined ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myfunction(array) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myfunction( twilightPrincess )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2( array, index ){
    return array[index];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var eclipsa = [ 'butterfly', 9, null, [ 1, 2, 3 ], function() {} ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( myFunction2( eclipsa, 0 ) );
console.log( myFunction2( eclipsa, 1 ) );
console.log( myFunction2( eclipsa, 2 ) );
console.log( myFunction2( eclipsa, 3 ) );
console.log( myFunction2( eclipsa, 4 ) );

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
function book( bookName ) {
    var allBooks = {
        'Foreverglow': {
            quantidadePaginas: '172',
            autor: 'Lindsey Stirling',
            editora: 'Till The Light Goes Out'
        },
        'Between Twilight': {
            quantidadePaginas: '305',
            autor: 'Lidsey Stirling',
            editora: 'Artemis'
        },
        'Loves Goes On And On': {
            quantidadePaginas: '212',
            autor: 'Lindsey Stirling & Amy Lee',
            editora: 'Hi-Lo'
        }
    };

    return !bookName ? allBooks : allBooks[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Between Twilight';
console.log( 'O livro ' + bookName + ' tem ' + book( bookName ).quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
bookName =  'Loves Goes On And On';
console.log( 'O autor do livro ' + bookName +  ' é ' + book(bookName).autor + '.' );

/*
Ainda com a função acima, imprima o cnome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
bookName = 'Foreverglow';
console.log( 'O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.' );

