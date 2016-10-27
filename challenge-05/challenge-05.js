/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['Rafael', 'Amora', 10, true, 'Ninja'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(args) {
    return args;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function arrayValue(arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = ['Ventura', 'Panqueca', 27, false, 'Fome'];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
arrayValue(array2, 0);
arrayValue(array2, 1);
arrayValue(array2, 2);
arrayValue(array2, 3);
arrayValue(array2, 4);

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
function book(titulo) {
    var objLivro = {
        'Harry Potter': {
            quantidadePaginas: 300,
            autor: 'J.K. Rowling',
            editora: 'Rocco',
        },
        'Percy Jackson': {
            quantidadePaginas: 200,
            autor: 'Rick Riordan',
            editora: 'Rocco',
        },
        'Wild Cards': {
            quantidadePaginas: 500,
            autor: 'George R.R. Martin',
            editora: 'Alef',
        },
    }

    return !titulo ? objLivro : objLivro[titulo];
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
var tituloLivro = 'Wild Cards'
console.log('O livro ' + tituloLivro   + ' tem ' + book(tituloLivro).quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + tituloLivro + ' é ' + book(tituloLivro).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + tituloLivro + ' foi publicado pela editora ' + book(tituloLivro).editora + '.');