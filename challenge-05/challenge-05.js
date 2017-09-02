/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [98, 'Lucas', '05.10.18', true, 20.00, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(array) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function getIndexFromArray(array, number) {
    return array[number];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = ['Rock', false, 53, [null, 8, 'PR', [5, 9, 18]], { language: 'JS' }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(getIndexFromArray(array, 0));
console.log(getIndexFromArray(array, 1));
console.log(getIndexFromArray(array, 2));
console.log(getIndexFromArray(array, 3));
console.log(getIndexFromArray(array, 4));

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

function book(bookName) {
    var library = {
        'Harry Potter': {
            quantidadePaginas: 223,
            autor: 'J.K. Rowling',
            editora: 'Rocco'
        },
        'Percy Jackson': {
            quantidadePaginas: 385,
            autor: 'Rick Riordan',
            editora: 'Intrínseca'
        },
        'Senhor dos Aneis': {
            quantidadePaginas: 1212,
            autor: 'J. R. R. Tolkien',
            editora: 'Martins Fontes'
        }        
    }

    return !bookName ? library : library[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Harry Potter';
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

bookName = 'Senhor dos Aneis';
console.log('O autor do livro ' + bookName + ' é ' + book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

bookName = 'Percy Jackson';
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.');