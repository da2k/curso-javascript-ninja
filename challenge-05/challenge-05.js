/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1, null, 'texto', {}, ()=>{}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(myArray) {
    return myArray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function twoParams(param1, param2) {
    return param1[param2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayFiveValues = [undefined, true, 2, 'valor', []];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnArray(arrayFiveValues));

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
function book(name) {
    var books = {
        "Dom Quixote": {
            quantidadePaginas: 512,
            autor: "Miguel de Cervantes",
            editora: "Alta books,"
        },
        "A Divina Comédia": {
            quantidadePaginas: 696,
            autor: "Dante Alighieri",
            editora: "Editora 34",
        },
        "Os Lusíadas" : {
            quantidadePaginas: 1000,
            autor: "Luis De Camões",
            editora: "Nova Fronteira",
        }
    }

    if (!name) {
        return books;
    }
    
    return books[name];
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
console.log("O livro A Divina Comédia tem " + book("A Divina Comédia").quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Dom Quixote é " + book("Dom Quixote").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Os Lusíadas foi publicado pela editora " + book("Os Lusíadas").editora + ".")
