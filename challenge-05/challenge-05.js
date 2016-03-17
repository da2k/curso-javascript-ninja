/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['laranja', 'uva', 'pera', 'abacaxi', 'limão'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

// console.log(myFunction(arr[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function anotherFunction( arr, ind ) {
    return arr[ ind ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArr = [true, 'string', { name: 'joao' }, function teste() {}, [1, 2, 3] ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

// console.log(anotherFunction(myArr, 0));
// console.log(anotherFunction(myArr, 1));
// console.log(anotherFunction(myArr, 2));
// console.log(anotherFunction(myArr, 3));
// console.log(anotherFunction(myArr, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro.

Dentro dessa função, declare uma variável que recebe um objeto com as
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

function books(bookName) {
    var allBooks = {
        'JavaScript Remoto': {
            quantidadePaginas: 488,
            autor: 'John Resig & Bibeault',
            editora: 'Novatec'
        },
        'Padrões JavaScript': {
            quantidadePaginas: 220,
            autor: 'Stefanov',
            editora: 'O`Reilly'
        },
        'JavaScript O guia definitivo': {
            quantidadePaginas: 1062,
            autor: 'Flanagan',
            editora: 'O`Reilly'
        }
    };

    return !bookName ? allBooks : allBooks[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(books());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var bookName = 'Padrões JavaScript'
var book = books(bookName);

console.log( 'O livro [' + bookName + '] tem ' + book.quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro [' + bookName + '] é ' + book.autor);


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro [' + bookName + '] foi publicado pela editora: ' + book.editora);

