/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 
var myArray = [gato,cachorro,pato,papagaio,rato];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 
function functionArray(pArray){
  return pArray;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
//  
  console.log(functionArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// 
  function myFunction(pArray,pNum){
    return pArray[pNum];
  }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// 
  var myArrayAux = [1,'1',true,{a:1},undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// 
  console.log( myFunction( myArrayAux , 0 ) );
  console.log( myFunction( myArrayAux , 1 ) );
  console.log( myFunction( myArrayAux , 2 ) );
  console.log( myFunction( myArrayAux , 3 ) );
  console.log( myFunction( myArrayAux , 4 ) );

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
//  
  function book(pNome){
    var livros = {
            'Livro 1' : {'quantidadePaginas' : 12, 'autor' : 'Joao',  'editora' : 'Abril'},
            'Livro 2' : {'quantidadePaginas' : 13, 'autor' : 'Juan',  'editora' : 'Março'},
            'Livro 3' : {'quantidadePaginas' : 14, 'autor' : 'Joana', 'editora' : 'Maio'},
    };
    if(pNome){
     return livros[ pNome ];
    }else{
      return livros;
    }
    
  }

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// 
  console.log( book(null) );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// 
console.log( 'O livro Livro 1 tem ' + book('Livro 1').quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// 
console.log( 'O autor do livro Livro 1 é ' + book('Livro 1').autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log( 'O livro Livro 1 foi publicado pela editora ' + book('Livro 1').aditora + '.' );
