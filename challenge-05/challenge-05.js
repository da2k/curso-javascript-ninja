/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = ["Rafael", 28, true, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(array) {
    return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// console.log(retornaArray(meuArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function meusValores(array, numero) {
    return array[numero];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var mueNovoArray = [true, "Rafael", 28, null, 450];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// console.log(retornaArray(mueNovoArray));

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
    var colecaoNomeLivro = {
        'CSS Grid Layout': {
            quantidadePaginas: 220,
            autor: 'Mauricio Samy',
            editora: 'Novatec'
        },

        'Introdução ao HTML5': {
            quantidadePaginas: 220,
            autor: 'Bruce Lawson',
            editora: 'Alta Books'
        },

        'You dont know JS': {
            quantidadePaginas: 560,
            autor: 'Getify',
            editora: 'GitHub'
        }
    }

    return !nomeLivro ? colecaoNomeLivro : colecaoNomeLivro[nomeLivro];
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
var nomeLivroSelecionado = 'You dont know JS'
console.log('O livro ' + nomeLivroSelecionado + ' tem ' + book(nomeLivroSelecionado).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + nomeLivroSelecionado + ' é ' + book(nomeLivroSelecionado).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + nomeLivroSelecionado + ' foi publicado pela editora ' + book(nomeLivroSelecionado).editora);
