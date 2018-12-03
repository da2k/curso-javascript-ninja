/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 1, 2, 3, 5]; 

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function foo(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
foo(arr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function fun(arr, i) {
    return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ["string", 1, null, undefined, NaN];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
fun(arr2, 0);
fun(arr2, 1);
fun(arr2, 2);
fun(arr2, 3);
fun(arr2, 4);

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
        'Use a Cabeça! Java': {
            quantidadePaginas: 562,
            autor: "Paul Barry",
            editora: "Alan"
        }, 
        'O Poder dos Quietos': {
            quantidadePaginas: 382,
            autor: "Susan Cain",
            editora: "Saraiva"    
        }, 
        'Linux a Bíblia': {
            quantidadePaginas: 483,
            autor: "Christopher Negus",
            editora: "Inova"        
        }
    };
    return bookName !== undefined ? books[bookName] : books;
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
"O livro Linux a Bíblia tem " + book('Linux a Bíblia').quantidadePaginas + " páginas!";

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"O livro Use a Cabeça! Java é " + book('Use a Cabeça! Java').autor + ".";

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro O Poder dos Quietos foi publicado pela editora " + book('Poder dos Quietos').editora + ".";
