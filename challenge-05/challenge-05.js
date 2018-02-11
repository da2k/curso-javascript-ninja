/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function thisArray(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
thisArray(myArray)[1]; // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function arrayIndexValue(arrayArg, numArg) {
    return arrayArg[numArg];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var mixedValues = [5, 'Coe', { a: 1}, true, NaN, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
thisArray(mixedValues); // [ 5, 'Coe', { a: 1 }, true, NaN, undefined ]

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
function book(name){
    var books = {
        book1: {
            quantidadePaginas : 50,
            autor: 'Nome do autor',
            editora: 'Editora X'
        },
        book2: {
            quantidadePaginas : 500,
            autor: 'Nome do autor 2',
            editora: 'Editora Y'
        },
        book3: {
            quantidadePaginas : 150,
            autor: 'Nome do autor 3',
            editora: 'Editora Z'
        }
    };

    var bookExists = books[name] ? true : false;
    if(bookExists) {
        return books[name];
    }
    return books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var firstBook =  Object.keys(book())[0];
"O livro "+  firstBook +" tem " + book(firstBook).quantidadePaginas + " páginas";

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"O autor do livro "+ firstBook +" é "+ book(firstBook).autor +".";

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro "+ firstBook +" foi publicado pela editora "+ book(firstBook).editora +".";
