/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['text', 60, false, null, 'value'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array){
	return array;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(array)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(array, indice){
	return array [ indice ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = ['text', 9, false, undefined, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2( array2, 0 ));
console.log(myFunction2( array2, 1 ));
console.log(myFunction2( array2, 2 ));
console.log(myFunction2( array2, 3 ));
console.log(myFunction2( array2, 4 ));

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
function book(nomeDoLivro) {
	var todosOsLivros = {
		'livro1' : {
			quantidadePaginas : 15,
			autor: 'autor1',
			editora: 'editora1'
		},
		'livro2' : {
			quantidadePaginas : 25,
			autor: 'autor2',
			editora: 'editora2'
		},
		'livro3' : {
			quantidadePaginas : 35,
			autor: 'autor3',
			editora: 'editora3'
		}
	};
	return !nomeDoLivro ? todosOsLivros : todosOsLivros[nomeDoLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O livro livro1 tem ' + book('livro1').quantidadePaginas + ' páginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro livro2 é ' + book('livro2').autor )

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro livro3 foi publicado pela editora ' + book('livro3').editora )