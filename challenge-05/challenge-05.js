/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

let arrayNumeros = ['Glaucia', 'Engineer', 34, true, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

const arrayParametros = function(array) {
    return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(arrayParametros(arrayNumeros)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
const funcaoParametro = function(arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

let array2 = ['JavaScript', 34.3, true, [1, 2, 'Glaucia'], { b: 5 }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(funcaoParametro(array2, 0));
console.log(funcaoParametro(array2, 1));
console.log(funcaoParametro(array2, 2));
console.log(funcaoParametro(array2, 3));
console.log(funcaoParametro(array2, 4));

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
function book (bookName) {
    let allBooks = {
        'Eloquent JavaScript': {
            quantidadePaginas: 289,
            autor: 'Marijn Haverbeke',
            editora: 'No Startch Press'
        },
        'JavaScript: O Guia Definitivo': {
            quantidadePaginas: 708,
            autor: 'David Flanagon',
            editora: 'O Reilly Media'
        },
        'JavaScript: The Good Parts: The Good Parts': {
            quantidadePaginas: 239,
            autor: 'Douglas Crockford',
            editora: 'Yahoo Press'
        }
    };

    return !bookName ? allBooks : allBooks[bookName]
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

let bookName = 'Eloquent JavaScript';
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

let bookName2 = 'Eloquent JavaScript';
console.log('O autor do livro ' + bookName2 + ' é ' + book(bookName2).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

let bookName3 = 'JavaScript: The Good Parts: The Good Parts';
console.log('O livro ' + bookName3 + ' foi publicado pela editora ' + book(bookName3).editora + '.');
