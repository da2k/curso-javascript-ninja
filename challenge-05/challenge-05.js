/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [true, false, undefined, NaN, []];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFun( a ) {
  return a;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFun(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFun2(arr,num) {
  return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ['Danilo', 1.2, true, null, {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFun2(arr2);


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
function book ( bookName ) {
	// body...
	var todosLivros = {
		'Xhtml': {
			'quantidadePaginas': 202,
			'autor': 'Ana Laura Gomes',
			'editora': 'SENAC SÃO PAULO'
		},		
		'Css3': {
			'quantidadePaginas': 280,
			'autor': 'Maurício Samy Silva',
			'editora': 'SENAC SÃO PAULO'
		},		
		'Html5': {
			'quantidadePaginas': 304,
			'autor': 'Brian P. Hogan',
			'editora': 'Brochura'
		},
	};

	return bookName === undefined ? todosLivros : bookName;
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book().Xhtml.quantidadePaginas);

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Css3 tem', book().Css3.quantidadePaginas, 'páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro Html5 é', book().Html5.autor,'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro Css3 foi publicado pela editora', book().Css3.editora, '.');
