/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myVar = ["Mimi", 11, 23, 1.65, 60];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction (array){
	return myVar;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(myVar)[1]; //11

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(array, indice){
	return array[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var tiposDiferent = ["Mimi", 2022, [1,2,3], myFunction(myVar, 2), true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2(tiposDiferent, 2);

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
	let caracteristicas = {
		'O Caminho Do Guerreiro Pacifico': {
				quantidadePaginas: 250,
				autor: "Dan Millman",
				editora: "Saraiva"
			},
		'O Diario De Um Mago': {
				quantidadePaginas: 300,
				autor: "Paulo Coelho",
				editora: "Amazon"
			},
		'O Alquimista': {
				quantidadePaginas: 235,
				autor: "Paulo Coelho",
				editora: "Amazon"
		}
	};

    let resultado = !nome ? caracteristicas : caracteristicas[nome];
    
    return resultado;
	
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
*/
let livro = "O Alquimista";
console.log("O livro "+livro+" tem " +book(livro).quantidadePaginas+ " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor do livro "+livro+" é "+book(livro).autor+".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro "+livro+" foi publicado pela editora "+book(livro).editora+".");
