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
        name: 'Renan ',
        lastName: 'da Silva',
        age: 26
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
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    var livro1 = {
        name: 'Casa de papel',
        page: 230
    };

    var livro2 = {
        name: 'Javascript Ninja',
        page: 920
    };

    var livro3 = {
        name: 'Narnia',
        page: '1000'
    };

    books.push(livro1, livro2, livro3)
    console.log('\nLista de livros:', );

    /*
    Mostre no console todos os livros.
    */
    console.log(books);
    console.log('\nLivro que está sendo removido:');

    /*
    Remova o último livro, e mostre-o no console.
    */
    var lastBook = books.pop();
    console.log('Livro removido', lastBook);

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
    var livrosQueSobraram = JSON.stringify(books);
    /*
    Mostre os livros nesse formato no console:
    */
    console.log(livrosQueSobraram);

    /*
    Converta os livros novamente para objeto.
    */
    JSON.parse(livrosQueSobraram);

    console.log('\nAgora os livros são objetos novamente:', livrosQueSobraram);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for (var prop in books) {
        console.log(books[prop]);
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = [];
    myName.push('r');
    myName.push('e');
    myName.push('n');
    myName.push('a');
    myName.push('n');
    console.log('\nMeu nome é:', myName);

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''))


    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log('\nMeu nome invertido é:', myName.reverse());

    console.log('\nAgora em ordem alfabética:', myName.sort());

    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */

})();