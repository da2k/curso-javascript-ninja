/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var myarray = [1, "string", null, true, false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunc(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunc(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFunc2(array, index) {
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var array = [50, "string", true, false, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log( myFunc2(array, 0) );
console.log( myFunc2(array, 1) );
console.log( myFunc2(array, 2) );
console.log( myFunc2(array, 3) );
console.log( myFunc2(array, 4) );


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

function book(param){
    var obj = {
        'book1': {
            quantidadePaginas: 100,
            autor: "Doe",
            editora: "Live"
        },
        'book2': {
            quantidadePaginas: 100,
            autor: "Doe",
            editora: "Live"
        },
        'book3': {
            quantidadePaginas: 100,
            autor: "Doe",
            editora: "Live"
        }
    };

    return !param ? obj : obj[param];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log("O livro book1 tem "+ book("book1").quantidadePaginas +" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor do livro book2 é "+ book("bo0k2").autor +".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

var name = "book3";
console.log("O livro "+ name +" foi publicado pela editora "+ book(name).editora +".");
