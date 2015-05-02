/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1, 2, 3, 4, 5];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function ShowArray(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
ShowArray(array)[2];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function ShowArray2(arr, i){
	return arr[i];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = [1, null, "oi", true, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
ShowArray2(array2, 0);
ShowArray2(array2, 1);
ShowArray2(array2, 2);
ShowArray2(array2, 3);
ShowArray2(array2, 4);

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
function book(bookname){
	var table = {
		"bookname1": {
			quantidadePaginas: 100,
			autor: "Fernando Daciuk",
			editora: "Uma ai"
		},
		"bookname2": {
			quantidadePaginas: 200,
			autor: "Mateus Jabour",
			editora: "Aquela"
		},
		"bookname3": {
			quantidadePaginas: 10,
			autor: "Fulano",
			editora: "Outra la"
		}
	}

		if (bookname !== undefined){
			return table[bookname];
		}else{
			return table;
		}

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
'O livro bookname1 tem ' + book(bookname1).quantidadePaginas + ' paginas!';

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro bookname1 e ' + book('bookname1').autor + '.';

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro bookname1 foi publicado pela editora' + book(bookname1) + '.';