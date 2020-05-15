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
    let person = {
        name: 'Henrique',
        lastname: 'Araújo',
        age: 26
    };
    console.log('Propriedades de "person":');

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    let allProperties = Object.keys(person);
    console.log(allProperties);

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
    // ?
    console.log('\nLista de livros:');
    books.push(
        { name: 'Use a Cabeça: HTML e CSS', pages: 760 },
        { name: 'Use a Cabeça! Programação JavaScript', pages: 704},
        { name: 'HTML e CSS: Projete e Construa Websites', pages: 512}
        )
    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    console.log('\nLivro que está sendo removido:');
    /*
    Remova o último livro, e mostre-o no console.
    */
    let removed = books.pop();
    console.log(removed);

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

    /*
    Mostre os livros nesse formato no console:
    */
    let booksToString = JSON.stringify(books);
    console.log(booksToString);
    /*
    Converta os livros novamente para objeto.
    */
    // ?
    console.log('\nAgora os livros são objetos novamente:');
    let booksToObj = JSON.parse(booksToString);
    console.log(booksToObj);
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    
    for (let prop in books) {
        console.log(JSON.stringify(books[prop]));
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    let myName = ['H', 'e', 'n', 'r', 'i', 'q', 'u', 'e'];
    console.log('\nMeu nome é:');
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName);

    console.log('\nMeu nome invertido é:');
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse());

    console.log('\nAgora em ordem alfabética:');
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort());
}())