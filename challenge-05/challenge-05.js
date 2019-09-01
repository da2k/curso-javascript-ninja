/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarr = ['1', '2', true, 'teste', 2];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArray(myarr){
    return myarr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myArray(myarr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function indiceArray(myarr, num){
    return myarr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var difValues = [null, 'string', true, 4, 'false'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for(var i=0; i < difValues.length; i++){
    console.log(indiceArray(difValues, i));
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
function book(nomeLivro){
    var livro = {
        'Livro 1': {
            quantidadePaginas: 236,
            autor: 'José',
            editora: 'Novatec'
        },
        'Livro 2': {
            quantidadePaginas: 340,
            autor: 'Joao',
            editora: 'Cube'
        },
        'Livro 3': {
            quantidadePaginas: 632,
            autor: 'Maria',
            editora: 'JooJ'
        }
    };
    if(nomeLivro){
        return livro[nomeLivro];
    }

    return livro;
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
var livroNome = 'Livro 2';
var book = book(livroNome);
console.log('O livro ' + livroNome + ' tem ' + book.quantidadePaginas +  ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + livroNome + ' é ' + book.autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + livroNome + ' foi publicado pela editora ' + book.editora + '.');
