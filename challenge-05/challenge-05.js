/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var a = [1,true,false,0,null];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function arrayFunction(array){
        return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log( arrayFunction( a[2] ) ) 

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function  arrayValorFunction(array,valor){
           return arrayFunction(array)[valor]
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var b = [true,false,0,1,null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log( arrayValorFunction( b ,0) )
console.log( arrayValorFunction( b ,1) )
console.log( arrayValorFunction( b ,2) )
console.log( arrayValorFunction( b ,3) )
console.log( arrayValorFunction( b ,4) )


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


function  book(nome){ 

	var livros = {

            rangers:{
            	quantidadePaginas:240,
            	autor:"john flanagan",
            	editora:"Fundamento"

            },
            culpadaestela:{
                quantidadePaginas:286,
            	autor:"john green",
            	editora:"intrinseca"

            },
            leite:{
                quantidadePaginas:354,
            	autor:"kiera cass",
            	editora:"seguinte"
            }

	};
	return nome ? livros[nome] : livros;

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
console.log(`O livro rangers tem ${book("rangers").quantidadePaginas} páginas!.`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(`O autor do livro culpa da estela é ${book("culpadaestela").autor}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log(`O livro a Eleite foi publicado pela editora ${book("leite").editora }.`)

