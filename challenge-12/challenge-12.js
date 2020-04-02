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
    name: "Rodrigo",
    lastName: "Henrique",
    age: 25
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
  books.push({
    name: "As Crônicas de Nárnia",
    pages: 751
  });
  books.push({
    name: "Operação Valquíria",
    pages: 284
  });
  books.push({
    name: "Crime e Castigo",
    pages: 589
  });

  /*
Mostre no console todos os livros.
*/
  console.log("\nLista de livros:", books);

  /*
Remova o último livro, e mostre-o no console.
*/
  console.log("\nLivro que está sendo removido:", books.pop());

  /*
Mostre no console os livros restantes.
*/
  console.log("\nAgora sobraram somente os livros:", books);

  /*
Converta os objetos que ficaram em `books` para strings.
*/
  for (book in books) {
    books[book] = JSON.stringify(books[book]);
  }

  /*
Mostre os livros nesse formato no console:
*/
  console.log("\nLivros em formato string:", books);

  /*
Converta os livros novamente para objeto.
*/
  for (book in books) {
    books[book] = JSON.parse(books[book]);
  }
  console.log("\nAgora os livros são objetos novamente:", books);

  /*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
  for (book in books) {
    for (prop in books[book]) {
      console.log(`${prop}: ${books[book][prop]}`);
    }
  }

  /*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
  var myName = ["r", "o", "d", "r", "i", "g", "o"];

  /*
Juntando todos os itens do array, mostre no console seu nome.
*/
  console.log("\nMeu nome é:", myName.join(""));

  /*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
  console.log("\nMeu nome invertido é:", myName.reverse().join(""));

  /*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
  console.log("\nAgora em ordem alfabética:", myName.sort());
})();
