/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1, true, 'Chuck Norris', null], undefined;

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function devolver(args) {
    return args;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(devolver(array)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function devolverExato(args, index) {
    return args[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = [false, 1.80, 'Jão', null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(devolverExato(array2, 0));
console.log(devolverExato(array2, 1));
console.log(devolverExato(array2, 2));
console.log(devolverExato(array2, 3));
console.log(devolverExato(array2, 4));

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
    var obj = {
        Javascript: {
            quantidadePaginas: 380,
            autor: 'Maurício Sammy',
            editora: 'Novatec'
        },

        HTML: {
            quantidadePaginas: 300,
            autor: 'Jhonn',
            editora: 'Altabooks'
        },

        CSS: {
            quantidadePaginas: 280,
            autor: 'Zé',
            editora: 'Casa do Zé'
        }
    };

    if (nome === undefined) {
        return obj;
    }

    return obj[nome];
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
console.log("O livro HTML tem " + book("HTML").quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro Javascript é " + book("Javascript").autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro CSS foi publicado pela editora " + book("CSS").editora + ".");
