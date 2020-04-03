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
    name: 'João',
    lastname: 'Silva',
    age: 45
  };
  console.log( 'Propriedades de "person":' );

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log( Object.keys( person ) );
  // ["name", "lastname", "age"]

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
  books.push( { name: 'O Senhor dos Anéis', pages: 5498 } );
  books.push( { name: 'Pai Rico Pai Pobre', pages: 452 } );
  books.push( { name: 'O Segredo', pages: 614 } );
  
  console.log( '\nLista de livros:' );

  /*
  Mostre no console todos os livros.
  */
  for(var i = 0; i < books.length; i++){
    console.log( books[i] );
  }
  
  // {name: "O Senhor dos Anéis", pages: 5498}
  // {name: "Pai Rico Pai Pobre", pages: 452}
  // {name: "O Segredo", pages: 614}

  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log( books.pop() );
  // {name: "O Segredo", pages: 614}

  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  for(var i = 0; i < books.length; i++){
    console.log( books[i] );
  }
  
  // {name: "O Senhor dos Anéis", pages: 5498}
  // {name: "Pai Rico Pai Pobre", pages: 452}
  
  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  console.log( '\nLivros em formato string:' );
  for(var i = 0; i < books.length; i++){
    books[i] =  JSON.stringify( books[i] );
  }
  
  /*
  Mostre os livros nesse formato no console:
  */
  console.log( books.join() );
  // {"name":"O Senhor dos Anéis","pages":5498},{"name":"Pai Rico Pai Pobre","pages":452}
  /*
  Converta os livros novamente para objeto.
  */
  for(var i = 0; i < books.length; i++){
    books[i] =  JSON.parse( books[i] );
  }
  
  console.log( '\nAgora os livros são objetos novamente:' );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for(var i = 0; i < books.length; i++){
    for(var prop in books[i]) {
      console.log( prop, ':', books[i][prop] );
    }
  }
  // name : O Senhor dos Anéis
  // pages : 5498
  // name : Pai Rico Pai Pobre
  // pages : 452

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['A', 'n', 'd', 'r', 'é', 'R', 'o', 'd', 'r', 'i', 'g', 'u', 'e', 's']
  console.log( '\nMeu nome é:' );

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log( myName.join(' ') );

  console.log( '\nMeu nome invertido é:' );

  // A n d r é R o d r i g u e s
  
  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log( myName.reverse().join(' ') );
  
  // s e u g i r d o R é r d n A

  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log( myName.sort().join(' '));
  
  // A R d d e g i n o r r s u é
  
})();
