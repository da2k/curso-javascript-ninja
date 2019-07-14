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
          name:'Berenice',
          lastname:'Queiroz',
          age:36
        }


        console.log( 'Propriedades de "person":');

        /*
        Mostre no console, em um array, todas as propriedades do objeto acima.
        Não use nenhuma estrutura de repetição, nem crie o array manualmente.
        */
        /*var arr = []
        arr.push(person);

        console.log(arr);*/

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

        books.push({name: 'JavaScript', pages: 900});
        books.push({name: 'Como Programar', pages: 450});
        books.push({name: 'HTML', pages: 250});

        console.log( 'Lista de livros:');

        /*
        Mostre no console todos os livros.
        */


       console.log(books);


        /*
        Remova o último livro, e mostre-o no console.
        */


       console.log( 'Livro que está sendo removido:', books.pop());


        /*
        Mostre no console os livros restantes.
        */
       console.log( 'Agora sobraram somente os livros:' , books );

        /*
        Converta os objetos que ficaram em `books` para strings.
        */
        // ?
        console.log( 'Livros em formato string:', JSON.stringify(books));

        /*
        Mostre os livros nesse formato no console:
        */


        /*
        Converta os livros novamente para objeto.
        */

        // var book = JSON.parse(books);



        console.log( 'Agora os livros são objetos novamente:');

        /*
        Mostre no console todas as propriedades e valores de todos os livros,
        no formato abaixo:
            "[PROPRIEDADE]: [VALOR]"
        */

        for( var i = 0; i < books.length; i++ ) {
            for( var prop in books[i]){
              console.log(prop + ':'+ books[i][prop]);
            }

        }

        /*
        Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
        seu nome. Adicione seu nome completo no array.
        */

        var myName = [ 'B ', 'E', 'R', 'E', 'N', 'I', 'C', 'E']
        console.log( 'Meu nome é:', myName );

        /*
        Juntando todos os itens do array, mostre no console seu nome.
        */
        console.log(myName.join(''));

        /*
        Ainda usando o objeto acima, mostre no console seu nome invertido.
        */
       console.log( '\nMeu nome invertido é:', myName.reverse().join('') );

        /*
        Mostre todos os itens do array acima, odenados alfabéticamente.
        */
        // ?
        console.log( '\nAgora em ordem alfabética:', myName.sort());

      })();
