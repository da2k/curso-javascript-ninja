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
    name: 'Felipe',
    lastname: 'Fialho',
    age: 26
  };

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log('Propriedades de "person":', Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
  books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  var book1 = {
    name: 'Animal Farm',
    pages: 300
  };
  var book2 = {
    name: '1984',
    pages: 800
  };
  var book3 = {
    name: 'A Clockwork Orange',
    pages: 400
  };
  books.push(book1, book2, book3);

  /*
  Mostre no console todos os livros.
  */
  console.log('\nLista de livros:', books);

  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log('\nLivro que está sendo removido:', books.pop());

  /*
  Mostre no console os livros restantes.
  */
  console.log('\nAgora sobraram somente os livros:', books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  var booksToString = JSON.stringify(books);
  JSON.stringify(books)

  /*
  Mostre os livros nesse formato no console:
  */
  console.log('\nLivros em formato string:', booksToString);

  /*
  Converta os livros novamente para objeto.
  */
  var booksToObject = JSON.parse(booksToString);
  console.log('\nAgora os livros são objetos novamente:', booksToObject, '\n');

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for (var x in books) {
    var prop = Object.keys(books[x]);

    for (var y in prop) {
      var propActive = prop[y];
      console.log(propActive + ': ' + books[x][propActive]);
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['F', 'E', 'L', 'I', 'P', 'E', ' ', 'F', 'I', 'A', 'L', 'H', 'O']

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log('\nMeu nome é:', myName.join(''));


  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log('\nMeu nome invertido é:', myName.reverse().join(''));

  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log('\nAgora em ordem alfabética:', myName.sort().join(''));

})();
