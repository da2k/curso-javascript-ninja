/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['Luiz', true, 23, null, undefined]


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArray(arr){
... return arr;
... }


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
recebeArray(arr)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function array2(param1, num){
...     return param1[num]
... }


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valoresDiferentes = ['Luiz', true, null, 34, undefined]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
array2(valoresDiferentes, 4)

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
function book(livros){
    var tipoLivros = {
        javascript: {
            quantidadePaginas: 120,
            autor: 'Luiz',
            editora: 'Globo'
        },
        Python: {
            quantidadePaginas: 140,
            autor: 'Evans',
            editora: 'Article'
        },
        php: {
            quantidadePaginas: 160,
            autor: 'Lycia',
            editora: 'Sampa'
        }
    }

    return !livros ? tipoLivros : tipoLivros[livros]

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
'O livro javascript tem ' + book('javascript').quantidadePaginas + ' páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro Python é ' + book('Python').autor

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro PHP foi publicado pela editora ' + book('php').editora + '.'
