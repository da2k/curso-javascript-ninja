/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 'fernando', true, 45, { a: 1 }, '-85.5' ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction( arr )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function arrNumbers(arr, num) {
    return arr[num];
}

console.log(arrNumbers([1,5,3], 2));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [ 1, 'string', false, { prop1: true, prop2: 'true' }, [5, 3] ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrNumbers(arr2, 0));
console.log(arrNumbers(arr2, 1));
console.log(arrNumbers(arr2, 2));
console.log(arrNumbers(arr2, 3));
console.log(arrNumbers(arr2, 4));

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
function book( livro ) {
    var objLivros = {
        'Livro1': {
            quantidadePaginas: 355,
            autor: 'Autor Mara1',
            editora: 'Publique aqui1'
        },
        'Livro2': {
            quantidadePaginas: 100,
            autor: 'Autor Mara2',
            editora: 'Publique aqui2'
        },
        'Livro3': {
            quantidadePaginas: 851,
            autor: 'Autor Mara3',
            editora: 'Publique aqui3'
        }
    };

    return !livro ? objLivros : objLivros[ livro ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
console.log(book('Livro1'));
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = 'Livro2';

console.log("O livro " + livro + " tem " + book(livro).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + livro + " é " + book(livro).autor) + ".";

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("o livro " + livro + " foi publicado pela editora " + book(livro).editora + ".");