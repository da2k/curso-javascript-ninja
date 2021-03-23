(function(){

    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
    elemento será um objeto no formato:
    { number: [NUMBER] }
    Os números devem ser de 1 a 10.
    Mostre esse array no console.
    */

    let numberObjects = [];

    // for(x=1; numberObjects.length < 10; x++){

    //     numberObjects.push({ number : x });

    // };

    // outra maneira de fazer
    let x = 1;
    while(numberObjects.length<10){

        numberObjects.push({ number: x++});
    };
    console.log( 'Number Objects Array:' );
    // ?
    console.log(numberObjects);
    /*
    Crie um array chamado `justNumbers`, que terá como elementos somente os
    números do array criado acima. Mostre esse novo array no console.
    */


    let justNumbers = [];

    numberObjects.forEach(function(item){

        return justNumbers.push(item.number);

    });


    // justNumbers = numberObjects.map(function(item){

    //     return justNumbers.push(item.number);

    // });

    

    console.log( '\nJust Numbers:' );
    // ?

    console.log(justNumbers);
    /*
    Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
    somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
    no console.
    */

    let justMod2Or3 = [];

    justMod2Or3 = justNumbers.filter(function(item){

        return (item % 2 === 0 || item % 3 === 0);
    });



    console.log( '\nJust module of division by 2 or 3:' );
    // ?
    console.log(justMod2Or3);
    /*
    Declare uma variável chamada operation que receba, do array criado acima,
    um valor reduzido pela seguinte operação:
    - Somar 1 ao último valor retornado;
    - Multiplicar o resultado pelo valor atual.
    O cálculo deve começar com zero.
    Mostre o resultado no console.
    */

    let operation = justMod2Or3.reduce(function(acumulado, item){
            return (acumulado + 1) * item;
    }, 0 );


    console.log( '\nOperation:' );
    // ?
    console.log('Reduce',operation);
    /*
    Faça o mesmo cálculo passado acima, mas começando do último item para o
    primeiro. O nome da variável deve ser operation2. Mostre o resultado no
    console.
    */

    let operation2 = justMod2Or3.reduceRight(function(acumulado, item){
        return (acumulado + 1 ) * item;
}, 0 );


    console.log( '\nOperation 2:' );
    // ?
    console.log('ReduceRight',operation2)
    /*
    Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
    do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
    a "língua do P".
    PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
    infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
    falada, como se você estivesse falando em código xD
    */

  
  let name = ['Gil', 'ma', 'ra'];
    

    let NomeLiguaDoP = name.reduce(function(a, item){

        return  a + 'P' +  item; 
    },'' );
    //Colocando o acumulado como vazio, conseguimos colocar o P no inicio, porque o acumulado  -> vem  acumulado  + o 'P', cada vez que passa em cada item
    //''PGil
    // PGil''Pma
    // PGilPma''Pra
    //PGilPma''Pra
    //PGilPmaPra

    console.log( '\nSeu nome na língua do "P":' );
    // ?

    console.log(NomeLiguaDoP);

    /*
    Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
    e atribuirá o seu nome invertido (usando o array criado acima).
    */

    let inversedName = name.reduceRight(function( a, item ){

        return a + item;
        
    });

    console.log( '\nInversed Name:' );
    // ?

        console.log(inversedName);
        // tambem da para fazer com o metodo reverse;
        // console.log(name.reverse().join(''));
    /*
    Mostre no console o array `numberObjects`.
    */
    console.log( '\nNumber objects' );
    // ?

    console.log(numberObjects);



    console.log( '\nExiste um { number: 2 } em numberObjects?' );
    let obj = numberObjects[1];
    // ?
    console.log(numberObjects.indexOf(obj) > -1 ? "Existe um objeto { number: 2 } em numberObjects!": "Não existe um objeto { number: 2 } em numberObjects :("); // retorna a posicao 1; 
    
    
 
   // Se tivesse passado assim:  
    // console.log(numberObjects.indexOf({number: 2}) > -1); retorna falso, porque sao dois objetos diferentes, ocupam lugares 
    //distintos na memoria
    // E PRECISO ATRIBUIR O OBJETO EM QUESTAO PARA UMA VARIAVEL COMO FIZEMOS ACIMA. 

    
    
    /*
    Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
    será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
    */
    console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );
    // ?

    console.log('Buscando pelo lastIndex, a partir do indice 2. O {number:2} esta na posicao: ', numberObjects.lastIndexOf(obj, 2)) 

    /*
    Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
    formato de String.
    */

    console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
    // ?

    console.log(Array.isArray(justMod2Or3));
    console.log(justMod2Or3.toString());

})();