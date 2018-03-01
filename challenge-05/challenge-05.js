/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [4,67,87,23,99,66,43,55,57];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArr(arg){
  return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArr(myVar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myArrWithIdx(params,idx){
  return params[idx];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var misc =[1,'Banana',true,function(){return'Função';},{prop1:'Roxo',prop2:true,prop3:234}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myVarWithIdx(misc,0)); //1
console.log(myVarWithIdx(misc,1)); //'Banana'
console.log(myVarWithIdx(misc,2)); //true
console.log(myVarWithIdx(misc,3)); //[Function]
console.log(myVarWithIdx(misc,4)); //{prop1:'Roxo',prop2:true,prop3:234}

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
function book(nome){
   var library ={
       book1:{quantidadePaginas:150,autor:'dunha',editora:'editora do leste'},
       book2:{quantidadePaginas:250,autor:'zunda',editora:'editora sese'},
       book3:{quantidadePaginas:400,autor:'zeze',editora:'do lado'}};
return library[nome]?library[nome]:library;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();/*{ book1:
           { quantidadePaginas: 150,
             autor: 'dunha',
             editora: 'editora do leste' },
          book2:
           { quantidadePaginas: 250,
             autor: 'zunda',
             editora: 'editora sese' },
          book3: { 
             quantidadePaginas: 400, 
             autor: 'zeze', 
             editora: 'do lado' }
         }
*/
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro book1 tem "  + book('book1').quantidadePaginas +" páginas!");
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro book2 é " + book('book2').autor + ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro book3 foi publicado pela editora " + book('book3').editora + ".");
