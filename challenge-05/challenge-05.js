/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var recebeValor = ['Ana', 98, true, false, []]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(recebeValor[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arg1, arg2) {
    return arg1[arg2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray = ['JavScript', true, 500, 'Work', []];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(myArray, 0))
console.log(myFunction2(myArray, 1))
console.log(myFunction2(myArray, 2))
console.log(myFunction2(myArray, 3))
console.log(myFunction2(myArray, 4))

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
function livro(nomeLivro) {
    var recebeObjeto = {
        'Livro 1': {
            quantidadePaginas: 50,
            autor: 'Fabio Santos',
            editora: 'Abril'
        },
        'Livro 2': {
            quantidadePaginas: 60,
            autor: 'Santos Almeida',
            editora: 'Abril'
        },
        'Livro 3': {
            quantidadePaginas: 70,
            autor: 'Fabio Silva',
            editora: 'Abril'
        }
    };

    if (!nomeLivro) {
        return recebeObjeto;
    }

    return recebeObjeto[nomeLivro];

    // return !nomeLivro ? recebeObjeto : recebeObjeto[nomeLivro]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(livro());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro Livro 1 tem " + livro('Livro 1').quantidadePaginas + " páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Livro 3 é " + livro('Livro 3').autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Livro 2 foi publicado pela editora " + livro('Livro 2').editora)
