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
  var person = {
    name: 'Hallan',
    lastname: 'Alencar',
    age: 32
  };
  console.log('Propriedades de "person":');

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  // ?

  console.log(Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
  // ?
  var books = [];
  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  // ?
  books.push({ name: 'Titulo Livro 1', pages: 200 });
  books.push({ name: 'Titulo Livro 2', pages: 300 });
  books.push({ name: 'Titulo Livro 3', pages: 400 });
  console.log('\nLista de livros:');

  /*
  Mostre no console todos os livros.
  */
  // ?
  console.log(books);
  console.log('\nLivro que está sendo removido:');
  /*
  Remova o último livro, e mostre-o no console.
  */
  // ?
  var lastbook = books.pop();
  console.log(lastbook);

  console.log('\nAgora sobraram somente os livros:');
  /*
  Mostre no console os livros restantes.
  */
  // ?
  console.log(books.length);
  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  // ?
  console.log('\nLivros em formato string:');
  books = JSON.stringify(books);

  /*
  Mostre os livros nesse formato no console:
  */
  // ?
  console.log(books);
  /*
  Converta os livros novamente para objeto.
  */
  // ?
  console.log('\nAgora os livros são objetos novamente:');
  books = JSON.parse(books);
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  // ?
  for (var i = 0; i < books.length; i++) {
    for (var prop in books[i]) {
      console.log(prop + ':' + books[i][prop]);
    }
  }
  //console.log(books);
  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  // ?
  console.log('\nMeu nome é:');
  var myName = ['H', 'A', 'L', 'L', 'A', 'N'];

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  // ?
  console.log(myName.join(''));
  console.log('\nMeu nome invertido é:');

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  // ?
  myName.reverse();
  console.log(myName.join(''));
  console.log('\nAgora em ordem alfabética:');
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort());
  // ?
})();
