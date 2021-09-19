/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [0,'a',null,undefined,1.25];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arr){
    return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function acessPosi(arr, posi){
    return arr[posi];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
arr2 = ['c',null,0,1.25,{name: 'Marcos'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for(let i = 0; i < 5; i++){
    console.log(acessPosi(arr2,i));
}

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
function book(nome){
    var obj = {
        "Admirável mundo novo": {
            quantidadePaginas: 400,
            autor: "Aldous Huxley",
            editora: "Biblioteca Azul"
        },
        
        "1984":{
            quantidadePaginas: 420,
            autor: "George Orwell",
            editora: "Companhia das Letras"
        },

        "Rápido e devagar":{
            quantidadePaginas: 600,
            autor: "Daniel Kahneman",
            editora: "Objetiva"
        }
    };
    return (nome === undefined ? obj : obj[nome]);
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
console.log("O livro 1984 tem "  + book("1984").quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Rápido e devagar é " + book("Rápido e devagar").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Admirável mundo novo foi publicado pela editora " + book("Admirável mundo novo").editora+".")
