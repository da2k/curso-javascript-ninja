/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var ninjaArr = [ 'helio', 'alves', true, 34, 'ninja' ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function ninjaFunc(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
ninjaFunc(ninjaArr)[1];
console.log(ninjaFunc(ninjaArr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function ninjaFunc2(arr, x) {
    return arr[x];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var ninjaArr2 = [ 1, 'ninja', null, undefined, 'rulez' ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(ninjaFunc2(ninjaArr2, 0));
console.log(ninjaFunc2(ninjaArr2, 1));
console.log(ninjaFunc2(ninjaArr2, 2));
console.log(ninjaFunc2(ninjaArr2, 3));
console.log(ninjaFunc2(ninjaArr2, 4));

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
function book(bookChoice) {
    var books = {
        'Game Of Thrones': {
            quantidadePaginas: 534,
            autor: 'George R. R. Martin',
            editora: 'Bantam Spectra'
        },

        'A Cabana': {
            quantidadePaginas: 240,
            autor: 'Young,William P.',
            editora: 'Arqueiro'
        },

        'O Arqueiro': {
            quantidadePaginas: 440,
            autor: 'Bernard Cornwell',
            editora: 'HarperCollins'
        }
    }

    return !bookChoice ? books : books [ bookChoice ];

    // if ( !bookChoice ) {
    //     return books;
    // }

    // return books[ bookChoice ];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

// pelo video comentado do Daciuk, descobri que é preciso aspas simples no objeto livro

var bookName = 'Game Of Thrones';
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName1 = 'O Arqueiro';
console.log('O autor do livro ' + bookName1 + ' é ' + book(bookName1).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName2 = 'A Cabana';
console.log('O livro ' + bookName2 + ' foi publicado pela editora ' + book(bookName2).editora + '.');
