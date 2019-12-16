/* # Desafio da semana #4 */

/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 3, 'string', function(){}, newArray = [ 1, 2, 3 ], true ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array_param){
    return array_param; 
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(arr[1])); // Retornou 'String', funcionando.

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function newFunction(value, index){
    return value[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var new_arr = [ 5, 'Arrays', function(){}, newArray = [ 3, 2, 1 ], false ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(newFunction(new_arr, 0));
console.log(newFunction(new_arr, 1));
console.log(newFunction(new_arr, 2));
console.log(newFunction(new_arr, 3));
console.log(newFunction(new_arr, 4));

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
function book(bookName){

    var allBooks = {

        'O milagre do amanhã': {
            qtd_paginas: 196,
            autor: 'Hal Elrod',
            editora: 'BestSeller'
        },
        'O poder do hábito': {
            qtd_paginas: 408,
            autor: 'Charles Duhigg',
            editora: 'Objetiva'
        },
        'Mindset': {
            qtd_paginas: 312,
            autor: 'Carol S. Dweck',
            editora: 'Objetiva'
        }
    }
    /*
    if(!bookName){
        return allBooks;
    }
    return allBooks[bookName];
    */
    return !bookName ? allBooks: allBooks[bookName];
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
var bookName = 'Mindset';
console.log('O livro '+bookName+' tem '+book(bookName).qtd_paginas+' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro '+bookName+' é '+book(bookName).autor+'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro '+bookName+' foi publicado pela editora '+book(bookName).editora+'.');
