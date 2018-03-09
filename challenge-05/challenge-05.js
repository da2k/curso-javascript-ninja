/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var randomArr = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArr(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
getArr(randomArr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getValueArr(arr, index) {
    return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var arrTypes = ['Mateus', 23, true, {name: 'Mateus'}, [1,2,3,4]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

for (var i = 0; i < arrTypes.length; i++ ) {
    getValueArr(arrTypes, i);
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
function book(name) {

    var books = {
        "Livro 1": {
            quantidadePaginas: 10,
            autor: 'Mateus Alcova',
            editora: 'Topzera'
        },

        "Livro 2": {
            quantidadePaginas: 20,
            autor: 'Mateus Alcova',
            editora: 'Topzera'
        },

        "Livro 3": {
            quantidadePaginas: 30,
            autor: 'Mateus Alcova',
            editora: 'Topzera'
        }

    }

    try {
        books[name].quantidadePaginas;
        return books[name];
    } catch (e) {
        return books;
    }

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
return 'O livro 1 tem ' + book('Livro 1').quantidadePaginas + ' Páginas';

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
return 'O autor do Livro 1 é ' + book('Livro 1').autor + '.';


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
return 'O Livro 1 foi publicado pela editado ' + book('Livro 1').editora + '.';

