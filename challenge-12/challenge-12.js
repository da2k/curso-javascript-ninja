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
    // ?
    var person = {
        name: 'Ben-hur',
        lastname: 'Guimarães',
        age: 23
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

    books.push({ name: 'Livro 1', pages: 10 });
    books.push({ name: 'Livro 2', pages: 20 });
    books.push({ name: 'Livro 3', pages: 30 });
    console.log('\nLista de livros:');

    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    console.log('\nLivro que está sendo removido:');
    /*
    Remova o último livro, e mostre-o no console.
    */
    books.pop();

    console.log('\nAgora sobraram somente os livros:');
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // ?
    console.log('\nLivros em formato string:');
    JSON.stringify(books);
    /*
    Mostre os livros nesse formato no console:
    */
    books = JSON.stringify(books);
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
    for (var prop1 in books) {
        for (var prop2 in books[prop1]) {
            console.log(prop2 + ': ' + books[prop1][prop2]);
        }
    }

    // OU 

    for (var index = 0; index < books.length; index++) {
        for(var prop in books[index]){
            console.log(prop + ' ' + books[index][prop]);
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['B', 'E', 'N', 'H', 'U', 'R'];
    console.log('\nMeu nome é:');

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log('\nMeu nome invertido é:');
    console.log(myName.reverse().join(''));

    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log('\nAgora em ordem alfabética:');
    console.log('Itens ordenados: ', myName.sort());
})();
