(() => {
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
    'name': "João",
    'lastname': "Norberto",
    'age': 22
  }

console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?
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
books.push({name:"Código limpo: Habilidades práticas do Agile Software", pages: 203 });
books.push({name:"JavaScript: O Guia Definitivo", pages: 1000 });
books.push({name:"Programming Typescript: Making Your JavaScript Applications Scale", pages: 324 });
    
/*
Mostre no console todos os livros.
*/
console.log( '\nLista de livros:' , books);

/*
Remova o último livro, e mostre-o no console.
*/
console.log( '\nLivro que está sendo removido:', books.pop());

/*
Mostre no console os livros restantes.
*/
console.log( '\nAgora sobraram somente os livros:', books );

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
books = JSON.stringify(books)
console.log( '\nLivros em formato string:', books  );

/*
Mostre os livros nesse formato no console:
*/
console.log(books);

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books);
console.log( '\nAgora os livros são objetos novamente:', books );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for (let i = 0; i < books.length; i++) {
    for (prop in books[i]) {
        console.log(prop + ": " + books[i][prop]);
     }
}


/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ["J", "o", "ã", "o"];

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( '\nMeu nome é:', myName.join("") );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( '\nMeu nome invertido é:', myName.reverse().join("") );


/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( '\nAgora em ordem alfabética:', myName.sort());
})();