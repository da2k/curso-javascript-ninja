/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ null, 0.5, 1.5, 'Mambucaba', 'Jurubaíba' ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunc( arr ) {
    return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// console.log( myFunc( arr )[2] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getArtists( arr, key ) {
    return arr[key];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var artists = [ 'Arctic Monkeys', 'The Temper Trap', 'The Catfish And The Bottleman', 'Dennys Lloyd', 'Twoo Feet' ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for ( $i = 0; $i < artists.length; $i++ ) {
    getArtists( artists, $i ); // :D
}


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
function book( bookTitle ) {
    var books = {
        'The Hard Things About The Hard Things' : {
            pages : 120,
            author: 'Ben Horowitz',
            publisher: 'Exay',
        },
        'Sing, Unburied, Sing by Jesmyn Ward' : {
            pages : 180,
            author: 'Jesmyn Ward',
            publisher: 'Reader'
        },
        'They Can’t Kill Us Until They Kill Us' : {
            pages : 98,
            author: 'Hanif Abdurraqib',
            publisher: 'Prinx'
        },
    }

    if ( !!bookTitle ) {
        return books[bookTitle];
    }

    return books;
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
var bookTitle = 'Sing, Unburied, Sing by Jesmyn Ward';
console.log( 'O livro ' + bookTitle + ' tem '+ book( bookTitle ).pages +' páginas.');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookTitle = 'The Hard Things About The Hard Things';
console.log( 'O autor do livro ' + bookTitle + ' é '+ book( bookTitle ).author +'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookTitle = 'They Can’t Kill Us Until They Kill Us';
console.log( 'O livro ' + bookTitle + ' foi publicado pela editora '+ book( bookTitle ).publisher +'.');
