/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = ['uma frase', 35, { a: 10 }, [1, 3, 5], false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function umaFuncao(a) {
    return a;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(umaFuncao(qualquer)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function doisParametros(a, b) {
    return a[b];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var novoArray = [ 12.5, null, function() { return false }, 'uma string qualquer', { a: 15, b: 'algo'} ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(doisParametros(novoArray, 0));
console.log(doisParametros(novoArray, 1));
console.log(doisParametros(novoArray, 2));
console.log(doisParametros(novoArray, 3));
console.log(doisParametros(novoArray, 4));

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
    var bookList = {
        'Nome de um livro': {
            autor: 'João da Silva',
            quantidadePaginas: 150,
            editora: 'Altos livros'
        },
        'Nome de outro livro': {
            autor: 'Maria Estela Duarte',
            quantidadePaginas: 758,
            editora: 'Uma editora legal'
        },
        'Nome de mais um livro': {
            autor: 'Juana Azurduy de Padilla',
            quantidadePaginas: 355,
            editora: 'Editorial de teste'
        }
    };

    return !name ? bookList : bookList[name];
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
var bookName = 'Nome de outro livro';
console.log(`O livro "${bookName}" tem ${book(bookName).quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro "${bookName}" é ${book(bookName).autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro "${bookName}" foi publicado pela editora ${book(bookName).editora}.`);
