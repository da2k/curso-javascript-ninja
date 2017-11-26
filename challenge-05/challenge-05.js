/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ["Tuanny", 24, true, "Dev", 1.7];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function newFunction(arg) {
  return arg;
}
newFunction(myArray);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(newFunction(myArray)[2]); //true

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function otherFunction(arr, num){
  return arr[num]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otherArray = [1, true, null, "Teste", {propriedade: "valor"}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
console.log(otherFunction(otherArray, 0));
console.log(otherFunction(otherArray, 1));
console.log(otherFunction(otherArray, 2));
console.log(otherFunction(otherArray, 3));
console.log(otherFunction(otherArray, 4));

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
function book(title) {
	var livros = {
		mindset: {
			quantidadePaginas: 342,
			autor: "Carol Dweck",
			editora: "Objetiva"
		},
		garra: {
			quantidadePaginas:334,
			autor: "Angela Duckworth",
			editora: "Intrínseca"
		},
		sprint: {
			quantidadePaginas: 267,
			autor: "Jake Knapp",
			editora: "Intrínseca"
		}
	}

	return !title ? livros : livros[title];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = "garra";
console.log("O livro " + livro + " tem " + book(livro).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + livro + " é " + book(livro).autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O autor do livro "+ livro + " foi publicado pela editora " + book("garra").editora);
