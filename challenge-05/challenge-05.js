/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ["Camila", 27, true, {}, function(){}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunc(array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunc(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function otherFunc(array, number){
    return array[number];
};

console.log(otherFunc([1,2,3], 1));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otherArray = ["Becker", 29, false, {nome: "Camila"}, function(){}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(otherFunc(otherArray, 0));
console.log(otherFunc(otherArray, 1));
console.log(otherFunc(otherArray, 2));
console.log(otherFunc(otherArray, 3));
console.log(otherFunc(otherArray, 4));

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
    var books = {
        "JavaScript - Guia do Programador":{
            quantidadePaginas: 608,
            autor: "Maurício Samy Silva",
            editora: "Novatec"
        },
        "O Universo da Programação":{
            quantidadePaginas: 203,
            autor: "William Oliveira",
            editora: "Casa do Código"
        },
        "Segurança em Aplicações Web":{
            quantidadePaginas: 156,
            autor: "Rodrigo Ferreira",
            editora: "Casa do Código"
        }
    }

    if(!bookName){
        return books;
    }

    return books[bookName];
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

var bookName = ["JavaScript - Guia do Programador", "O Universo da Programação", "Segurança em Aplicações Web"];

console.log("O livro " + bookName[0] + " tem " + book(bookName[0]).quantidadePaginas  + " páginas!" );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + bookName[1] + " é " + book(bookName[1]).autor  + "." );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + bookName[2] + " foi publicado pela editora " + book(bookName[2]).editora + "." );
