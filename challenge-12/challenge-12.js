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
  const person = {
    name: "alexandre",
    lastname: "ramos",
    age: 34
  };
  console.log('Propriedades de "person":', person);

  /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
  console.log(Object.keys(person));

  /*
    Crie um array vazio chamado `books`.
    */
  let books = [];

  /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
  books.push(
    { name: "js", page: 258 },
    { name: "reactjs", page: 435 },
    { name: "css", page: 345 }
  );

  console.log("\nLista de livros:");

  /*
    Mostre no console todos os livros.
    */
  console.log(books);

  console.log("\nLivro que está sendo removido:");
  /*
    Remova o último livro, e mostre-o no console.
    */
  const lastBook = books.pop();
  console.log(lastBook);

  console.log("\nAgora sobraram somente os livros:");
  /*
    Mostre no console os livros restantes.
    */
  console.log(books);

  /*
    Converta os objetos que ficaram em `books` para strings.
    */
  const booksStr = JSON.stringify(books);
  console.log("\nLivros em formato string:");

  /*
    Mostre os livros nesse formato no console:
    */
  console.log(booksStr);

  /*
    Converta os livros novamente para objeto.
    */
  const BooksParse = JSON.parse(booksStr);
  console.log("\nAgora os livros são objetos novamente:");

  /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
  console.log(BooksParse);

  /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
  const myName = ["a", "l", "e", "a", "n", "d", "r", "e"];
  console.log("\nMeu nome é:");

  /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
  let name = myName.join("");
  console.log(name);

  console.log("\nMeu nome invertido é:");

  /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */

  console.log(myName.reverse().join(""));

  console.log("\nAgora em ordem alfabética:");
  /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
  console.log(myName.sort().join(""));
})();
