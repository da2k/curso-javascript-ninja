(function () {
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
  var numberObjects = [];

  for (var i = 1; i <= 10; i++) {
    numberObjects.push({ number: i });
  }
  console.log("Number Objects Array:", numberObjects);
  /*
Crie um array chamado `justNumbers`, que terá como elementos somente os
números do array criado acima. Mostre esse novo array no console.
*/
  var justNumbers = numberObjects.map(function (item) {
    return item.number;
  });
  console.log("\nJust Numbers:", justNumbers);

  /*
Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
no console.
*/
  var justMod2Or3 = justNumbers.filter(function (item) {
    return item % 2 === 0 || item % 3 === 0;
  });
  console.log("\nJust module of division by 2 or 3:", justMod2Or3);
  /*
Declare uma variável chamada operation que receba, do array criado acima,
um valor reduzido pela seguinte operação:
- Somar 1 ao último valor retornado;
- Multiplicar o resultado pelo valor atual.
O cálculo deve começar com zero.
Mostre o resultado no console.
*/
  var operation = justMod2Or3.reduce(function (acumulado, atual) {
    return (acumulado + 1) * atual;
  }, 0);
  console.log("\nOperation:", operation);

  /*
Faça o mesmo cálculo passado acima, mas começando do último item para o
primeiro. O nome da variável deve ser operation2. Mostre o resultado no
console.
*/
  var operation2 = justMod2Or3.reduceRight(function (acumulado, atual) {
    return (acumulado + 1) * atual;
  }, 0);
  console.log("\nOperation 2:", operation2);
  /*
Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
a "língua do P".
PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
falada, como se você estivesse falando em código xD
*/
  var name = ["An", "der", "son"];
  var Pname = name.reduce(function (acumulado, atual) {
    return acumulado + "P" + atual;
  }, ""); // teve que comecar o acumulado com uma string em branco
  console.log('\nSeu nome na língua do "P":', Pname);
  // ?

  /*
Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
e atribuirá o seu nome invertido (usando o array criado acima).
*/
  var inversedName = name.reduceRight(function (acumulado, atual) {
    return acumulado + atual;
  });
  console.log("\nInversed Name Usando reduceRight: ", inversedName);
  console.log("Usando a funcao reverse ", name.reverse());
  console.log("usando a funcao join ", name.join()); // usando o join podemos atrivuir uma string em branco join('') se quiser remover as virgulas
  //aqui por ultimo apenas se quiser reduzir o array name para um string
  console.log(
    "Usando o toString para apenas converter o array name para uma string: ",
    name.toString()
  ); // lembrando que podemos remover as virgulas usa -> .toString('')
  /*
Mostre no console o array `numberObjects`.
*/
  console.log("\nNumber objects", numberObjects);
  // ?

  /*
Verifique se existem em algum índice de numberObjects um objeto ìgual a
{ number: 2 }. Se houver, mostre no console:
- "Existe um objeto { number: 2 } em numberObjects!"
Senão, mostre a frase:
- "Não existe um objeto { number: 2 } em numberObjects :("
Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
o que acontece ;)
*/
  var obj = numberObjects[1] // aqui entra o conceito de ponteiro parametro por valor ou por referencia
  if (numberObjects.indexOf(obj) >-1 ) {
    console.log("\nExiste um { number: 2 } em numberObjects?");
  }
  else {
    console.log("Não existe um objeto { number: 2 } em numberObjects :(");
  }
  /*
Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
*/
  console.log(
    "\nE buscando a partir do último índice, o { number: 2 } existe?"
  );

  if (numberObjects.lastIndexOf({number: 2}, 2) >-1 ) { // aqui diz que nao existem por que number: 2 é um outro objeto na memoria e nao o que pertence ao array numberObjects
    console.log("\nExiste um { number: 2 } em numberObjects?");
  }
  else {
    console.log("Não existe um objeto { number: 2 } em numberObjects :(");
  }
  /*
Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
formato de String.
*/
  console.log(
    "\njustMod2Or3 é um array? Se for, a representação dele em String é:", Array.isArray(justMod2Or3)
  );
  if(Array.isArray(justMod2Or3)) {
    console.log("O array justMod20r3 no formato de estring -> " , justMod2Or3.toString())
  }

})();
