/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var randomArr = [
    'marcelo',
    35,
    true,
    [13, 12, 82],
    { programando: true, cansado: 'nao' }
];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray (arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
var indexTwo = returnArray(randomArr)[1];
console.log(indexTwo);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function returnValue (arr, index) {
    var valAtIndex = arr[index];
    return valAtIndex;
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrFive = [
    'javascript',
    5,
    false,
    null,
    undefined
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
returnValue(arrFive, 0);
returnValue(arrFive, 1);
returnValue(arrFive, 2);
returnValue(arrFive, 3);
returnValue(arrFive, 4);

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
function book (name) {
    var bookList = {
        'Não Me Faça Pensar': {
            quantidadePaginas: 212,
            autor: 'Steve Krug',
            editora: 'Alta Books'
        },
        'Javascript. O Guia Definitivo': {
            quantidadePaginas: 1080,
            autor: 'David Flanagan',
            editora: 'Bookman'
        },
        'Aprendendo Node': {
            quantidadePaginas: 312,
            autor: 'Shelley Powers',
            editora: 'Novatec'
        }
    };
    if (name) {
        var chosenBook = {
            name: name,
            info: bookList[name]
        };
        return chosenBook;
    }
    return bookList;
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
var bookOne = book('Não Me Faça Pensar');
console.log('O livro "' + bookOne.name + '" tem ' + bookOne.info.quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookTwo = book('Javascript. O Guia Definitivo');
console.log('O autor do livro "' + bookTwo.name + '" é ' + bookTwo.info.autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookThree = book('Aprendendo Node');
console.log('O livro "' + bookThree.name + '" foi publicado pela editora ' + bookThree.info.editora + '.');