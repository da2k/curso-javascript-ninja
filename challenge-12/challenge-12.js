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
    name: 'Fabrício',
    lastname: 'Silva',
    age: 31
  };

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log( 'Propriedades de "person":', Object.keys(person) );

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
  books.push({
    name: 'JavaScript',
    pages: 450
  });
  books.push({
    name: 'Angular',
    pages: 320
  });
  books.push({
    name: 'NodeJS',
    pages: 400
  });

  /*
  Mostre no console todos os livros.
  */
  console.log( '\nLista de livros:', books );

  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log( '\nLivro que está sendo removido:', books.pop() );

  /*
  Mostre no console os livros restantes.
  */
  console.log( '\nAgora sobraram somente os livros:', books );

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  var booksString = JSON.stringify(books);

  /*
  Mostre os livros nesse formato no console:
  */
  console.log( '\nLivros em formato string:', booksString );

  /*
  Converta os livros novamente para objeto.
  */
  console.log( '\nAgora os livros são objetos novamente:', JSON.parse(booksString) );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  books.forEach(function(book) {
    for (var prop in book) {
      console.log(prop + ': ' + book[prop]);
    }
  });

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['F', 'a', 'b', 'r', 'í', 'c', 'i', 'o'];

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log( '\nMeu nome é:', myName.join(''));


  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log( '\nMeu nome invertido é:', myName.reverse() );

  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log( '\nAgora em ordem alfabética:', myName.sort() );
})();
