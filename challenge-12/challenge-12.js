(function(){
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
    name: 'Jose Airton',
    lasrname: 'Silva Morais',
    age: 27
};

console.log( 'Propriedades de "person":');
for(psn in person){console.log(psn + ': ' + person[psn])};
/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));
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
books.push({'name': 'Clean Code', 'pages': 285});
books.push({'name': 'Big Data', 'pages': 320});
books.push({'name': 'Python', 'pages': 125});
console.log( '\nLista de livros: ');
console.log(books)


/*
Mostre no console todos os livros.
*/

for(bk in books){console.log(books[bk].name + '.')};
/*
Remova o último livro, e mostre-o no console.
*/
// ?
console.log( '\nLivro que está sendo removido: ' + books.pop().name);

/*
Mostre no console os livros restantes.
*/
console.log( '\nAgora sobraram somente os livros:' );
console.log( books)
/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );
books = JSON.stringify( books )


/*
Mostre os livros nesse formato no console:
*/
console.log( books )

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books)
console.log( '\nAgora os livros são objetos novamente:' );


/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
console.log('Objetos convertidos');
for(var i = 0; i < books.length; i++){
   for(var prop in books[i]) {
       console.log(prop + ': '+ books[i][prop])
   }
}


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['A', 'i', 'r', 't', 'o', 'n'];
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.join(''));

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.reverse());
console.log(myName.sort())

}());
