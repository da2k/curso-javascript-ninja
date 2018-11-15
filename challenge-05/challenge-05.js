/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

	var myArray = [ 1, "Rodrigo", true, 1.8, "JavaScript"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
	
	function functionArray (arr) {
		return arr;
	}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

	console.log(functionArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
 
  function functionArray2 (arr, x) {
		return arr[x];
	}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

	var myArray2 = [18, undefined, "Array", 1.5, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/


	console.log(functionArray2(myArray2, [0]));
	console.log(functionArray2(myArray2, [1]));
	console.log(functionArray2(myArray2, [2]));
	console.log(functionArray2(myArray2, [3]));
	console.log(functionArray2(myArray2, [4]));

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

	function book(nome){
		var obj = {
			"O pequeno principe": {
				quantidadePaginas: 96,
				autor: "Antoine de Saint-Exupéry",
				editora: "Sequinte"
			},
			"Extraordinário":{
				quantidadePaginas: 320,
				autor: "R. J. Palacio",
				editora: "Intrínseca"
			},
			"As Crônicas de Nárnia":{
				quantidadePaginas: 752,
				autor: "C. S. Lewis",
				editora: "WMF Martins Fontes"
			}
		}
	return !nome ? obj :  obj[nome];
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

	var livro = 'O pequeno principe';
	console.log("O livro " + livro + " tem " + book(livro).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

	var livro1 = 'Extraordinário';
	console.log("O autor do livro " + livro1 + " é " + book(livro1).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

	var livro2 = 'O pequeno principe';
	console.log("O livro " + livro2 + " foi publicado pela editora " + book(livro2).editora + ".");
