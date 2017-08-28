/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var mixArray = ['Manga', 33, 'Uva', null, pessoa = {nome: 'Will'}, function myFunc(){return 'minha função'}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function showArray(array) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(showArray(mixArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function showArrayItem(array, item) {
    return array[item];
}

console.log(showArrayItem(mixArray, 4));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var typeArray = ['William', 1988, true, ['a', 'b', 'c'], {carro: 'Camaro'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(showArrayItem(typeArray, 0));
console.log(showArrayItem(typeArray, 1));
console.log(showArrayItem(typeArray, 2));
console.log(showArrayItem(typeArray, 3));
console.log(showArrayItem(typeArray, 4));

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

function book(nameBook) {
    var bookName = nameBook;
    var myBooks = {
        'Javascript': {
            quantidadePaginas: 500,
            autor: 'Fernando Daciuk',
            editora: 'Casa do Código'
        },
        'HTML5': {
            quantidadePaginas: 680,
            autor: 'Jon Duckett',
            editora: 'Alta Books'
        },
        'CSS3': {
            quantidadePaginas: 320,
            autor: 'Erick Meyer',
            editora: 'Smashing'
        }
    };

    return !nameBook ? myBooks : myBooks[ nameBook ];

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
var nameBook = 'CSS3';
console.log('O livro ' + nameBook + ' tem ' + book( nameBook ).quantidadePaginas + ' páginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro ' + nameBook + ' é ' + book( nameBook ).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log('O livro ' + nameBook + ' foi publicado pela editora ' + book( nameBook ).editora + '.');