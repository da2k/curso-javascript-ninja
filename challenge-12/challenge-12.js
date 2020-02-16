(function (){

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

    console.log( 'Propriedades de "person":');
    var person = {
        name: 'Julia',
        lastname: 'Stefanoni',
        age: 17
    }

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    var books =  [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    // ?
    console.log( '\nLista de livros:' );
    books.push({name: 'Harry Potter', pages: 155}, {name: 'Dom Casmurro', pages: 320}, {name: 'O diario de Anne Frank', pages: 250});

    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    /*
    Remova o último livro, e mostre-o no console.
    */

    console.log( '\nLivro que está sendo removido:' );
    console.log(books.pop());

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */

    console.log( '\nLivros em formato string:' );
    var booksString = JSON.stringify(books);

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(JSON.stringify(booksString));

    /*
    Converta os livros novamente para objeto.
    */
    console.log( '\nAgora os livros são objetos novamente:' );
    books = JSON.parse(booksString);
    console.log(books);
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for (cont = 0; cont < books.length; cont++){
        for (var props in books[cont]){
            console.log(props + ': ' + books[cont][props]);
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['J', 'U', 'L', 'I', 'A'];
    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    myName.join('');

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse());

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort());

}());