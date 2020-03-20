/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
 var array = ['1', 2, 'tres', 4, 'cinco']

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
var myFunction = function(arr){
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
myFunction(array);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
var arrayIndice = function(arr, number){
	return arr[number]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
 var array = ['1', 2, 'tres', 4, 'cinco']

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
 arrayIndice(array, 0)
 arrayIndice(array, 1)
 arrayIndice(array, 2)
 arrayIndice(array, 3)
 arrayIndice(array, 4)


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
// ?

function book(bookName) {
    var allBooks = {
        'Iago': {
            quantidadePaginas: 255,
            autor: 'J. K. Rowling',
            editora: 'Bloomsbury Publishing'
        },
        'Teste': {
            quantidadePaginas: 1232 ,
            autor: 'J. R. R. Tolkien',
            editora: 'Martins Fontes' 
        },
        'Iago2': {
            quantidadePaginas: 462 ,
            autor: 'Jonathan Stroud',
            editora: 'Doubleday' 
        },
    }
    if (!bookName) {
        return allBooks;
    }
       return allBooks[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
book()
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
"O livro Iago tem " + book("Iago").quantidadePaginas  + " Paginas"
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
"O autor do livro Iago é " + book("Iago").autor

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
"O livro Iago foi publicado pela editora " + book("Iago").editora 
