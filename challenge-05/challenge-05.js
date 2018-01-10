/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrayAleatorio = [ true, 'Brasil', 999, { nome: 'Lucas', idade: 23, sexo: 'Masculino' }, undefined ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function mostrarValoresArray(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(mostrarValoresArray(arrayAleatorio)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function acessarArray(array, indice) {
    return array[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayFunny = [ 'Santos FC', 8757, ['José', 100, true], { pais: 'Brasil', sigla: 'BR', populacao: '207,7 mi' }, null ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(acessarArray(arrayFunny, 0));
console.log(acessarArray(arrayFunny, 1));
console.log(acessarArray(arrayFunny, 2));
console.log(acessarArray(arrayFunny, 3));
console.log(acessarArray(arrayFunny, 4));

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
function book(param) {
    var livro = {
        mean: { 
            quantidadePaginas: 407,
            autor: 'Flávio Almeida',
            editora: 'Casa do Código'
        },
        jquery: {
            quantidadePaginas: 202,
            autor: 'Plínio Balduino',
            editora: 'Casa do Código'
        },
        html5: {
            quantidadePaginas: 205,
            autor: 'Edérson Cássio',
            editora: 'Casa do Código'
        }
    };

    return param === undefined ? livro : livro[param]; 
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
console.log("O livro 'mein' tem " + book('mean').quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro HTML5 é " + book('html5').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Jquery foi publicado pela editora " + book('jquery').editora + ".")