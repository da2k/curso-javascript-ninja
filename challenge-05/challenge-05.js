/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArr = ['Olá', 5, true, function() {}, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
//função literal
function banana(arr) {
    return arr;
}

// ou

var banana = function(arr) {
    return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(banana(myArr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function abacate(array, i) {
    return array[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArr2 = ['Hello', 10, false, {a: 2}, [1, 'oi', true]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(abacate(myArr2, 0));
console.log(abacate(myArr2, 1));
console.log(abacate(myArr2, 2));
console.log(abacate(myArr2, 3));
console.log(abacate(myArr2, 4));

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
function book(nomeLivro) {
    var catalogo = {
        'O nome do vento': {
            quantidadePaginas: 1000,
            autor: 'André',
            editora: 'Sextante'
        },

        'O diário da princesa': {
            quantidadePaginas: 800,
            autor: 'Maria',
            editora: 'Letrinhas'
        },

        'Harry Potter': {
            quantidadePaginas: 1500,
            autor: 'J. K. Rolling',
            editora: 'Abril'
        }
    };

    return nomeLivro ? catalogo[nomeLivro] : catalogo;

    // if (nomeLivro) {
    //     return catalogo[nomeLivro];
    // } else {
    //     return catalogo;
    // }

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
var nomeLivro = 'Harry Potter'
console.log('O livro ' + nomeLivro +' tem ' + book(nomeLivro).quantidadePaginas + ' páginas!');
//ou
console.log('O livro Harry Potter tem ' + book(nomeLivro)['quantidadePaginas'] + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Harry Potter é ' + book(nomeLivro).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Harry Potter foi publicado pela editora ' + book(nomeLivro).editora);
