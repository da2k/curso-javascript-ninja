/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myqualquer=['ana',0,1,'maria','joao']

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myrecebe(arr){
  return arr
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myrecebe(myqualquer[1]))

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function mytest(arr,num){
  return arr[num]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myvalores=['ana',{doce:'bala'},[1,2,3],0 ,function(){},1]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(mytest=(myqualquer,0))
console.log(mytest=(myqualquer,1))
console.log(mytest=(myqualquer,2))
console.log(mytest=(myqualquer,3))
console.log(mytest=(myqualquer,4))
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
  var obj={
    'alagoaAzul':{
    quantidadePaginas:100,
    autor:'Fulano1',
    editora:'editora1'
  },
   
    'EsqueceramDeMim':{
    quantidadePaginas:110,
    autor:'Fulano2',
    editora:'editora2'
  },
     'aRosa':{
    quantidadePaginas:120,
    autor:'Fulano3',
    editora:'editora2'
  },
   
};
   if(!nomeLivro){
      return obj
    }
  return obj[nomeLivro]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book)
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro alagoaAzul tem"+book(' alagoaAzul').quantidadePaginas+" páginas!")

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro alagoaAzul é"+book('alagoaAzul').autor+"."

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro alagoaAzul foi publicado pela editora"+book('alagoaAzul').editora+".")
