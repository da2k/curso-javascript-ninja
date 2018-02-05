/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = ['123', true, 555, {}, -789, undefined]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnGivenArray(array) { return array; }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log('meuArray', returnGivenArray(meuArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnGivenArrayFromGivenIndex(array, index) { return array[index]; }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var meuArray2 = ['William', false, -555, {}, 323, null]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log('0', meuArray2[0]);
console.log('1', meuArray2[1]);
console.log('2', meuArray2[2]);
console.log('3', meuArray2[3]);
console.log('4', meuArray2[4]);
console.log('5', meuArray2[5]);

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
function book(nomeLivro) {

    var livros = {
        meuLivro: {
            quantidadePaginas: 500,
            autor: 'Autor 1',
            editora: 'Editora 1'
        },
        outroLivro: {
            quantidadePaginas: 300,
            autor: 'Autor 2',
            editora: 'Editora 2'
        },
        livroDiferente: {
            quantidadePaginas: 250,
            autor: 'Autor 3',
            editora: 'Editora 3'
        }
    };
    if (nomeLivro) {
        return livros[nomeLivro];
    }
    return livros;
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
var meuLivro = book('meuLivro');
console.log('O livro meuLivro' + ' tem ' + meuLivro.quantidadePaginas + ' páginas!');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var livroDiferente = book('livroDiferente');
console.log('O autor do livro livroDiferente' + ' é ' + meuLivro.autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var outroLivro = book('outroLivro');
console.log('O livro outroLivro' + ' foi publicado pela editora ' + outroLivro.editora);
