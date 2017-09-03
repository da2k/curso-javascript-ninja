/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ true, {prop: 3, prop2: 9, prop3: 5}, 'purple', function() {return 'hi!';}, [9, 2, 7] ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(anArray) {

    return anArray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
returnArray(myArray)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function returnArrayIndex(anArray, index) {

    return anArray[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [9 * 5, function() {return 'hello'}, [9, 2, 6], {a: 8, b: 2, c: 7}, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
returnArrayIndex(myArray2, 0);
returnArrayIndex(myArray2, 1);
returnArrayIndex(myArray2, 2);
returnArrayIndex(myArray2, 3);
returnArrayIndex(myArray2, 4);

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

    var books = {

        'dark souls': {

            quantidadePaginas: 500,
            autor: 'Miazaki',
            editora: 'Bandai Namco'
        },

        'the witcher': {

            quantidadePaginas: 300,
            autor: 'Robert',
            editora: 'Commic books'
        },

        'alice in the wonderland': {

            quantidadePaginas: 400,
            autor: 'William',
            editora: 'Fantasy Books'
        }
    };

    return !bookName ? books : books[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(); // {...}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'the witcher';

"O livro " + bookName + " tem " + book(bookName).quantidadePaginas + " páginas!"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
bookName = 'alice in the wonderland';

"O autor do livro " + bookName + " é " + book(bookName).autor + "."

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
bookName = 'dark souls';

"O livro " + bookName + " foi publicado pela editora " + book(bookName).editora + "."
