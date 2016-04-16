/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = ['Gustavo', 30, true, {
    propriedade1: true,
    propriedade2: 'string'
}, false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray(param) {
    return param;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(recebeArray(meuArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
var meuArray2 = ['Gol', 'Fiesta', 'Corsa', 'Palio'];

function myFunction2(mostraArray, posicaoArray) {
    if (posicaoArray === undefined) {
        return mostraArray;
    }
    return mostraArray[posicaoArray];

};

console.log(myFunction2(meuArray2, 2));




/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var meuArray3 = ['Anderson Silva', 40, 90, 'UFC', true]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(meuArray3));

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




function book(nomeDoLivro) {

    var meuLivro = {
        'Leitura em 15 minutos': {
            quantidadePaginas: 100,
            autor: 'Mario Andrade',
            editora: 'Ed. Conhecimento'
        },
        'Teorias Financeira': {
            quantidadePaginas: 240,
            autor: 'Luiz Carlos',
            editora: 'Ed. Merecimento'
        },
        'Comendo Melhor': {
            quantidadePaginas: 460,
            autor: 'Eduardo Augusto',
            editora: 'Ed. Desconhecida'
        }
    };

    return meuLivro[nomeDoLivro] !== undefined ? meuLivro[nomeDoLivro] : meuLivro;

};

console.log(book('Leitura em 15 minutos'));
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livroEscolhido = 'Comendo Melhor'
console.log('O livro ' + livroEscolhido + ' tem ' + book(livroEscolhido).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + livroEscolhido + ' é ' + book(livroEscolhido).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro '+livroEscolhido+' foi publicado pela editora '+book( livroEscolhido ).editora+'.' );
