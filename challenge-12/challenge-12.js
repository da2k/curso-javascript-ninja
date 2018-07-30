(function (){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {
    name: 'Gilmara',
    lastname: 'Barros',
    age: 21
}
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
for (var prop in person){
    console.log('Propriedades de "Person":' + (prop));
}

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push( {name:'A Guerra dos Tronos', pages:620});
books.push( {name:'O Hobbit', pages:296});
books.push( {name:'Não se enrola não', pages:165});
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log(books);

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log( books.pop() );

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
{name: "A Guerra dos Tronos", pages: 620}
{name: "O Hobbit", pages: 296}
/*
Converta os objetos que ficaram em `books` para strings.
*/
JSON.stringify(person)
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
{"name":"Gilmara","lastname":"Barros","age":21}
/*
Converta os livros novamente para objeto.
*/
JSON.parse(books)
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i = 0; i < books.length; i++){
    for(var book in books[i] ){
      console.log( book + ': ' + books[i][book] );
    }
  }

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
console.log( '\nMeu nome é:' );
var myName = ["G", "i", "l", "m", "a", "r", "a"
];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( myName.join('') );
console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
myName.reverse();
console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
myName.sort();

})();
