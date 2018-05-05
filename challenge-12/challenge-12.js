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
        name: 'Sammy',
        lastname:  'Formighieri',
        age: 39
    }

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
    var livro1 = { name: 'Nome do Livro 1', pages: 234 }
    var livro2 = { name: 'Nome do Livro 2', pages: 765 }
    var livro3 = { name: 'Nome do Livro 3', pages: 343 }

    books.push(livro1, livro2, livro3);

    console.log('\nLista de livros:');

    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    console.log('\nLivro que está sendo removido:');
    /*
    Remova o último livro, e mostre-o no console.
    */
    var livroRemovido = books.pop();
    console.log(livroRemovido);

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
    var convertBooksString = JSON.stringify(books);

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(convertBooksString);

    /*
    Converta os livros novamente para objeto.
    */
    // ?
    console.log('\nAgora os livros são objetos novamente:');
    var convertBooksObj = JSON.parse(convertBooksString);
    console.log(convertBooksObj);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for (var i = 0; i <= books.length; i++) {
        for (var props in books[i]) {
            console.log(props + ': ' + books[i][props]);
        }
    }
    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?
    console.log('\nMeu nome é:');
    var myName = ['S', 'A', 'M', 'M', 'Y']
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));

    console.log('\nMeu nome invertido é:');

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse().join(''));

    console.log('\nAgora em ordem alfabética:');
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort());
})();
