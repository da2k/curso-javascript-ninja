/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [0, 1, 2, 3, 4];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(array){
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray(array)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaArrayPosicao(array, posicao){
  return array[posicao];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayVariado = [0, '1', true, NaN, {nome: 'jefferson', sobrenome: 'eduardo'}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaArrayPosicao(arrayVariado, 0); //0
retornaArrayPosicao(arrayVariado, 1); //"1"
retornaArrayPosicao(arrayVariado, 2); //true
retornaArrayPosicao(arrayVariado, 3); //NaN
retornaArrayPosicao(arrayVariado, 4); //Object { nome: "jefferson", sobrenome: "eduardo" }

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
  var livros = { livro1: { nome: 'Livro1',
                          quantidadePaginas: 10,
                          autor: 'João',
                          editora: 'Saraiva'},
                livro2: { nome: 'Não sei',
                          quantidadePaginas: 15,
                         autor: 'Maria',
                         editora: 'Funcesi'},
                livro3: { nome: 'Qual nome?',
                          quantidadePaginas: 20,
                         autor: 'José',
                         editora: 'Funcesi'}
               };
  if(livros.livro1.nome === livro){
    return livros.livro1;
  }
  else if(livros.livro2.nome === livro){
    return livros.livro2;
  }
  else if(livros.livro3.nome === livro){
    return livros.livro3;
  }
  else{
    return 'Livro não encontrado!';
  }
};


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book(); //Object { livro1: {…}, livro2: {…}, livro3: {…} }

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro ' + book('Qual nome?').nome + ' tem ' + book('Qual nome?').quantidadePaginas + ' páginas!' //"O livro Qual nome? tem 20 páginas!"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro ' + book('Qual nome?').nome + ' é ' + book('Qual nome?').autor + '.' //"O autor do livro Qual nome? é José."

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro ' + book('Qual nome?').nome + ' foi publicado pela editora ' + book('Qual nome?').editora + '.' //"O livro Qual nome? foi publicado pela editora Funcesi."
