/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = ["arroz", 2, true, false, -5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arrayQualquer) {
    return arrayQualquer;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(qualquer[1]));
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myArray(arrayValor, x) {
    return arrayValor[x];
}
console.log(myArray(qualquer, 2));
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArrayQualquer = ["Suco", 6, true, NaN, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myArray(myArrayQualquer, 0));
console.log(myArray(myArrayQualquer, 1));
console.log(myArray(myArrayQualquer, 2));
console.log(myArray(myArrayQualquer, 3));
console.log(myArray(myArrayQualquer, 4));

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
    var bookList = {
        'comoCriarUmaFuncaoJavaScript': {
            quantidadePaginas: 150,
            autor: "Toinho",
            editora: "ToinhoEDT"
        },
        'comoCriarUmArrayJavaScript': {
            quantidadePaginas: 110,
            autor: "Zezinho",
            editora: "ZezinhoEDT"
        },
        'comoCriarUmObjetoJavaScript': {
            quantidadePaginas: 100,
            autor: "Luisinho",
            editora: "LuisinhoEDT"
        }

    };

    return !bookName ? bookList : bookList[bookName];
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
console.log("O livro Como Criar um Objeto JavaScript tem " + book("comoCriarUmObjetoJavaScript").quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Como Criar um Objeto JavaScript é " + book("comoCriarUmObjetoJavaScript").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Como Criar um Objeto JavaScript foi publicado pela editora " + book("comoCriarUmObjetoJavaScript").editora + ".");