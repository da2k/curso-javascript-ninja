/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [ 'ninja', 2,-3, undefined, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcArray (arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(funcArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function novaFunc (array, numero){
    return array[numero];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var novoArray = [ 'natalia', undefined, null, NaN, 0];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(novaFunc(novoArray, 0));
console.log(novaFunc(novoArray, 1));
console.log(novaFunc(novoArray, 2));
console.log(novaFunc(novoArray, 3));
console.log(novaFunc(novoArray, 4));

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
function book (nomeLivro){
   var livros = {

      'Livro Um' : {
        quantidadePaginas: 60,
        autor : 'fulano',
        editora : 'da esquina'
      },
      'Livro Dois' : {
        quantidadePaginas: 30,
        autor : 'fulana',
        editora : 'ZeroEditora'
      },
      'Livro Tres' : {
        quantidadePaginas: 100,
        autor : 'ze',
        editora : 'Editora Real'

      },
    };

   return !nomeLivro ? livros : livros[nomeLivro];

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
console.log('O livro Um tem ' + book( 'Livro Um' ).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Dois é ' + book('Livro Dois').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Tres foi publicado pela editora ' + book('Livro Tres').editora);
