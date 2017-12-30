/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var data = [
    100,
    10.1,
    'test',
    false,
    null
];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getParameter(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getParameter(data)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
var getValueByIndex = function(arr, num) {
    return arr[num];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArray = [
    20.1,
    200,
    true,
    'test',
    undefined
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(getValueByIndex(newArray, 0));
console.log(getValueByIndex(newArray, 1));
console.log(getValueByIndex(newArray, 2));
console.log(getValueByIndex(newArray, 3));
console.log(getValueByIndex(newArray, 4));

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
function book(name) {
    var books = {
        'First Book': {
            quantidadePaginas: 100,
            autor: 'Author One',
            editora: 'Editora One'
        },
        'Second Book': {
            quantidadePaginas: 200,
            autor: 'Author Two',
            editora: 'Editora Two'
        },
        'Third Book': {
            quantidadePaginas: 300,
            autor: 'Author Three',
            editora: 'Editora Three'
        }
    };

    return !name ? books : books[name];
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
var bookName = 'First Book';
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
bookName = 'Second Book';
console.log('O autor do livro ' + bookName + ' é ' + book(bookName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
bookName = 'Third Book';
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.');
