/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['0', 0, 'willians', 'null', true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function funcao(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
funcao(array[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function novaFuncao(arr, n){
	return arr[n];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [25, 'willians', null, [null, false, '2'], {id: "5"}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
novaFuncao(array, 0); //25
novaFuncao(array, 1); //'willians'
novaFuncao(array, 2); //null
novaFuncao(array, 3); //[null, false, '2']
novaFuncao(array, 4); //{id: "5"}

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
	var livros = {
	    'livro1' : {
	        quantidadeDePaginas: 251,
	        autor: 'joão',
	        editora: 'deitel'
	        },
	    'livro2' : {
	        quantidadeDePaginas: 122,
	        autor: 'jose',
	        editora: 'novabook'
	        },
	    'livro3' : {
	        quantidadeDePaginas: 352,
	        autor: 'maria',
	        editora: 'atlas'
	        }
	};


	return !nomeLivro? livros : livros[nomeLivro] 

} 	


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(); /*livro1: {quantidadeDePaginas: 251, autor: "joão", editora: "deitel"}
			livro2: {quantidadeDePaginas: 122, autor: "jose", editora: "novabook"}
				livro3: {quantidadeDePaginas: 352, autor: "maria", editora: "atlas"}
				*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = 'livro1';
  console.log("O livro "+nomeLivro+" tem "+book(nomeLivro).quantidadeDePaginas+" paginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nomeLivro = 'livro2';
console.log("O autor do livro "+nomeLivro+" é "+book(nomeLivro).autor+" !");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nomeLivro = 'Livro3';
console.log("O livro "+nomeLivro+" foi publicado pela editora "+book(nomeLivro).editora+".");
