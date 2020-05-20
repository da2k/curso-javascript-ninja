/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var newVarArray = ['1', 'Marcelo', true, '5 + 3', NaN];
console.log(newVarArray);
//[ '1', 'Marcelo', true, '5 + 3', NaN ]


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(newVarArray)[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function newFunction(arr, index) {
    return arr [index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArr = ['10', null, 'Ninja', '25', undefined];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(newFunction(myArr, 0));
console.log(newFunction(myArr, 1));
console.log(newFunction(myArr, 2));
console.log(newFunction(myArr, 3));
console.log(newFunction(myArr, 4));


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
function myBook(livro){
    var allBooks = {
        "js_ninja": {
            quantidadePaginas: 298,
            autor: "Marcelo Santos",
            editora: "MK"
        },
        "html_ninja": {
            quantidadePaginas: 320,
            autor: "Joé Jui",
            editora: "MK"
        },
        "css_ninja": {
            quantidadePaginas: 300,
            autor: "Piori Junti",
            editora: "MK"
        },

    };

    return !livro ? allBooks : allBooks[ livro ];
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(myBook()); //{ quantidadePaginas: 298, autor: 'Marcelo Santos', editora: 'MK' }

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'js_ninja';
console.log("O livro " + bookName + " tem " + myBook(bookName).quantidadePaginas + " páginas!");


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + bookName + " é " + myBook(bookName).autor + ".");


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + bookName + " foi publicado pela editora " + myBook(bookName).editora + ".");

