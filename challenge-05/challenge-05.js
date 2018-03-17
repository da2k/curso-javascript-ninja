/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var varArray = [1,'a',true,{},null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcArray(varArray){
    return varArray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
funcArray(varArray)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var a = [1,2,3],
b = 2;
function myFunction(a,b) {
    return a[b];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var varArray = [1,'a',true,{},null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for(var i =0; i < varArray.length; i++) {
    console.log( myFunction(varArray,i) );
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
function book(nomeLivro) {
    var recebeObjeto = {
        'Livro 01': {
            quantidadePaginas: 1,
            autor: 'Autor 01',
            editora: 'Editora 01'
        },
        'Livro 02': {
            quantidadePaginas: 2,
            autor: 'Autor 02',
            editora: 'Editora 02'
        },
        'Livro 03': {
            quantidadePaginas: 3,
            autor: 'Autor 03',
            editora: 'Editora 03'
        }
    };
    return !nomeLivro ? recebeObjeto : recebeObjeto[nomeLivro];
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
var livroTeste01 = 'Livro 01';
console.log('O livro ' + livroTeste01 + ' tem ' + book(livroTeste01).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var livroTeste02 = 'Livro 02';
console.log('O autor do livro ' + livroTeste02 + ' é ' + book(livroTeste02).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var livroTeste03 = 'Livro 03';
console.log('O livro ' + livroTeste03 + ' foi publicado pela editora ' + book(livroTeste03).editora + '.');
