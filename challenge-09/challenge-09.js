/*
Crie uma IIFE que envolva todo o código desse arquivo. Faça também a
indentação correta do código, para ficar dentro da IIFE.
*/

function(){

    /*
    Analise as funções abaixo (`myFunction`, `myFunction2` e `myFunction3`, e
    ajuste o posicionamento das variáveis e funções internas, para que os códigos
    dentro de `console.log` que estão retornando `undefined` retornem o valor
    correto da variável ou função chamada.
    */
    function myFunction() {
        var number2 = 20;
        var number1 = 10;

        console.log( 'Na função `myFunction`, o primeiro número é', number1 );
        console.log( 'Na função `myFunction`, o segundo número é', number2 );
        return number1 + number2;
    }
    myFunction();

    /*
        myFunction2();
    */
    function myFunction2() {
        var number1 = 10;
        var number2 = 20;

        console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
        var sum = function sum() {
            return number1 + number2;
        };        
        return sum();
    }
    myFunction2();

    /*
        myFunction3();
    */
    function myFunction3() {
        var number2 = 50;
        var number1 = 40;
        function sum() {
            return number1 + number2;
        };
        return sum();
        console.log( 'A soma de 40 e 50 é igual a', sum() );
        console.log( 'Na função myFunction3, number1 é igual a', number1 );
    }
    myFunction3();

    /*
    No desafio anterior criamos uma calculadora, usando uma estrutura funcional.
    Agora vamos criar uma outra calculadora, usando uma outra abordagem :D
    - Crie uma função `calculator` que recebe dois valores (números)
    por parâmetro.
    - Essa função deve retornar uma outra função, que recebe um parâmetro
    chamado `callback`.
    - Esse `callback` será uma função, que passaremos por parâmetro ao invocar
    o retorno de `calculator`.
    - O retorno dessa segunda função deve ser a função de `callback` passada
    por parâmetro, INVOCADA, e passando a ela por parâmetro os dois valores
    que foram passadas para a primeira função `calculator`.
    */
    // ?
    function calculator(number1,number2){
        var number1 = 10;
        var number2 = 20;
        function(callback){
            return calculator(callback, number1,number2);
        }
    }

    /*
    Declare uma variável chamada `sum`, e atribua a ela a função `calculator`,
    passando dois números por parâmetro.
    */
    // ?

    var sum = calculator(number1, number2);

    /*
    Sabemos que `sum` agora tem uma função atribuída a ela, que é o retorno de
    `calculator`. E essa função espera um parâmetro `callback`. O `callback`
    tem dois parãmetros disponíveis, que são os números que você acabou de passar
    para a chamada à `calculator` acima.
    - Mostre no console o retorno da invocação de `sum`, passando por parâmetro
    uma função anônima que irá retornar a soma dos dois números que essa função
    anônima tem como seus argumentos.
    */
    console.log( 'O resultado da soma é:' sum(function(number1,number2){}));
    // ?

    /*
    Agora declare outra variáveis chamadas `subtraction`, `multiplication`,
    `division` e `mod`, e atribua à elas `calculator`, passando números
    diferentes para cada chamada.
    */
    // ?

    var subtraction = 3 - 2;
    var multiplication = 20 * 4;
    var division = 50 / 5;
    var mod = 8 % 4;


    /*
    Mostre as variáveis acima no `console` (uma chamada de console por variável),
    criando a função de `callback` que faz o cálculo para subração, multiplicação,
    divisão e módulo (resto de divisão), conforme a função utilizada.
    As suas respostas devem estar abaixo dos `console.log` referentes à cada
    chamada.
    */

    console.log( 'O resultado da subtração é:' + subtraction);
    // ?

    console.log( 'O resultado da multiplicação é:' + multiplication);
    // ?

    console.log( 'O resultado da divisão é:' + division );
    // ?

    console.log( 'O resto da divisão é:' +  mod );
    // ?

}();