/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [ 1, "nome", null, false, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function retornaArray(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(qualquer)[1]);
// ele retorna o valor e retorna undefined junto //

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function retornaIndiceArray(arg1, arg2){
  return arg1[arg2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var novaVar = [ 2, "string", null, false, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaIndiceArray(novaVar, 0);
retornaIndiceArray(novaVar, 1);
retornaIndiceArray(novaVar, 2);
retornaIndiceArray(novaVar, 3);
retornaIndiceArray(novaVar, 4);

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
function book(livro) {
	var objeto = {
		'Crime e Castigo': {
			quantidadePaginas: 568,
			autor: ' Dostoievski, Fiodor',
			editora: 'Editora 34'
		},
		'Pais e Filhos': {
			quantidadePaginas: 356,
			autor: 'Ivan Turguêniev',
			editora: 'Cosac Naify'
		},
		'Os Sofrimentos do Jovem Werther': {
			quantidadePaginas: 125,
			autor: 'Goethe',
			editora: 'Martin Claret'
		}
	};
	if ( livro !== undefined ) {
		return objeto.livro;
	} { 
		return objeto;
	}
}
// cara, não consigo retornar o objeto dentro do objeto. ele retorna undefined //
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

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