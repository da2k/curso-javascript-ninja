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
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
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
    
    var acervo = {
        'Livro A': {
            quantidadePaginas: 343,
            autor: 'Autor A',
            editora: 'Editora A'
        },
        
        'Livro B': {
            quantidadePaginas: 454,
            autor: 'Autor B',
            editora: 'Editora B'
        },
        
        'Livro C': {
            quantidadePaginas: 656,
            autor: 'Autor C',
            editora: 'Editora C'
        },
        
        getPages: function( name ) {
            
            return 'O ' + [ name ] + ' tem ' + acervo[ name ].quantidadePaginas + ' páginas!'
            
        },
        
        getAuthor: function( name ) {
            
            return 'O autor do ' + [ name ] + ' é ' + acervo[ name ].autor + '.';
            
        },
        
        getEditor: function( name ) {
            
            return 'O ' + [ name ] + ' foi publicado pela ' + acervo[ name ].editora + '.';
            
        }
        
    };
    
    return !name ? acervo : acervo[ name ];
    
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
book().getPages('Livro A');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
book().getAuthor('Livro B');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
book().getEditor('Livro C');

