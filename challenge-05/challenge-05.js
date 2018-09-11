/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function receive (arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(receive(qualquer)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
func2(arr, num) {
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var nova = [ 1, "3", "aaa", 4, false ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(func2(nova, 0)); //1
console.log(func2(nova, 1)); //"3"
console.log(func2(nova, 2)); //"aaa"
console.log(func2(nova, 3)); //4
console.log(func2(nova, 4)); //false

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
function book(nome) {
    var objeto = { "harry potter": { quantidadeDePaginas: 200, autor: "JK", editora: "Rocco" },
                  "o apanhador": { quantidadeDePaginas: 100, autor: "JD", editora: "Intrinseca" },
                  "1984": { quantidadeDePaginas: 50, autor: "GO", editora: "Martin" }
                 };
    if(objeto[nome])
        return objeto[nome];
    return objeto;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book()); 
/* 1984
:
{quantidadeDePaginas: 50, autor: "GO", editora: "Martin"}
harry potter
:
{quantidadeDePaginas: 200, autor: "JK", editora: "Rocco"}
o apanhador
:
{quantidadeDePaginas: 100, autor: "JD", editora: "Intrinseca"}
__proto__
:
Object */

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro 1984 tem " + book(1984).quantidadeDePaginas + " páginas!"; //"O livro 1984 tem 50 páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro 1984 é " + book(1984).autor + "."; //"O autor do livro 1984 é GO.");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro 1984 foi publicado pela editora " + book(1984).editora + ".";); //"O livro 1984 foi publicado pela editora Martin."
