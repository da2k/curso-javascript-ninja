/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [false, 'Brandon Grotesque', [1,2,3],{nome:'Jessica Lewinter', curso:'Engenharia da Computação'},
             function myFun(){return 'Javascript is cool'}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function vetor(arg){
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(vetor([1,2,3]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(vet, indice){
    return vet[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray = [null, 'Java is an awful programming language', [1,2], 2, {b:5}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(myArray,0));
console.log(myFunction(myArray,1));
console.log(myFunction(myArray,2));
console.log(myFunction(myArray,3));
console.log(myFunction(myArray,4));

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
function book(arg){
    var livros = {'A Revolução dos Bichos':{
                      quantidadePaginas: 416,
                      autor: 'George Orwell',
                      editora: 'Companhia das Letras'
                         },
               'Admiravel Mundo Novo':{
                      quantidadePaginas: 312,
                      autor: 'Aldous Huxley',
                      editora: 'Biblioteca Azul'
                         },
               'Fahrenheit 451':{
                      quantidadePaginas: 215,
                      autor: 'Ray Bradbury',
                      editora: 'Biblioteca Azul'
                         }
              }
   
    if(!arg){
        return livros;
    }else{
        return livros[arg];
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = "A Revolução dos Bichos";
console.log("O livro " + livro + "tem " + book(livro).quantidadePaginas " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + livro + "é " + book(livro).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + livro + "foi publicado pela editora " + book(livro).editora);