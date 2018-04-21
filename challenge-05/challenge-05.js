/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1, "a", true, "Marcus", undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(param) {
    return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(param)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(valores, index) {
    return valores[index];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar = ["javaScript", false, null, 100, "b"];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(myVar, 0));
console.log(myFunction(myVar, 1));
console.log(myFunction(myVar, 2));
console.log(myFunction(myVar, 3));
console.log(myFunction(myVar, 4));
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
function book(nomeLivro) {
    var obj = {
        'Livro Bom': {
            quantidadePaginas: 1000,
            autor: "Marcus",
            editora: "Abril",
        },
        'Livro Ruim': {
            quantidadePaginas: 150,
            autor: "Maria",
            editora: "Maio",
        },
        'Livro Pessimo': {
            quantidadePaginas: 100,
            autor: "Desconhecido",
            editora: "Junho",
        }
    };
    if(!nomeLivro) {
        return obj;
    }
 
        return obj[nomeLivro];
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
console.log("O livro livro bom tem " + book("livro bom").quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro livro ruim é " + book("livro ruim").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro livro péssimo foi publicado pela editora " + book("livro pessimo").editora + ".")