/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var valores = [ 1, 3, 'Michael', 'JavaScript' ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(a) {
  return a;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(valores)[1]);
3
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function retornaValores(arrayVar, num) {
    return arrayVar[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var variado = [ 10, 'Michael', true, false, null  ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// Não entendi a solicitação, é para invocar o método criado acima, correto?
> variado
[ 10, 'Michael', true, false, null ]

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
function book(livro){           
var obj = {                     
       prop1: {                 
         quantidadePaginas: 100,
         autor: 'George Peters',
         editora: 'Globo'
       },     
       prop2: {                 
         quantidadePaginas: 120,
         autor: 'Lara Silva',   
         editora: 'Abril'
       },     
       prop3: {                 
         quantidadePaginas: 964,     
         autor: 'Eduardo Sales',
         editora: 'Novatec'
       }
   }
   if ( livro === undefined ) { 
   	return obj;
   }
   if ( livro === 1 ) { 
   	return obj.prop1;
   }else if ( livro === 2 ) {
  	return obj.prop2;
   }else if ( livro === 3 ) {
  	return obj.prop3;
   }else {
  	return 'Livro passado não existe';
  }
}
     


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
> var nomeLivro = 1;
undefined
> console.log('O livro ' + nomeLivro + ' tem ' + book(nomeLivro).quantidadePaginas + ' páginas!');
O livro 1 tem 100 páginas!
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
> console.log('O autor do livro ' + nomeLivro + ' é ' + book(nomeLivro).autor + '.');
O autor do livro 1 é George Peters.
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
> console.log('O livro ' + nomeLivro + ' foi publicado pela editora ' + book(nomeLivro).editora + '.');
O livro 1 foi publicado pela editora Globo.