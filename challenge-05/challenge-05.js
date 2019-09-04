/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr =['pato', 10, false, null, 'alo', function() {} ];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arr){
  return arr;
};
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myfunction ( arr)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function miFunction2( arr, index{
         return arr [index];              
            
     }
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [false, 'patolino',[ 1, 10, 'pato'], {c: 2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( miFunction2( myarr2, 0) );
console.log( miFunction2( myarr2, 1) );
console.log( miFunction2( myarr2, 2) );
console.log( miFunction2( myarr2, 3) );
console.log( miFunction2( myarr2, 4) );
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
function book( bookName ){
      var allBooks ={
          'Aliens History' : {
            quantidadePaginas: 200 ,
            autor : 'Fulano',
            editoria: 'Abril'
          },
          'Css Introdução' : {
            quantidadePaginas:150 ,
            autor : 'Ciclano',
            editoria: 'GG'
          },
          'Pynton3': {
            quantidadePaginas:300 ,
            autor : 'Sicrano',
            editoria: 'Age'
          }
      };
      
      if( !bookName ){
        return allBooks;
      } 
      
      return allBooks[ bookName];
      
      return !book ? allBooks[ bookName];
        
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/;
console.log('O livro Aliens History tem '+ book( 'Aliens History').quantidadePaginas + ' páginas!');
*

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro '+ book( 'Css introdução' ).autor + '.' );


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro '+book( 'Python3') + ' foi publicado pela editora ' + book( 'Python3').editora + ' .");
