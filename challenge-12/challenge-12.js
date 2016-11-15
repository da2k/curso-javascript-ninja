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
    name     : 'Anderson',
    lastname : 'Nascimento',
    age      : 37
  }

  for( var prop in person ){
    console.log( 'Propriedades de "person": ' + prop );
  }


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

  var book1 = { name : 'JavaScript - Guia do programador', pages : 602 }
  var book2 = { name : 'Javascript O Guia Definitivo', pages : 1080 }
  var book3 = { name : 'Clean Code: A Handbook of Agile Software Craftsmanship', pages : 431 }

  books.push( book1 );
  books.push( book2 );
  books.push( book3 );

  /*
  Mostre no console todos os livros.
  */
  console.log( '\nLista de livros: ' + books );

  /*
  Remova o último livro, e mostre-o no console.
  */
  var lastBook = books.pop();

  console.log( '\nLivro que está sendo removido:' + lastBook.name );

  /*
  Mostre no console os livros restantes.
  */
  console.log( '\nAgora sobraram somente os livros:' + books );

  /*
  Converta os objetos que ficaram em `books` para strings.
  */

  var strBooks = JSON.stringify( books );

  /*
  Mostre os livros nesse formato no console:
  */
  console.log( '\nLivros em formato string:' + strBooks );

  /*
  Converta os livros novamente para objeto.
  */
  var books = JSON.parse(strBooks);

  console.log( '\nAgora os livros são objetos novamente:' );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for(i = 0; i < books.length; i++){
    for(var prop in books[i]){
      console.log( 'PROPRIEDADE: ' + prop + ' VALOR: ' + books[i][prop]  );
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['t', 'h', 'e', 'a', 'n', 'd', 'e', 'r', 's', 'o', 'n', 'n'];

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log( myName.join('') );

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */

  console.log( '\nMeu nome invertido é:' + myName.reverse() );

  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log( '\nAgora em ordem alfabética:' + myName.sort() );

})();
