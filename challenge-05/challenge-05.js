/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var numbers = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function returnArray(array) {
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

returnArray(numbers)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function returnData(array, number) {
    return array[number];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var diferentValues = ['Emerson', true, 10, undefined, { estado: 'São Paulo' }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

returnData(diferentValues, 0);
returnData(diferentValues, 1);
returnData(diferentValues, 2);
returnData(diferentValues, 3);
returnData(diferentValues, 4);

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
        'Javascript Ninja': {
            quantidadePaginas: 231,
            autor: 'Fernando Daciuk',
            editora: 'Novatec'
        },
        'Harry Potter': {
            quantidadePaginas: 711,
            autor: 'JK Rowlling',
            editora: 'Flecha'
        },
        'Clean Code': {
            quantidadePaginas: 416,
            autor: 'Junior Abramov',
            editora: 'Alta Books'
        }
    }

    if (bookName === undefined || bookName === null) {
        return books;
    }

    return books[bookName];

}



/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
// Clean Code: {quantidadePaginas: 416, autor: "Junior Abramov", editora: "Alta Books"}
// Harry Potter: {quantidadePaginas: 711, autor: "JK Rowlling", editora: "Flecha"}
//Javascript Ninja: {quantidadePaginas: 231, autor: "Fernando Daciuk", editora: "Novatec"}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
*/
// "O livro [NOME_DO_LIVRO] tem [X] páginas!"
var bookName = 'Javascript Ninja';
console.log(`O livro ${bookName} tem  ${book('Javascript Ninja').quantidadePaginas } páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:

*/
bookName = 'Harry Potter';
console.log(`O autor do livro ${bookName} é ${book('Harry Potter').autor}.`) // return JK Rowlling

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:

"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
bookName = 'Clean Code';
console.log(`O livro ${bookName} foi publicado pela editora ${book('Clean Code').editora}.`)

