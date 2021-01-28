/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let obj = [ 'Junior', 25, true, null, undefined, function() ];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(obj)[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, num){
    return arr[num];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arr = [ 'Junior', 25, {a: 3, b:2}, [`Ivo Junior`, 1.8, `Full Stack` ], function(){}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(arr, 0)) // 'Junior'
console.log(myFunction2(arr, 1)) // 25
console.log(myFunction2(arr, 2)) // {a: 3, b:2}
console.log(myFunction2(arr, 3)) // [ 'Ivo Junior', 1.8, 'Full Stack' ]
console.log(myFunction2(arr, 4)) // [Function (anonymous)]

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
    let allBooks = {
        'O Milagre da Manhã': {
            numberOfPages: 196,
            author: 'Hal Elrod',
            publishingCompany: 'Best Seller',
        },
        'Do Mil ao Milhão': {
            numberOfPages: 192,
            author: 'Thiago Nigro',
            publishingCompany: 'Harpercollins Brasil',
        },
        'O Segredo': {
            numberOfPages: 198,
            author: 'Rhonda Byrne',
            publishingCompany: 'Atria Publishing Group',
        }
    }

    return !bookName ? allBooks : allBooks[bookName];
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
const bookName = 'Do Mil ao Milhão';

console.log(`O livro ${bookName} tem ${book(bookName).numberOfPages} páginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
const bookName = 'O Segredo';

console.log(`O autor(a) do livro ${bookName} é o(a) ${book(bookName).author}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
const bookName = 'O Milagre da Manhã';

console.log(`O livro ${bookName} foi publicado pela editora ${book(bookName).publishingCompany}`);

