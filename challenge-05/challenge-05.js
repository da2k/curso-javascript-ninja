/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = ['Leandro', 19, 'Ninja', undefined, [1, 2]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(array) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(meuArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function returnArrayIndex(array, index) {
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var secondArray = ['Javascript', 47, null, false, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
function mySecondArray() {
    return secondArray; 
}

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
function book (livro) {
    var obj = {
        'Javascript Ninja' : {
            quantidadePaginas: 850,
            autor: 'Fernando Daciuk',
            editora: 'Ninja Press'
        },
        'Git Book' : {
            quantidadePaginas: 600,
            autor: 'Scott Chacon',
            editora: 'Apress'
        },
        'Javascript Eloquent' : {
            quantidadePaginas: 472,
            autor: 'Marijn Haverbeke',
            editora: 'No Starch Press'
        }
    }

    return !livro ? obj : obj[livro];
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
var livro = 'Git Book';
console.log("O livro " + livro + " tem " + book()[livro].quantidadePaginas + " páginas");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
livro = 'Javascript Eloquent';
console.log("O autor do livro " + livro + " é " + book()[livro].autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
livro = 'Javascript Ninja';
console.log("O livro " + livro + " foi publcado pela editora " + book()[livro].editora);