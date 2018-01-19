/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [15, 'thiago', null, true, { sobrenome: 'morette'}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcArray (arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log ( funcArray (myArray)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction (array, index){
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = ['thiago', ['javascript', 2], 32.1, true, {curso: 'javascript-ninja' } ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(array, 0));
console.log(myFunction(array, 1));
console.log(myFunction(array, 2));
console.log(myFunction(array, 3));
console.log(myFunction(array, 4));

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
function book(livro){
    var livros = {
        'JavaScript Ninja': {
            quantidadePaginas: 258,
            autor: 'Fernando Daciuk',
            editora: 'Udemy',
        },
        'Web Development': {
            quantidadePaginas: 378,
            autor: 'DevSlopes',
            editora: 'DevSlopes',
        },
        'BootCamp': {
            quantidadePaginas: 127,
            autor: 'Fulano de Tal',
            editora: 'Code Academy',
        }
    };

    return !livro ? livros : livros[livro];

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
console.log('O livro JavaScript Ninja tem ' + book('JavaScript Ninja').quantidadePaginas + ' páginas.')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O livro Web Development é ' + book('Web Development').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro BootCamp foi publicado pela editora ' + book('Web Development').editora + '.');