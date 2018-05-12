/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var minhaVariavel = [ 1, 'Leandro', 'Ramos', true, 0, '37' ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function minhaFuncao(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(minhaFuncao(minhaVariavel)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doisParametros(arr, num) {
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayMisto = [ true, 1, 'Leonardo', { curso: 'JS Ninja', level: 'Noob' }, [ 1, 2, 3 ] ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(doisParametros(arrayMisto, 0));
console.log(doisParametros(arrayMisto, 1));
console.log(doisParametros(arrayMisto, 2));
console.log(doisParametros(arrayMisto, 3));
console.log(doisParametros(arrayMisto, 4));

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
    var livros = {
        'Harry Potter': {
            quantidadePaginas: 45,
            autor: 'Leandro Ramos',
            editora: '9 3/4'
        },
        'Java para Leigos': {
            quantidadePaginas: 123,
            autor: 'Danielle Ramos',
            editora: 'Sourcecode'
        },
        'Aconteceu em Porto Alegre': {
            quantidadePaginas: 900,
            autor: 'Raphael Righetti Ramos',
            editora: 'LPM'
        }
    };

    return nomeLivro ? livros[nomeLivro] : livros;
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
var nomeLivro = 'Aconteceu em Porto Alegre';
console.log('O livro ' + nomeLivro + ' tem ' + book(nomeLivro).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
nomeLivro = 'Harry Potter';
console.log('O autor do livro ' + nomeLivro + ' é ' + book(nomeLivro).autor); 

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
nomeLivro = 'Java para Leigos';
console.log('O livro ' + nomeLivro + ' foi publicado pela editora ' + book(nomeLivro).editora);
