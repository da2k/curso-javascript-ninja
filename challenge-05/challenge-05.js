/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 
let valoresAleatorios  = ['gilmara', 1977, 28, 'abril', 'pimentel'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 
function recebeArray(array){

    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?

let test = recebeArray(valoresAleatorios)[1]

//console.log(test)
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

function doisParametros(array, x){

    return array[x]
}

//console.log(doisParametros([1,'b',7, 'gilmara'],3))
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
let array5Valores = [47, 'valor', null, { nome: 'gilmara'},  function(){ return 'ola'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
//console.log(recebeArray(array5Valores))

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

function book(bookTitle){ 

    let library = {

        'nome Livro 1':  { 
            quantidadePaginas: 150, 
            autor: 'Maria', 
            editora: 'abril' 
        },
        'nome Livro 2': { 
            quantidadePaginas: 400, 
            autor: 'Ivelise', 
            editora: 'marquil'
        },
        'nome Livro 3': { 
            quantidadePaginas: 185, 
            autor: 'Zalya', 
            editora: 'pompeia' 
        }
    };


    return !bookTitle ? library :  library[bookTitle]




}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?


console.log(book())



/*Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:*/

let bookName = 'nome Livro 1'

console.log('O livro ' + bookName  + ' tem ' + book(bookName).quantidadePaginas + ' páginas!')


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase: */
console.log('O autor do livro '  + bookName  + ' é ' + book(bookName).autor)
// podemos chamar a propriedade assim tambem
console.log('O autor do livro '  + bookName  + ' é ' + book(bookName)['autor'])



/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:*/
console.log('O livro '  + bookName  + ' foi publicado pela editora ' + book(bookName).editora)


// Isso aqui book('nome Livro 1')  -- me retorna o objeto....dai e so chamar as propriedades do objeto...
// Isso aqui retorna todos os livros  book() 
// // podemos chamar a propriedade assim tambem
// Podemos chamar a propriedade assim tambe:
//console.log('O autor do livro "nome Livro 3" é ' + book('nome Livro 3')['autor'])

// Criamos uma variavel chamda bookname para substituir repeticao de codigo.
// Veja como aplicamos isso acimando


