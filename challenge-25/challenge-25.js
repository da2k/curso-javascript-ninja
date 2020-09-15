(function(){
  'use strict';
/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/
  //////////////// slice()
  const nome = 'Willerson';
  const apelido = nome.slice(0, 4);
  const filhoEmIngles = nome.slice(-3);
  console.log(apelido);
  console.log(filhoEmIngles);

  function list() {
    return Array.prototype.slice.call(arguments);
  }

  var list1 = list(1,2,3)
  console.log(list1)

  ///////////////// splice()
  var myFish = [ 'angel', 'clown', 'mandarin', 'surgeon' ];
  var removed = myFish.splice(2, 0, 'drum');

  removed = myFish.splice(3, 1);
  console.log(removed, myFish);


  removed = myFish.splice(2, 1, "trumpet");
  console.log(removed, myFish);

  removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
  console.log(removed, myFish);

  removed = myFish.splice(3, Number.MAX_VALUE);
  console.log(removed, myFish);

  ///////////////// forEach()
  [ 2, 5, 9 ].forEach(logArrayElements);

  function logArrayElements( element, index, array ) {
    console.log( `a[${index}] = ${element}` );
  };

  ///////////////// every() retorna true se todos os elemento forem maior que 10
  function isBigEnough( element, index, array ) {
    return element >= 10;
  }

  console.log( [ 12, 5, 8, 130, 44 ].every(isBigEnough) ); // retorna false
  console.log( [ 12, 15, 28, 130, 44 ].every(isBigEnough) );// retorna true

  //////////////// some() returna true se pelo menos um elemento for maior que 10
  function isbiggerThan10( element, index, array ) {
    return element > 10;
  }

  console.log( [ 2, 5, 8, 1, 4 ].some(isbiggerThan10) );
  console.log( [ 12, 5, 8, 1, 4 ].some(isbiggerThan10) );

  //////////////// map()
  var numbers = [ 1, 4, 9 ];
  var roots = numbers.map(Math.sqrt);
  console.log('raiz', roots);

  var doubles = numbers.map(num => num * 2)
  console.log(doubles);

  var numeros = [ 1, 2, 3, 4, 5 ];
  var quadrados = numeros.map(function(item) {
    return Math.pow(item, 2);
  });
  console.log(quadrados);

  /////////////// filter()
  function isBigEnough(value) {
    return value >= 10;
  }

  var filtered = [12, 5, 8, 130, 44, 2, 15, 60, 8].filter(isBigEnough);
  console.log(filtered);

  var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];

  var invalidEntries = 0;

  function filterById(obj) {
    if ( 'id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id) )
      return true
    invalidEntries++;
    return false;
  }

  var arrById = arr.filter(filterById);

  console.log('Filtered Array\n', arrById);
  console.log('Number of Invalid Entries = ', invalidEntries);

  /////////////////  reduce()
  console.log( [ 0, 1, 2, 3, 4 ].reduce( function( acumulador, valorAtual, index, Array ) {
    return acumulador + valorAtual;
  }, 2 ) );

  const total = [ 0, 1, 2, 3 ].reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
  0 );
  console.log( total );

  const valorInicial = 0;
  const soma = [{x: 1}, {x: 2}, {x: 3}].reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual.x;
  },0);
  console.log(soma); // loga 6

  let reduzido = [ [0, 1], [2, 3], [4, 5] ].reduce(
    function(acumulador, valorAtual) {
      return acumulador.concat(valorAtual);
    },
    []
  );
  console.log(reduzido);

  let names = [ 'Alice', 'Bob', 'Tiff', 'Bruce', 'Alice' ];

  let countedNames = names.reduce(function(allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  console.log(countedNames);

  //// Functional Programming
  function adder(x) {
    return function(y) {
      return x + y;
    }
  }

  var add2 = adder(2);
  console.log( add2(3) );
  console.log( adder(10)(8) );

  var car = {
    color: 'yellow'
  };

  function getCarColor(myCar) {
    return myCar.color;
  }

  console.log( getCarColor(car) );

  function showOtherFunction(func) {
    return func();
  }
  ////
  function returnedFunction() {
    return 'Returned function';
  }

  console.log( showOtherFunction( returnedFunction ) );

  //// métodos de funções
  function myFunction(a, b, c) {
    console.log( this.lastName );
  }
  console.log(myFunction.length);

  var obj = { prop: 1, prop: 2 };
  console.log( myFunction.toString() );

  console.log( obj.toString() );

  var myName = new myFunction();
  myName.lastName = 'Miranda'

  function nameFunction(a, b, c, d ) {
    console.log(this.lastName, a, b, c, d)
  }

  var objName = {
    lastName: 'Miranda'
  }

  var objName2 = {
    lastName: 'Silva'
  }

  var arr = [ 1, 2, 3, 4 ];

  nameFunction.call(objName2, arr);

  nameFunction.apply(objName2, arr);


  nameFunction.apply(objName2, arr);

  /// PROTOTYPE
  function MyFunction( name, lastName ) {
    this.name = name;
    this.lastName = lastName;
    // this.age = 30;
  }

  MyFunction.prototype.fullName = function() {
    return this.name + ' ' + this.lastName;
  }

  var will = new MyFunction( 'Willerson', 'Miranda' );

  MyFunction.prototype.age = 20;
  console.log( will.fullName() )
  MyFunction.prototype.age = 50; // sobrescrevendo ação padrão, não sobreecree dentro do construtor
  console.log( will.age );

  console.log(MyFunction);

  // Array-like como arrays
  function arrayLikeFunction() {
    Array.prototype.forEach.call( arguments, function(item, index) {
      console.log( item )
    })
  }

  function arrayLikeFunction2() {
    Array.prototype.forEach.apply( arguments, [function(item, index) {
      console.log( item )
    }]);
  }

  function arrayLikeFunctionReduce() {
    var result = Array.prototype.reduce.call( arguments, function(accumulated, actual, index) {
      return accumulated + actual;
    });
    console.log(result)
  }

  console.log( arrayLikeFunction( 1,2,3,4,5,6 ) )
  console.log( arrayLikeFunction2( 1,2,3,4,5,6 ) )
  console.log( arrayLikeFunctionReduce( 1,2,3,4,5,6 ) )

})();
