/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function () {

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {
        name: 'Mario',
        lastname: 'Salles',
        age: 44
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
    books.push({ name: 'Livro1', pages: 100 }, { name: 'Livro2', pages: 200 }, { name: 'Livro3', pages: 300 })
    console.log('\nLista de livros:');

    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    console.log('\nLivro que está sendo removido:');
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log(books.pop()['name']);

    console.log('\nAgora sobraram somente os livros:');
    /*
    Mostre no console os livros restantes.
    */
    var restante = [];
    for (var book in books) {
        restante.push(books[book]['name']);
    }
    console.log(restante);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    var booksStringfied = JSON.stringify(books)
    console.log('\nLivros em formato string:');

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(booksStringfied);

    /*
    Converta os livros novamente para objeto.
    */
    books = JSON.parse(booksStringfied)
    console.log('\nAgora os livros são objetos novamente:');
    console.log(books);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for (var i in books) {
        for (var book in books[i]) {
            console.log(`"${book}: ${books[i][book]}"`)
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?
    var myName = ['M', 'á', 'r', 'i', 'o', ' ', 'S', 'a', 'l', 'l', 'e', 's']
    console.log('\nMeu nome é:');

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));
    console.log('\nMeu nome invertido é:');

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    myName.reverse();
    console.log(myName.join(''));


    console.log('\nAgora em ordem alfabética:');
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
   myName = myName.join('').toLowerCase().split('')
    console.log(myName.sort().join('').trim());
})();
