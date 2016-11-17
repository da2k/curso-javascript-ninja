/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [3,2,6,7,9];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray(arr){
	return arr;
}; 

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
recebeArray(qualquer)[1]; // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(arr,num){
 return arr[num]
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArrayValores = ['carro', 1, true, false, 'Luana'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(myArrayValores, 0 );
myFunction(myArrayValores, 1 );
myFunction(myArrayValores, 2 );
myFunction(myArrayValores, 3 );
myFunction(myArrayValores, 4 );

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
function book(livro){
	var nomeLivros = {
		livro1:{
			titulo: 'Livro1',
			quantidadePaginas:10,
			autor:'Luana',
			editora:'Abril'
		},
		livro2:{
			titulo: 'Livro2',
			quantidadePaginas:20,
			autor:'Fulano',
			editora:'Abril'
		},
		livro3:{
			titulo: 'Livro3',
			quantidadePaginas:30,
			autor:'Ciclano',
			editora:'Abril'
		},
		livro4:{
			titulo: 'Livro4',
			quantidadePaginas:40,
			autor:'Beutrano',
			editora:'Abril'
		}
	};
	if (livro === undefined) {
		return nomeLivros;
	}; 
	return nomeLivros[livro]
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro' + ' ' + book('livro1').titulo + ' ' + 'tem' + ' ' + book('livro1').quantidadePaginas + ' ' + 'páginas!';

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

'O autor do livro' + ' ' + book('livro1').titulo + ' ' + 'é' + ' ' + book('livro1').autor;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro' + ' ' + book('livro1').titulo + ' ' + 'foi publicado pela editora' + ' ' + book('livro1').editora;