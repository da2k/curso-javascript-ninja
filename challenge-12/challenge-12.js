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
    name: 'Caio',
    lastname: 'Camizao',
    age: 30
  }
  console.log( 'Propriedades de "person": ' );
  
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
  
  var books = [];
    books.push({name: 'Lord', pages: 50});
    books.push({name: 'Lord1', pages: 60});
    books.push({name: 'Lord2', pages: 70});
  
  
  /*
  Mostre no console todos os livros.
  */
  
  
  console.log( '\nLista de livros:' ,books);
  /*
  Remova o último livro, e mostre-o no console.
  */
  // ?
  
  console.log( '\nLivro que está sendo removido:' ,books.pop());
  /*
  Mostre no console os livros restantes.
  */
  // ?
  
  console.log( '\nAgora sobraram somente os livros:' ,books);
  /*
  Converta os objetos que ficaram em `books` para strings.
  */

  var str = JSON.stringify(books)
  
  /*
  Mostre os livros nesse formato no console:
  */

  console.log( '\nLivros em formato string:' , str);
  
  /*
  Converta os livros novamente para objeto.
  */
  // ?
  var parse = JSON.parse(str);
  console.log( '\nAgora os livros são objetos novamente:' , parse);
  
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  // ?
  
  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */

  var myName = ['C', 'A', 'I', 'O'];
  
  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  // ?
  
  var name = myName.join('');
  console.log( '\nMeu nome é:' , name);
  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  // ?

  console.log( '\nMeu nome invertido é:' , myName.reverse());
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  // ?
  console.log( '\nAgora em ordem alfabética:' , myName.sort());
}) ();
