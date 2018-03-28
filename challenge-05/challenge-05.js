/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myvar = [ 1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arra){
return arra;
};


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myvar)[1]);//1

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function otherFunction(arrValue,number){
return arrValue[number];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otherVar = [ 'aluna', 10.4, 1 , true, [8,7,6]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
otherFunction(otherVar,0);
otherFunction(otherVar,1);
otherFunction(otherVar,2);
otherFunction(otherVar,3);
otherFunction(otherVar,4);

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

function book(nomedoLivro) {
  var bookObj = { 
    livro1: { 
      quantidadedePaginas:2,
      autor: 'fulano',
      editora: 'um'
    },
    livro2: { 
      quantidadedePaginas:3,
      autor: 'cicllano',
      editora: 'dois'
    }, 
    livro3: { 
      quantidadedePaginas:4,
      autor: 'beltrano',
      editora: 'três'
    }
  };
  if (nomedoLivro === undefined) { 
  return bookObj;
  };
  return bookObj[nomedoLivro];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
/*{ livro1: { quantidadedePaginas: 2, autor: 'fulano', editora: 'um' },
  livro2: { quantidadedePaginas: 3, autor: 'cicllano', editora: 'dois' },
  livro3: { quantidadedePaginas: 4, autor: 'beltrano', editora: 'três' } }
*/
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro livro1 tem ' + book('livro1').quantidadedePaginas  + ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro1 é ' + book('livro1').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro livro1 foi publicado pela editora ' + book('livro1').editora + '.');
