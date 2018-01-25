/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var vetor = [ 2, 'JavaScript' , null, {prpriedade: 1}, function() {} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray(array){

	return array;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(recebeArray(vetor[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(array, indice){

	return array[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var test = [1, 'JavaScript', true, [1, 2, 'teste'], null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (i = 0; i <= 4; i++){

	console.log(myFunction(test,i));
}

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
function book(nomeLivro){

	var Todoslivros = {
		'Jogos com HTML5 e Canvas': {
			quantidadePaginas: 50,
			autor: 'Fabricio',
			editora: 'casa do codigo'
		},
		'Java como Programar': {
			quantidadePaginas: 1200,
			autor: 'Deitel',
			editora: 'Novatec'
		},
		'Effective Java': {
			quantidadePaginas: 1150,
			autor: 'Joshua Bloch',
			editora: 'Novatec'
		}

	};


	return !nomeLivro ? Todoslivros : Todoslivros[nomeLivro];
	
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
var nomeLivro = 'Java como Programar';
console.log('O livro ' + nomeLivro + ' tem ' + book(nomeLivro).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + nomeLivro + ' é ' + book(nomeLivro).autor);


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]. p" 
*/
console.log('O livro ' + nomeLivro + ' foi publicado pela editora ' + book(nomeLivro).editora);
// ?
