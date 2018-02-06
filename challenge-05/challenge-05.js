/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = ["teste", 10, null, false, -3];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var run = function(param){
    return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
run(meuArray)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var run2 = function(array, num){
    if (num) {
        return array[num];
    }
    return array; 
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray = [ "string", 1, true, undefined, null]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
run2(myArray) //[ 'string', 1, true, undefined, null ]


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
var book = function(nomeLivro){
    var livros = {
        "O código Davinci": {
            quantidadePaginas: 345,
            autor: "Dan Brown",
            editora: "Arqueiro"
        },
        "A Menina que roubava livros": {
            quantidadePaginas: 210,
            autor: "Jhon Wayne",
            editora: "Ática"
        },
        "O menino do pijama listrado": {
            quantidadePaginas: 199,
            autor: "Will Smith",
            editora: "Abril"
        }
    }
    if (nomeLivro) {
        return livros[nomeLivro];        
    }
    return livros;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(); //{O código Davinci: {…}, A Menina que roubava livros: {…}, O menino do pijama listrado: {…}}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro A Menina que roubava livros tem " + book("A Menina que roubava livros").quantidadePaginas + " páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro A Menina que roubava livros é " + book("A Menina que roubava livros").autor + ".")

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro A Menina que roubava livros foi publicado pela editora " + book("A Menina que roubava livros").editora + ".")
