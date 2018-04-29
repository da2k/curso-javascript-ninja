/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = ['Índice 01','Índice 02','Índice 03','Índice 04','Índice 05'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arrayParam) {
  return arrayParam;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(' - ' + retornaArray(meuArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaValorNoIndice(array, indice) {
  return array[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayComplexo = ['nome',2,true,{nome:'Fernando', sobrenome: 'Ramon'},meuArray];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(' - ' + retornaValorNoIndice(arrayComplexo,0));
console.log(' - ' + retornaValorNoIndice(arrayComplexo,1));
console.log(' - ' + retornaValorNoIndice(arrayComplexo,2));
console.log(' - ' + retornaValorNoIndice(arrayComplexo,3));
console.log(' - ' + retornaValorNoIndice(arrayComplexo,4));

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
  var catalogo = {
    'Crime e Castigo' : {
        quantidadePaginas: 561,
        autor: 'Fiódor Dostoiévski',
        editora: 'EDITORA 34'
    },
    'O Hobbit' : {
      quantidadePaginas: 227,
      autor: 'J.R.R.Tolkien',
      editora: 'Artenova'
    },
    'O Imbecil Coletivo' : {
      quantidadePaginas: 632,
      autor: 'Olavo de Carvalho',
      editora: 'E Realizações'
    }
  }
  return !nomeLivro ? catalogo : catalogo[nomeLivro];
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
console.log('O livro O Hobbit tem ' + book('O Hobbit').quantidadePaginas + ' paginas' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro O Imbecil Coletivo é ' + book('O Imbecil Coletivo').autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Crime e Castigo foi publicado pela editora ' + book('Crime e Castigo').editora);
