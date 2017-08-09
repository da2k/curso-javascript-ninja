/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var qualquer = [1, true, 'Wallace', {nome:'João', sobrenome:'do Mato'}, null ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

var a = function(array){
    return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(a(qualquer)[1]); // true

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

var dois = function(array, number){
    return array[number];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var five = ['Novo', 100, function(){return 'FUNÇÃO'}, {nome: 'Geraldo', Sobrenome:'Luis'}, false];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(dois(five,0) + ', ' + dois(five,1) + ', ' + dois(five,2) + ', ' + dois(five,3) + ' e ' + dois(five,4));

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
    var obj = {
        primeiro: {quantidadePaginas: 100,
                         autor: 'João',
                         editora: 'Nova'},
        segundo: {quantidadePaginas: 200,
                  autor: 'Marcelo',
                  editora: 'Velha'},
        terceiro: {quantidadePaginas: 300,
                    autor: 'Silvio',
                    editora: 'Atual'}}
    
    return !nomeLivro ? obj : obj[nomeLivro];
};

console.log('=======Teste=======');
console.log(book());
console.log('===================');
console.log(book('primeiro'));
console.log('===================');
console.log(book('segundo'));
console.log('===================');
console.log(book('terceiro'));
console.log('======Fim=========');

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());    

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log('O livro primeiro tem '+ book('primeiro').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro segundo é '+ book('segundo').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log('O livro terceiro foi publicado pela editora '+ book('terceiro').editora +'.');
