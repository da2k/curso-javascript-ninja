/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var vet = [1,2,3,4,5]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
array = [2,4,5,6]

function myVet(a) {
    return a;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myVet(array[2]))

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function valores(arr,val) {
    return arr[val]
}

console.log( valores(array,2) )

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

val = ['a',[],2,!!0,valores(array,2)]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

function returnArray() {
    return val
}

console.log(returnArray())

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

function book(name) {
    
    var livro = {
        'Dom Quixote': {
            quantidadePaginas: 200,
            autor: 'Miguel de Cervantes',
            editora: 'nao lembro'
        },
        'Cem Anos de Solidão': {
            quantidadePaginas: 300,
            autor: 'Gabriel García Márquez',
            editora: 'nao lembro'
        },
        'Em Busca do Tempo Perdido': {
            quantidadePaginas: 500,
            autor: 'Marcel Proust',
            editora: 'nao pesquisei'
        }
        
    };
    return !name ? livro : livro[name]
    // return livro.name;

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log( book() )

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
nomeLivro = 'Dom Quixote'

console.log( 'O livro '+ nomeLivro +' tem '+book('Dom Quixote').quantidadePaginas+' páginas!'  )
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(' O autor do livro '+nomeLivro+' é '+book('Dom Quixote').autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log( 'O livro '+ nomeLivro + ' foi publico pela editora '+ book('Dom Quixote').editora )
