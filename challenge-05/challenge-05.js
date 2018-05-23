/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var valores = [ "propriedade", 5, true, function() {}, { d : 3}, false ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retorna( arg ) {
  return arg;
}

// var func = function( arg ) {
//   return arg
// };

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( retorna(valores)[1] ); //5

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function recebe( arg, num ) {
  return arg[ num ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vetor = [ "rua", true, null, {alane : 'alane'}, 45 ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(recebe(vetor, 0));
console.log(recebe(vetor, 1));
console.log(recebe(vetor, 2));
console.log(recebe(vetor, 3));
console.log(recebe(vetor, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do livro.

Dentro dessa função, declare uma variável que recebe um objeto com as seguintes características:
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

  var obj = {
    'Irmandade da Adaga Negra 1' : {
      quantidadePaginas : 2561,
      autor : 'JR Ward1',
      editora : 'Moderna1'
    },
    'Irmandade da Adaga Negra 2' : {
      quantidadePaginas : 2562,
      autor : 'JR Ward2',
      editora : 'Moderna2'
    },
    'Irmandade da Adaga Negra 3' : {
      quantidadePaginas : 2563,
      autor : 'JR Ward3',
      editora : 'Moderna3'
    }
  }

  return !nomeLivro ? obj : obj [nomeLivro]
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
console.log( 'O livro Irmandade da Adaga Negra 3 tem ' + book('Irmandade da Adaga Negra 3').quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro Irmandade da Adaga Negra 2 é ' + book('Irmandade da Adaga Negra 2').autor )

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro Irmandade da Adaga Negra 1 foi publicado pela editora ' + book('Irmandade da Adaga Negra 1').editora )
