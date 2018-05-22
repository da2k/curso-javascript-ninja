/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var valores = ["propriedade", 5, true, null, "vida", false];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retorna(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retorna(valores)[1]; //5

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function recebe(arg, num) {
  return arg[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vetor = ["rua", true, null, 3.5, 45];

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
  var obj = {
    livro1: {
      quantidadePaginas: 1541,
      autor: 'Livro 1',
      editora: 'Editora 1'
    },
    livro2: {
      quantidadePaginas: 1542,
      autor: 'Livro 2',
      editora: 'Editora 2'
    },
    livro3: {
        quantidadePaginas: 1543,
        autor: 'Sei lá 3',
        editora: 'Editora 3'
    }
  }

  if (nomeLivro === 'IAN1'){
    return obj.livro1;
  }
  if (nomeLivro === 'IAN2'){
    return obj.livro2;
  }
  if (nomeLivro === 'IAN3'){
    return obj.livro3;
  }
  return obj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
function detalhesLivro(book) {
  return "O livro IAN1 tem [X] páginas!"
}

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
