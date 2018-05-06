  (function(window, document){

    'use strict';
    
    /*
    Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
    `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
    */
    function person( name, lastName ){
        this.name = name;
        this.lastName = lastName;
    }

    var firstPerson = new person( 'Lord', 'Vader');
    var secondPerson = new person( 'Frodo', 'Bolseiro' );
    console.log( firstPerson, secondPerson );

    /*
    Agora crie uma função chamada `getFullName` que retorne as propriedades
    `name` e `lastName` dos objetos acima, formando um nome completo.
    A função não deve receber nenhum parâmetro, mas as propriedades `name` e
    `lastName` devem ser dinâmicas.
    A mesma função deve servir para as duas pessoas (ou qualquer outra que for
    criada).
    Depois disso, invoque essa função, mostrando no console o nome completo das
    pessoas que foram criadas anteriormente, passando as pessoas acima como
    contexto da função. Use um console.log por pessoa.
    */
    console.log( 'O nome das pessoas é:' );
    person.prototype.getFullName = function(){
        return this.name + ' ' + this.lastName;
    }
    console.log( firstPerson.getFullName() + '\n' + secondPerson.getFullName() );

    /*
    Crie uma função chamada `sum`. Essa função pode receber uma lista de
    parâmetros variável, e deverá retornar a soma de todos eles.
    Não use estruturas de repetição para somar os argumentos.
    Na primeira linha, dentro da função, deixe um console.log para mostrar todos
    os parâmetros passados para essa função.
    */
        
    function sum(){
        console.log( arguments );
        var total = Array.prototype.reduce.call( arguments, function( acc, actual ){
            return Number(acc) + Number(actual) ;
        })
        console.log( total );
    }
    
    /*
    Mostre no console que a função acima funciona, invocando-a em 3 console.log
    diferentes, com quantidades variáveis de parâmetros passados.
    */
    console.log( '\nSomar alguns números:' );
    console.log( sum( 1, 2, 3 ));
    console.log( sum( 1, 2, 3, -5, 8, 10 ));
    console.log( sum( -1, -2, -3 , -100, 5, 15.55 ));
    
    /*
    Declare uma variável chamada `userEntry`, que irá receber alguns valores
    entrados pelo usuário. Mostre para o usuário a seguinte frase:
    "Entre com alguns números que serão somados:"
    */
    var userEntry = document.querySelector( '[data-js="sum"]' );
    var button = document.querySelector( '[ data-js="somar"]' );

    button.addEventListener('click', function(event){
        /*
        Mostre no console o valor entrado pelo usuário:
        */
        console.log( '\nEntrada do usuário:' );
        console.log( userEntry.value );

        /*
        Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
        e remove tudo o que não for número, retornando um array somente com os números
        da string. Mostre a representação em string dessa função no console.
        */
        console.log( '\nFunção que limpa entrada do usuário (somente números):' );
        function justNumbers( arg ){
            var regexp = /\d{1,}/gm;
            return arg.match( regexp );
        }
        console.log( justNumbers.toString() );

        /*
        Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
        atribuindo o resultado à uma variável `numbers`.
        */
        console.log( '\nEntrada do usuário limpa. Somente números:' );
        var numbers = justNumbers( userEntry.value );
        userEntry.value = "";
        console.log( numbers );

        /*
        Agora com o array de números, utilize a função `sum` para somar todos os
        números desse array e mostre o resultado no console.
        */
        console.log( '\nSomar números entrados pelo usuário:' );
        var tot = sum.apply( 0, numbers );
        console.log( tot );

    }, false)

})(window, document);
