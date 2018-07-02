/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var vetor = [ 'Ninja', 'Pupilo', 30, true, 'javascript']

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arr(arg){
	return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(arr(vetor[1])); // Pupilo.

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function newFunction ( args1, args2 ) {
	return args1[args2];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newVetor = ['Javascript', true, 30, null, undefined]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
newFunction(newVetor, 0);
newFunction(newVetor, 1);
newFunction(newVetor, 2);
newFunction(newVetor, 3);
newFunction(newVetor, 4);


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
function book( livroNome ){
  var livros = { 
    'Javascript Ninja': {
      paginas: 450,
      autor: 'Fernando Daciuk',
      editora: 'Vem ser ninja'
    },

    'Obey The Testing Goat': {
      paginas: 600,
      autor: 'Harry J. W. Percival',
      editora: 'O Reilly'
    },

    'Domain Driven Design': {
      paginas: 529,
      autor: 'Eric Evans',
      editora: 'Addison-Wesley'
    }
  }
  return !livroNome  ? livros : livros[ livroNome ];  
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book()); // { 'Javascript Ninja': { paginas: 450, autor: 'Fernando Daciuk', editora: 'Vem ser ninja' }, 'Obey The Testing Goat': { paginas: 600, autor: 'Harry J. W. Percival', editora: 'O Reilly' }, 'Domain Driven Design': { paginas: 529, autor: 'Eric Evans', editora: 'Addison-Wesley' } }

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] paginas!"
*/ 
console.log('O livro Obey The Testing Goat, tem ' + book('Obey The Testing Goat').paginas + ' páginas!'); // O livro Obey The Testing Goat, tem 600 páginas! 

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Javascript Ninja é o ' + book('Javascript Ninja').autor); // O autor do livro Javascript Ninja é o Fernando Daciuk.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('A editora do livro Domain Driven Design é a ' + book('Domain Driven Design').editora); // A editora do livro Domain Driven Design é a Addison-Wesley
