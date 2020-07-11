/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = ['Artur', 18, null, function(){}, {lindo: true}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retArr(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retArr(qualquer)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function output(arr, index){
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar = ['Freire', 1.75, {empregado: false}, function(){}, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(output(myVar, 0));
console.log(output(myVar, 1));
console.log(output(myVar, 2));
console.log(output(myVar, 3));
console.log(output(myVar, 4));

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
function book(bookName){
    var library = {
        'The Great Gatsby': {
            quantidadePaginas: 191,
            autor: 'F. Scott Fitzgerald',
            editora: 'Bantam Books'
        },
        'The Catcher in the Rye':{
            quantidadePaginas: 220,
            autor: 'J. D. Salinger',
            editora: 'Penguin Book'
        },
        'O Pequeno Príncipe':{
            quantidadePaginas: 141,
            autor: 'Antoine de Saint-Exupéry',
            editora: 'Pé da Letra'
        }
    };

    return !!bookName ? library[bookName] : library;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

var book1 = 'The Great Gatsby';
var book2 = 'The Catcher in the Rye';
var book3 = 'O Pequeno Príncipe';

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro ' + book1 + ' tem ' + book(book1).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + book2 + ' é ' + book(book2).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + book3 + ' foi publicado pela editora ' + book(book3).editora + '.');
