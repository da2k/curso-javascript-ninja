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
  var person = {
    name: 'Evelyn',
    lastname: 'Schmitz',
    age: 29
  }

  console.log( 'Propriedades de "person":', person );

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log( Object.keys( person ) );

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
  console.log( '\nLista de livros:' );

  books.push({
    name:
      'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5 and Modern JS Libraries',

    pages: 254
  });

  books.push({
    name: 'Progressive Web Apps: Construa aplicações progressivas com React',
    pages: 443
  });

  books.push({
    name: 'Cangaceiro JavaScript: Uma aventura no sertão da programação',
    pages: 502
  });

  /*
  Mostre no console todos os livros.
  */
  console.log(books)

  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log( '\nLivro que está sendo removido:' );
  var removedBook = books.pop();
  console.log(removedBook);


  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  console.log(books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  console.log( '\nLivros em formato string:' );
  books = JSON.stringify( books );

  /*
  Mostre os livros nesse formato no console:
  */
  console.log( books );

  /*
  Converta os livros novamente para objeto.
  */
  books = JSON.parse( books );
  console.log( '\nAgora os livros são objetos novamente:' );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
  "[PROPRIEDADE]: [VALOR]"
  */
  // Manualmente:
  // console.log(books[0].name + ': ' + books[0].pages);
  // console.log(books[1].name + ': ' + books[1].pages);

  for( var i = 0; i < books.length; i++ ) {
    for( var prop in books[i] ){
      console.log( prop + ': ' + books[i][prop] );
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = [ 'E', 'v', 'e', 'l', 'y', 'n'];

  console.log('\nMeu nome é:');

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(''));

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log( '\nMeu nome invertido é:' );

  console.log(myName.reverse().join(''));

  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log( '\nAgora em ordem alfabética:' );

  console.log(myName.sort());

})();
