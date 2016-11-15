(function() {

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
  // ?
  console.log( 'Propriedades de "person":' );
  var person = {
    name: 'Pedro',
    lastname: 'Muraki',
    age: 26
  };

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log( Object.keys(person) );

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
  // ?
  console.log( '\nLista de livros:' );
  books.push(
    {
      name: 'Book 1',
      pages: 100
    }, 
    {
      name: 'Book 2',
      pages: 200
    },
    {
      name: 'Book 3',
      pages: 300
    }
  );

  /*
  Mostre no console todos os livros.
  */
  for ( var book in books ) {
    console.log(books[book]);
  }

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log(books.pop());

  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  for ( var book in books ) {
    console.log(books[book]);
  }

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  // ?
  console.log( '\nLivros em formato string:' );
  JSON.stringify(books);

  /*
  Mostre os livros nesse formato no console:
  */
  var booksStr = JSON.stringify(books);
  console.log(booksStr);

  /*
  Converta os livros novamente para objeto.
  */
  // ?
  console.log( '\nAgora os livros são objetos novamente:' );
  JSON.parse(booksStr);

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */  
  for ( var counter = 0; counter < books.length; counter++ ) {
    for ( var prop in books[counter] ) {
      console.log( prop + ' : ' + books[counter][prop]  );
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  // ?
  console.log( '\nMeu nome é:' );
  var myName = [ 'p', 'e', 'd', 'r', 'o' ];
  myName.push( myName.join('') );

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log( myName[5] );
  
  console.log( '\nMeu nome invertido é:' );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log( myName.reverse() );

  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log( myName.sort() );

})();
