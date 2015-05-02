/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['Warley', true, 10, 'Ninja', true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var funcArray = function(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(funcArray(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
var arrayIndice = function(arg, indice) {
    return arg[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ['string', 10, NaN, true, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrayIndice(arr2, 0));
console.log(arrayIndice(arr2, 1));
console.log(arrayIndice(arr2, 2));
console.log(arrayIndice(arr2, 3));
console.log(arrayIndice(arr2, 4));

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
var book = function(nomeLivro) {

    var listaLivros = {
        'Harry Potter': {
            quantidadePaginas: 320,
            autor: 'J.K. Rowling',
            editora: 'Rocco'
        },
        'O Programador apaixonado': {
            quantidadePaginas: 255,
            autor: 'Chad Fowler',
            editora: 'Casa do código'
        },
        'O Pequeno Principe': {
            quantidadePaginas: 93,
            autor: 'Antoine Saint-Exupéry',
            editora: 'Agir'
        }
    }
    if (nomeLivro) {
        return listaLivros[nomeLivro];
    }

    return listaLivros;
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
console.log('O livro Harry Potter tem ' + book('Harry Potter').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Harry Potter é ' + book('Harry Potter').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Harry Potter foi publicado pela editora ' + book('Harry Potter').editora + '.');