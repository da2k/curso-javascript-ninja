/*
Crie uma IIFE que envolva todo o código desse arquivo. Faça também a
indentação correta do código, para ficar dentro da IIFE.
*/

(function () {
    
    /*
    Analise as funções abaixo (`myFunction`, `myFunction2` e `myFunction3`, e
    ajuste o posicionamento das variáveis e funções internas, para que os códigos
    dentro de `console.log` que estão retornando `undefined` retornem o valor
    correto da variável ou função chamada.
    */
    function myFunction() {
        var number1 = 10;    
        var number2 = 20;
        console.log( 'Na função `myFunction`, o primeiro número é', number1 );
        console.log( 'Na função `myFunction`, o segundo número é', number2 );
        return (number1 + number2);
    }
    myFunction();
    
        //Na função `myFunction`, o primeiro número é 10
        //Na função `myFunction`, o segundo número é 20

    /*
        myFunction2();
    */
    function myFunction2() {
        var number1 = 10;
        var number2 = 20;
        var sum = function sum() {
            return number1 + number2;
        };
        console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
        return sum();
    }
    myFunction2();

        //A soma de 10 e 20 é igual a 30

    /*
        myFunction3();
    */
    function myFunction3() {
        var number1 = 40;
        var number2 = 50;
        function sum() {
            return number1 + number2;
        };
        console.log( 'A soma de 40 e 50 é igual a', sum() );
        console.log( 'Na função myFunction3, number1 é igual a', number1 );
        return sum();    
    }
    myFunction3();

        //A soma de 40 e 50 é igual a 90
        //Na função myFunction3, number1 é igual a 40

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

    function calculator(a,b) {
        return function (callback) {
            return callback(a,b);
        };
    }

    /*
    Declare uma variável chamada `sum`, e atribua a ela a função `calculator`,
    passando dois números por parâmetro.
    */
    var sum = calculator(15,10);

    /*
    Sabemos que `sum` agora tem uma função atribuída a ela, que é o retorno de
    `calculator`. E essa função espera um parâmetro `callback`. O `callback`
    tem dois parãmetros disponíveis, que são os números que você acabou de passar
    para a chamada à `calculator` acima.
    - Mostre no console o retorno da invocação de `sum`, passando por parâmetro
    uma função anônima que irá retornar a soma dos dois números que essa função
    anônima tem como seus argumentos.
    */

    var result = sum( function(x,y){ 
        return x+y
    });

    console.log( 'O resultado da soma é:', result);

        //O resultado da soma é: 25

    /*
    Agora declare outra variáveis chamadas `subtraction`, `multiplication`,
    `division` e `mod`, e atribua à elas `calculator`, passando números
    diferentes para cada chamada.
    */
    var subtraction = calculator(15,10);
    var multiplication = calculator(5,5);
    var division = calculator(27,3);
    var mod = calculator(18,6);

    /*
    Mostre as variáveis acima no `console` (uma chamada de console por variável),
    criando a função de `callback` que faz o cálculo para subração, multiplicação,
    divisão e módulo (resto de divisão), conforme a função utilizada.
    As suas respostas devem estar abaixo dos `console.log` referentes à cada
    chamada.
    */

    subtraction = subtraction(function (x,y){
        return x-y;
    });
    console.log( 'O resultado da subtração é:', subtraction );
        //O resultado da subtração é: 5

    multiplication = multiplication(function (x,y){
        return x*y;
    });
    console.log( 'O resultado da multiplicação é:', multiplication );
        //O resultado da multiplicação é: 25

    division = division( function (x,y){
        return x/y;
    });
    console.log( 'O resultado da divisão é:', division );
        //O resultado da divisão é: 9

    mod = mod( function (x,y) {
        return x%y;
    });
    console.log( 'O resto da divisão é:', mod );
        //O resto da divisão é: 0

})();