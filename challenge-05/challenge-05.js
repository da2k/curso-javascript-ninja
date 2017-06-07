/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ['Renan', 80, 'Thais', 'Javascript', 100.0];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function obterArray(vetor) {
    return vetor;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(obterArray([1, 2, 3])[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(vetor, indice) {
    return vetor[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayValoresDiferentes = ['Renan', 1, 100.0, null, {
    nome: 'Silva'
}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(arrayValoresDiferentes, 0));
console.log(myFunction(arrayValoresDiferentes, 1));
console.log(myFunction(arrayValoresDiferentes, 2));
console.log(myFunction(arrayValoresDiferentes, 3));
console.log(myFunction(arrayValoresDiferentes, 4));

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
function book(livro) {
    var obj = {
        'Odisseia': {
            quantidadePaginas: 700,
            autor: 'Homero',
            editora: 'Nova Fronteira'
        },
        'Iliada': {
            quantidadePaginas: 500,
            autor: 'Homero',
            editora: 'Nova Fronteira'
        },
        'Crime e castigo': {
            quantidadePaginas: 599,
            autor: 'Dostoievski',
            editora: 'Editora 34'
        }
    };

    return !livro ? obj : obj[livro];
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
console.log('O livro Crime e castigo' + ' tem ' + book()['Crime e castigo'].quantidadePaginas);


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O livro Crime e castigo' + ' tem ' + book()["Crime e castigo"].autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Crime e castigo' + ' tem ' + book()["Crime e castigo"].editora);
