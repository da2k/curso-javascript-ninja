/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1, true, "string", null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(myArray)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaItem(arr, indice) {
    return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [1, true, "string", [1, 2, 'Phelipe'], {b: 2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(myArray2)[0];
myFunction(myArray2)[1];
myFunction(myArray2)[2];
myFunction(myArray2)[3];
myFunction(myArray2)[4];

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

function book (bookName) {

    var objLivros = {

        'Livro1' : {
            quantidadePaginas: 100,
            autor: 'Autor 1',
            editora: 'Novatec'
        },
        'Livro2': {
            quantidadePaginas: 150,
            autor: 'Autor 2',
            editora: 'Gente'
        },
        'Como Fazer amigos': {
            quantidadePaginas: 200,
            autor: 'Autor 3',
            editora: 'Hill'
        }
    }

    return !bookName ? objLivros : objLivros[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = "Como Fazer amigos";
console.log("O livro "+bookName+" tem "+book(bookName).quantidadePaginas+" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do "+bookName+" é "+book(bookName).autor+" .");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
onsole.log("O livro "+bookName+" foi publicado pela editora "+book(bookName).editora+" .");
