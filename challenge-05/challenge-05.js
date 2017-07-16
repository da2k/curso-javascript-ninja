/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array1 = [1,2,3,'4',5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaValor(valor) {
  return valor;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaValor(array1)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function retornaValorArray(array, indice) {
  return array[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = [1,2,3,4,5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaValorArray(array2, 0));
console.log(retornaValorArray(array2, 1));
console.log(retornaValorArray(array2, 2));
console.log(retornaValorArray(array2, 3));
console.log(retornaValorArray(array2, 4));

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
    clean_code: {
      quantidadePaginas: 422,
      autor: 'Robert C. Martin',
      editora: 'Alta Books'
    },
    domain_driven_design: {
      quantidadePaginas: 498,
      autor: 'Eric Evans',
      editora: 'Alta Books'
    },
    segredos_do_ninja_javascript: {
      quantidadePaginas: 488,
      autor: 'Jhon Resig/Bear Bibeault',
      editora: 'Novatec'
    }
  };

  return nomeLivro === undefined ? livros : livros[nomeLivro];
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
console.log('O livro Clean Code tem ' + book().clean_code.quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Domain Driven Design é ' + book().domain_driven_design.autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O autor do livro Segredos do ninja javascript foi publicado pela editora ' + book().domain_driven_design.editora) + '.';