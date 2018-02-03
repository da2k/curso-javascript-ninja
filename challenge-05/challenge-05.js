/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [0, 1, 2, 3, 4];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retorna_array( arg ) {
    console.log( arg );
}

/*----------------*/
function retorna_array( arg ) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retorna_array( arr[2] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function retorna_indice ( arr, num ) {
  console.log( arr[num] );  
};

//retorna_indice(arr, 3);

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array = [1, true, 'string', null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retorna_array( array[1] );

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
function book( name ) {
    
    if( name == undefined ) {
        
        return {
        
            livro1: {
                quantidadePaginas: 343,
                autor: 'Autor A',
                editor: 'editora A',
            },
            
            livro2: {
                quantidadePaginas: 454,
                autor: 'Autor B',
                editora: 'editora B'
            },
            
            livro3: {
                quantidadePaginas: 565,
                autor: 'Autor C',
                editora: 'editora C'
            }
        
        }
        
    } else if (name === 'livro1') {
        
        return book().livro1;
        
    } else if (name === 'livro2') {
        
        return book().livro2;
        
    } else {
        
        return book().livro3;
        
    }
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
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?