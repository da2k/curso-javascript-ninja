/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var arr = [1, 2, 3, 4, 5]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function printArr(arg) {
    return arg;
}

console.log(printArr(arr));
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(printArr(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(arr, n) {
    return arr[n];
}
console.log(myFunction([1, 10, 20, 30], 2));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = [1, 'Diogenes', true, [1, 2, 3], { a: 10, b: 20, c: 30 }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(arr, 4));

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
function book(name) {
    obj = {
        "Pai rico e Pai pobre": {
            quantidadePaginas: 235,
            autor: "Robert Kiyosaki e Sharon L. Lechter",
            editora: "Campus"
        },
        "As 48 leis do poder": {
            quantidadePaginas: 458,
            autor: "Robert Greene e Joost Eiffers",
            editora: "Rocoo"
        },
        "De zero a um": {
            quantidadePaginas: 212,
            autor: "Peter Thiel com Blake Masters",
            editora: "Objetiva"
        }
    };
    if (name != null) {
        return obj[name];
    } else {
        return obj;
    }
}
console.log(book("As 48 leis do poder"));

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro ' + Object.keys(obj)[1] + ' tem ' + book(Object.keys(obj)[1]).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + Object.keys(obj)[2] + ' é ' + book(Object.keys(obj)[2]).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + Object.keys(obj)[0] + ' foi publicado pela editora ' + book(Object.keys(obj)[0]).editora);