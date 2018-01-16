/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

(function() {

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        'name': 'Mellina',
        'lastname': 'Yonashiro',
        'age': 25
    };
    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log( Object.keys(person) );

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
    books = [
        { 'name': 'Livro 1', 'pages': 578 },
        { 'name': 'Livro 2', 'pages': 123 },
        { 'name': 'Livro 3', 'pages': 980 }
    ];
    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    for (i = 0; i < books.length; i++){
        console.log(books[i].name);
    }

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    var livroRemovido = books.pop();
    console.log(livroRemovido.name);

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    for (i = 0; i < books.length; i++){
        console.log(books[i].name);
    };

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    var booksString = [];
    for (i = 0; i < books.length; i++){
        booksString += JSON.stringify(books[i]);
    };
    console.log( '\nLivros em formato string:' );

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(booksString);

    /*
    Converta os livros novamente para objeto.
    */
    //console.log(JSON.parse(booksString));
    console.log( '\nAgora os livros são objetos novamente:' );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */

    for ( var prop in books ){
        console.log( prop + ' : ' + books[prop] );
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['M', 'e', 'l', 'l', 'i', 'n', 'a'];
    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    myName.reverse();
    console.log(myName.join(''));

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    myName.sort();
    console.log(myName.join(''));

}());