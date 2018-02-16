/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = ['Christian', true, 1.7, undefined, ['a', 'b', 3]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(myArr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnSpecificIndex(arr, num) {
    return arr[num];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myNewArr = ['a', 2, false, null, { color: 'black' }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnSpecificIndex(myNewArr, 0));
console.log(returnSpecificIndex(myNewArr, 1));
console.log(returnSpecificIndex(myNewArr, 2));
console.log(returnSpecificIndex(myNewArr, 3));
console.log(returnSpecificIndex(myNewArr, 4));

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
            quantidadeDePaginas: 380,
            autor: 'J. K. Rolling',
            editora: 'Rocco'
        },
        'Percy Jackson': {
            quantidadeDePaginas: 343,
            autor: 'Rick Riordan',
            editora: 'Intrínseca'
        },
        'Jogos Vorazes': {
            quantidadeDePaginas: 320,
            autor: 'Suzanne Collins',
            editora: 'Rocco'
        }
    }

    return !bookName ? library : library[ bookName ];
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
var book = 'Harry Potter';

console.log('O livro ' + book + ' tem ' + book(book).quantidadeDePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
book = 'Percy Jackson';
console.log('O autor do livro ' + book + ' é ' + book(book).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
book = 'Jogos Vorazes';
console.log('O livro ' + book + ' foi publicado pela editora ' + book(book).editora + '.');
