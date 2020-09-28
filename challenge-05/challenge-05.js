/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let things = [5.2, 'strings', {a: 1}, [1,2]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
let func = function(arr){
            return arr;
        };
        console.log(func(things));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(func(things)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

let func2 = function(arr){
            for (arrs in arr)
                console.log(arr[arrs]);
        };
        func2(things);
  
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let things = [5.2, 'strings', {a: 1}, [1,2]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

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
const book = function (bookName) {
            let allbooks =
            {
                'Segredos do Ninja Javascript': {
                    numberoOfPages: 48  8,
                    autor: 'John Resig & Bear Bibeault',
                    publishingCompany: 'Novatec'
                },
                'Introdução ao HTML5': {
                    numberoOfPages: 225,
                    autor: 'Bruce Lawson & Remy Sharp',
                    publishingCompany: 'Alta Books'
                },
                'Smashing CSS': {
                    numberoOfPages: 283,
                    autor: 'Erick A. Meye',
                    publishingCompany: 'Bookman'
                }
            }
            return !bookName ? allbooks : allbooks[bookName];
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
let bookName = 'Smashing CSS';
        console.log(`O livro ${bookName} tem ${book(bookName).numberoOfPages} páginas! `);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${bookName} é ${book(bookName).autor}. `);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${bookName} foi publicado pela editora ${book(bookName).publishingCompany}. `);
