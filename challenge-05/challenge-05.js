/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [
	"Luiz",
	27,
	true,
	function myFunction(){
		return "Olá Mundo";
	},
	null
];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myArray[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr, num){
	return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [
	"Luiz",
	true,
	100,
	"Ninja",
	"last"
];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( myFunction2(myArray2, 0) );
console.log( myFunction2(myArray2, 1) );
console.log( myFunction2(myArray2, 2) );
console.log( myFunction2(myArray2, 3) );
console.log( myFunction2(myArray2, 4) );


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
function book (name){
	var obj = {
		"Harry Potter": {
			quantidadePaginas: 100,
			autor: "autor 1",
			editora: "editora 1"
		},
		"O Senhor dos Anéis": {
			quantidadePaginas: 200,
			autor: "autor2 ",
			editora: "editora 2"
		},
		"Código da Vinci": {
			quantidadePaginas: 300,
			autor: "autor 3",
			editora: "editora 3"
		}
	}

	if (name == undefined){
		return obj;
	}

	return obj[name];
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
console.log("O livro Harry Potter tem " + book("Harry Potter").quantidadePaginas + " páginas");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro O senhor dos Anéis é " + book("O Senhor dos Anéis").autor );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro Código da Vinci foi publicado pela editora " + book("Código da Vinci").editora );