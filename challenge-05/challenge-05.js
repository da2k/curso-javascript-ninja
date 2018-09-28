/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
	var arrayAleatorio = [1,'teste', function(){}, 10.5, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
	function retornaArray(x){
		return x;
	}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
	console.log(retornaArray(arrayAleatorio)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
	function recebeDoisParametros(array,num){
		return array[num];
	}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
	var arrayValoresDiferentes =  [1,'teste', function(){}, 10.5, {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
	recebeDoisParametros(arrayValoresDiferentes,0);
	recebeDoisParametros(arrayValoresDiferentes,1);
	recebeDoisParametros(arrayValoresDiferentes,2);
	recebeDoisParametros(arrayValoresDiferentes,3);
	recebeDoisParametros(arrayValoresDiferentes,4);

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
		var objeto =  {
			'Senhor dos Aneis':{
				quantidadePaginas:800,
				autor:'Tolkien',
				editora:'martin fontes'
			},
			'Hobbit':{
				quantidadePaginas:300,
				autor:'Tolkien',
				editora:'martin fontes'
			},
			'Cronicas de Narnia':{
				quantidadePaginas:500,
				autor:'Lewis',
				editora:'martin fontes'
			}
		}
		//return nomeLivro!==undefined ? objeto[nomeLivro] : objeto;
		return !!nomeLivro ? objeto[nomeLivro] : objeto;
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
	var bookName = 'Senhor dos Aneis';
	console.log("O livro " + bookName + " tem "+ book(bookName).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
	console.log("O autor do livro " + bookName + " é "+ book(bookName).autor + ".");	

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
	console.log("O  livro " + bookName + " foi publicado pela editora "+ book(bookName).editora + ".");		