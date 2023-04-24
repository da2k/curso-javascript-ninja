/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [5,10,15,20,25]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg){
	return arg
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(qualquer)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(arg1, arg2){
	return arg1[arg2];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = ['Tonho', 25, true, 25.5, {gato: 'gato'}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(arr, 0);
myFunction(arr, 1);
myFunction(arr, 2);
myFunction(arr, 3);
myFunction(arr, 4)

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
function book(book){
    var books = {'book1': {quantidadeDePaginas: 100, autor: 'tonho', editora: 'tomba'}, 'book2': {quantidadeDePaginas: 609, autor: 'tonco', editora: 'tonca'}, 'book3': {quantidadeDePaginas: 930, autor: 'tonim', editora: 'toim'} }
    return !book ? books : books[book]
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log(`O livro Book1 tem ${book().book1.quantidadeDePaginas} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log(`O Autor do livro Book1 é ${book().book1.autor}`);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Book1 foi publicado pela editora ${book().book1.editora}`)
