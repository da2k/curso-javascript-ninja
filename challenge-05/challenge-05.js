/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var meuArray = ['Bruno', 123, null, undefined, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornarArray( arr ){
  return arr;
}
console.log(retornarArray(meuArray));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornarArray(meuArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function retornarIndice( arr , indice ) {
  return arr[indice];
}
console.log(retornarIndice(meuArray,3));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var variavelArray = ['Valor1', 1, null, undefined, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornarIndice(variavelArray, 0));
console.log(retornarIndice(variavelArray, 1));
console.log(retornarIndice(variavelArray, 2));
console.log(retornarIndice(variavelArray, 3));
console.log(retornarIndice(variavelArray, 4));

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
function book( nomeLivro ){
  var todosLivros = {
    'Javascript': {
      quantidadePaginas: 488,
      autor: 'Autor1',
      editora: 'Novatec'
    },
    'WordPress': {
      quantidadePaginas: 503,
      autor: 'Autor2',
      editora: 'Casa Código'
    },
    'React Ninja': {
      quantidadePaginas: 485,
      autor: 'Autor3',
      editora: 'Alta Books'
    }
  };
    return !nomeLivro ? todosLivros : todosLivros[ nomeLivro ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = 'WordPress';
console.log('O livro ' + nomeLivro + ' tem ' + book(nomeLivro).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nomeLivroAutor = 'WordPress';
console.log('O autor do livro ' + nomeLivroAutor + ' é ' + book( nomeLivroAutor ).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nomeLivroEditora = 'Javascript';
console.log('O livro ' + nomeLivroEditora + ' foi publicado pela editora ' + book(nomeLivroEditora).editora);
