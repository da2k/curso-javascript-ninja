(function () {

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
    name: "Diogo",
    lastname: "Oliveira",
    age: 34
  };

  console.log('Propriedades de "person":');

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

  book1 = {
    name: "AAA",
    pages: 100
  };
  book2 = {
    name: "BBB",
    pages: 200
  };
  book3 = {
    name: "CCC",
    pages: 300
  };
  books.push(book1, book2, book3);
  console.log('\nLista de livros:');

  /*
  Mostre no console todos os livros.
  */

  console.log(books);
  console.log('\nLivro que está sendo removido:');
  console.log(books[2])

  /*
  Remova o último livro, e mostre-o no console.
  */

  function removeBooks() {
    books.pop()
    return books
  }
  removeBooks()
  console.log('\nAgora sobraram somente os livros:');

  /*
  Mostre no console os livros restantes.
  */

  console.log(books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */

  books = JSON.stringify(books);
  console.log('\nLivros em formato string:');

  /*
  Mostre os livros nesse formato no console:
  */
  console.log(books);

  /*
  Converta os livros novamente para objeto.
  */
  books = JSON.parse(books);

  console.log('\nAgora os livros são objetos novamente:');

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  console.log(books);

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */

  var myName = ["D", "I", "O", "G", "O"];
  console.log('\nMeu nome é:');

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */

  var noSpace = myName.join('');
  console.log(noSpace);

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */

  function reverseString(name) {
    console.log(name.split("").reverse().join(""));
  }
  reverseString(noSpace);

  console.log('\nAgora em ordem alfabética:');
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  myName.sort()
  console.log(myName);

});
