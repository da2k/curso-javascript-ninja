/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var anyway = ['texto', 0, true, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function func(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( func(anyway)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function newFunc(array, i) {
    return array[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayDiff = ['texto', 0, true, null, function() {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( newFunc(arrayDiff, 0) );
console.log( newFunc(arrayDiff, 1) );
console.log( newFunc(arrayDiff, 2) );
console.log( newFunc(arrayDiff, 3) );
console.log( newFunc(arrayDiff, 4) );

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
function book(booksName) {
    var characteristics = {
        'SAPIENS - UMA BREVE HISTÓRIA DA HUMANIDADE': {
            quantidadePaginas: 464,
            autor: 'HARARI, YUVAL NOAH',
            editora: 'L&PM EDITORES'
        },
        'POR QUE FAZEMOS O QUE FAZEMOS?': {
            quantidadePaginas: 176,
            autor: 'CORTELLA, MARIO SERGIO',
            editora: 'PLANETA DO BRASIL'
        },
        'ORIGEM': {
            quantidadePaginas: 432,
            autor: 'BROWN, DAN',
            editora: 'ARQUEIRO'
        }
    };

    return booksName ? characteristics[booksName] : characteristics;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );
var bookName = 'POR QUE FAZEMOS O QUE FAZEMOS?';

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!' );
// O livro ORIGEM tem 432 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro ' + bookName + ' é ' + book(bookName).autor + '.' );
// O autor do livro ORIGEM é BROWN, DAN.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.' );
// O livro ORIGEM foi publicado pela editora ARQUEIRO.