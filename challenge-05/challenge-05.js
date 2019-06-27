/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

    var aleatoria = ['Nome Completo', true, 10, false, Infinity]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

    function teste(array){
        return array
    }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

    console.log(teste(aleatoria)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

    function teste2(arr, indice){
        return arr[indice]
    }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
    var array = ['Pedro', 'Leandro', 'Silvano', 'Junior']

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/  
    console.log(teste2(array, 0))
    console.log(teste2(array, 2))

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
            let obj ={
                'laravel-iniciantes':{qntPaginas:151, autor:'Leandro Passini', editora:'Caelum'},
                'javascript-ninja':{qntPaginas:100, autor:'Fernando Daciuk', editora:'Ninja Masters'},
                'cangaceiro-javascript':{qntPaginas:151, autor:'Leandro Passini', editora:'Caelum'}
            }
            if(!nomeLivro){
                return obj
            }
            return obj[nomeLivro]
        }
console.log('-------------------------------------------------------------------------------------')
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
        console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
        console.log('O livro laravel-iniciantes tem '+book('laravel-iniciantes').qntPaginas+' páginas')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
        console.log('O autor do livro javascript-ninja é :'+book('javascript-ninja').autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
        console.log('O livro cangaceiro-javascript foi publicado pela editora '+book('cangaceiro-javascript').editora)
