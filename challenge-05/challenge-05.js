/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var values = ['Paulo', 1, true, 10.5, undefined, 'abc'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(values)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getArr(arg, index){
    return arg[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vetor = ['Slash', 10, false, NaN, {}, 9.9];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(getArr(vetor, 0));
console.log(getArr(vetor, 1));
console.log(getArr(vetor, 2));
console.log(getArr(vetor, 3));
console.log(getArr(vetor, 4));

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
function book(nomeLivro){
    var livro = {
        'A arte de invadir': {
            quantidadePaginas: 300,
            autor: 'Mitnik',
            editora: 'Pertice'
        },
        'Introdução ao HTML5': {
            quantidadePaginas: 200,
            autor: 'Bruce Lawson',
            editora: 'Alta Books'
        },
        'Oriantação a Objetos': {
            quantidadePaginas: 100,
            autor: 'R. Leite',
            editora: 'Casa do Codigo'
        }          
    };
    if(!livro){
        return livro;
    }

    return livro[nomeLivro];
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
console.log('O,livro Oriantação a Objetos tem ' +book('Oriantação a Objetos').quantidadePaginas+ ' páginas !');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O Autor do livro A arte de invadir é ' + book('A arte de invadir').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro A arte de invadir foi publicado pela editora ' + book('A arte de invadir').editora);
