/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = ["liziane", "felix", 26, function() {}, [2, 4, 5]];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray(qualquer)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doisParam(arr, number) {
    return arr[ number ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valueArrays = ["liziane", 26, "programadora", 1992, "felix"];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
doisParam(valueArrays);

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

function book(nomeDoLivro) {
    var livros = {
        "O Retrato de Dorian Gray": {
            quantidadePaginas: 240,
            autor: "Oscar Wilde",
            editora: "L&PM Pocket"
        },
        "A Elegância do Ouriço": {
            quantidadePaginas: 352,
            autor: "Muriel Barbery",
            editora: "Companhia Das Letras"
        },
        "Mogli": {
            quantidadePaginas: 96,
            autor: " Rudyard Kipling",
            editora: "WMF Martins Fontes"
        }
    };

    return !nomeDoLivro ? livros : livros[ nomeDoLivro ];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeDoLivro = "A Elegância do Ouriço";
console.log("O livro " + nomeDoLivro + " tem " + book(nomeDoLivro).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + nomeDoLivro + " é " + book(nomeDoLivro).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + nomeDoLivro + " foi publicado pela editora " + book(nomeDoLivro).editora + ".");
