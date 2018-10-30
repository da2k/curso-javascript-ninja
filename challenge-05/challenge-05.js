/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
//

const arr = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
//

function newArra( param ) {
  return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
//

console.log(newArra(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
//

function retArr(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
//

const newArr = [1, 'filippo', true, {carro: 'Gol', ano: 2018}, [0,1,2]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
//
retArr(newArr, 1);

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
//

function book( bookName ) {
  const allBooks = {
    'Eloquent Javascript': {
      quantidadePaginas: 100,
      autor: 'Marijn Haverbeke',
      editora: 'Gitbooks'
    },
    'O Segredo': {
      quantidadePaginas: 80,
      autor: 'Qualquer',
      editora: 'Sextante'
    },
    'Introducao ao HTML5': {
      quantidadePaginas: 200,
      autor: 'Filippo',
      editora: 'Gitbooks'
    }
  };

  return !bookName ? allBooks : allBooks[ bookName ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
//

console.log(book());



/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
//

console.log(`O livro Introducao ao HTML5 tem ${book( 'Introducao ao HTML5' ).quantidadePaginas} páginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

console.log(` O autor do livro Eloquent Javascript é ${book('Eloquent Javascript').autor}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
//

console.log(`O livro Eloquent Javascript foi publicado pela editora ${book('Eloquent Javascript').editora}`);
