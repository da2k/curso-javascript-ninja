(function(){
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
        name: 'Fabio',
        lastname: 'Aguirre',
        age: 36,
    };
    console.log( 'Propriedades de "person":', JSON.stringify(person) );

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
    books.push({name: 'Inferno', pages: 380});
    books.push({name: 'Sobre a Escrita', pages: 251});
    books.push({name: '1984', pages: 416});
    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    for (var i = 0; i < books.length; i++){
        console.log('-', books[i].name);
    }
    

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log('-', books.pop().name);

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    for (var i = 0; i < books.length; i++){
        console.log('-', books[i].name);
    }

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    var books1 = JSON.stringify(books[0]);
    var books2 = JSON.stringify(books[1]);
    console.log( '\nLivros em formato string:' );

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(books1,'e', books2);

    /*
    Converta os livros novamente para objeto.
    */
    var books1 = JSON.parse(books1);
    var books2 = JSON.parse(books2);
    console.log( '\nAgora os livros são objetos novamente:', books1,'e', books2 );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for (var props in books){
        console.log(books[props]);
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['f','a','b','i','o'];
    console.log( '\nMeu nome é:');

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join('') );

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse().join(''));

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort().join(''));

})();
