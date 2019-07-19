/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var amanda = [true, 'eu', 2, 'false', 1];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function amandinha(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
amandinha(amanda)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function amandao (array, numero) {
 return array[numero];
}
  

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [true, "string", ['eu', 2], {tu: 3}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
amandao (array, 0);
amandao (array, 1);
amandao (array, 2);
amandao (array, 3);
amandao (array, 4);


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
function livros(nomeLivro){
 var todosLivros = {
   'Mundo Fantasia':{
    quantidadePaginas: 120,
    autor: "Amanda Almeida",
    editora: "Abril"
   },
   'Shadowtrous': {
    quantidadePaginas: 210,
    autor: "Amanda Matos",
    editora: "Bombril"
   },
   'Mutantes':{
    quantidadePaginas: 102,
    autor: "Amanda Almeida Matos",
    editora: "Arqueiro"
   }
 };
return !nomeLivro ? todosLivros : todosLivros[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
livros(); /*
{ 'Mundo Fantasia':
   { quantidadePaginas: 120,
     autor: 'Amanda Almeida',
     editora: 'Abril' },
  Shadowtrous:
   { quantidadePaginas: 210,
     autor: 'Amanda Matos',
     editora: 'Bombril' },
  Mutantes:
   { quantidadePaginas: 102,
     autor: 'Amanda Almeida Matos',
     editora: 'Arqueiro' } } /*

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
"O livro Mundo Fantasia tem " + livros("Mundo Fantasia").quantidadePaginas + " páginas!" //O livro Mundo Fantasia tem 120 páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
 "O autor do livro Shadowtrous é " + livros("Shadowtrous").autor + "." //'O autor do livro Shadowtrous é Amanda Matos.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro Mutantes foi publicado pela editora " + livros("Mutantes").editora + "." //'O livro Mutantes foi publicado pela editora Arqueiro.'
