/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array01 = ['valor 01', 2, 3, true, false];
//console.log('array01', array01);

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornarArrayRecebido(arr) { return arr; };

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log('\nImprima o segundo índice do array retornado pela função criada acima.');
console.log(retornarArrayRecebido(array01)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornarValorDoIndice(arr, i) { return arr[i]; };

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array02 = [1, '2', true, false, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log('\nInvoque a função criada acima, fazendo-a retornar todos os valores do último array criado.');
console.log(retornarValorDoIndice(array02, 0));
console.log(retornarValorDoIndice(array02, 1));
console.log(retornarValorDoIndice(array02, 2));
console.log(retornarValorDoIndice(array02, 3));
console.log(retornarValorDoIndice(array02, 4));

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
function book(nomLivro) {
    var livros = {
        'livro1': { quantidadePaginas: 1999, autor: 'Ambrosio', editora: 'LAvros SA'},
        'livro2': { quantidadePaginas: 2300, autor: 'Asdrubal', editora: 'LAvros SA'},
        'livro3': { quantidadePaginas: 5000, autor: 'Teresa', editora: 'Inova'}
    };

    return nomLivro ? livros[nomLivro] : livros;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log('\nUsando a função criada acima, imprima o objeto com todos os livros.');
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('\nAinda com a função acima, imprima a quantidade de páginas de um livro qualquer,usando a frase:"O livro [NOME_DO_LIVRO] tem [X] páginas!"');
var nomLivro = 'livro3';
var livro = book(nomLivro);
console.log('O livro ' +nomLivro+ ' tem ' + livro.quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('\nAinda com a função acima, imprima o nome do autor de um livro qualquer, usando a frase:"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."');
console.log('O autor do livro ' + nomLivro + ' é ' + livro.autor + '.');
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('\nAinda com a função acima, imprima o nome da editora de um livro qualquer, usando a frase:"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."');
console.log('O livro ' + nomLivro + ' foi publicado pela editora ' + livro.editora + '.');

