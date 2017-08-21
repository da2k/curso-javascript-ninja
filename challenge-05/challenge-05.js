/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [true, 5 * 5, false, 9, "string"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(par) {

    return par;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function retornaArray2(umArray, index) {

    return umArray[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [6 * 6, true, "javaScript", false, 3];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaArray2(myArray2, 0);
retornaArray2(myArray2, 1);
retornaArray2(myArray2, 2);
retornaArray2(myArray2, 3);
retornaArray2(myArray2, 4);

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
function book(bookName) {

    var books = {

        "planet of the apes": {
            quantidadePaginas: 536,
            autor: "Tim Burton",
            editora: "Intrínseca"
        },

        "jurassik park": {
            quantidadePaginas: 865,
            autor: "Steven Spielberg",
            editora: "Commic Books"
        },

        "dark souls": {
            quantidadePaginas: 163,
            autor: "Miazaki",
            editora: "Bandai Namco"
        }
    };

    return bookName ? books[bookName] : books;
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
var nomeLivro = "jurassik park";

console.log("O livro " + nomeLivro + " tem " + book(nomeLivro).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + nomeLivro + " é " + book(nomeLivro).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + nomeLivro + " foi publicado pela editora " + book(nomeLivro).editora + ".");
