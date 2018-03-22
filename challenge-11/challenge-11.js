(function(){
  
// Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

/*
Crie uma variável chamada `once`, que recebe `false` como seu valor.
Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
loop, mostre no console a mensagem:
'Entrou ao menos uma vez!'
Qual loop você deve usar para que essa mensagem seja mostrada no console?
*/
var once = false; 

/*
while(once === true){
  console.log("Entrou ao menos uma vez");
} */

do{
  console.log("Entrou pelo menos uma vez");
}while(once === 'true');

/*
Crie um objeto chamado `person`, que receba as seguintes propriedades:
- 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
para o nome, idade, peso e data de nascimento dessa pessoa.
*/
var person = {
   name : 'Victor Nasicmento',
   age : 21,
   weight : 82,
   birthday : '18/02/97',
};
console.log(person.length);
/*
Use um loop para percorrer o objeto criado acima, mostrando no console
a frase:
'The [PROPERTY] of person is [VALUE]'
Aproveite e crie uma variável `counter` que vai contar quantas propriedades
esse objeto tem.
Após o loop, mostre a frase:
'The person has [COUNTER] properties'
*/
var counter; 
for(var property in person){
  console.log("The: "+ property + " of person is "+ person[property]);
}
  counter = Object.keys(person).length;
  console.log('The person has '+ counter + ' properties');
  
/*
Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
criado acima) é mais velha que a idade passada por parâmetro.
Se verdadeiro, retornar `true`. Senão, retornar false.
Após a função, mostrar a mensagem no console:
'The person has more than 25 years old? [TRUE/FALSE]'
*/

function moreThan(newAge){
   return newAge >= person.age ? 'The person has more than 25 years old ? '+true : 'The person has more than 25 years old ? ' + false; 
}

/*
Faça um loop de 0 a 20, que adicione cada número como um item de um
array chamado `numbers`. Se o contador for maior que 10, saia do loop.
Mostre no console os números no array.

counter = 1;
var numbers = [];
while(counter <= 20){
  if(counter > 10){
    break;
  }
  counter = numbers.push(counter);
  console.log(counter++);
  console.log(numbers);
}
*/
console.log( 'De 0 a 10:' );
var numbers = [];
for(var l = 0; l <= 20; l++) {
  if(l > 10) {
  break;
 }
  numbers.push(l);
}
console.log(numbers);

/*
Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
esses. Se o número for ímpar, pular para o próximo número.
Mostrar no console os números do array.
*/
console.log( 'Pares de 0 a 20:' );
/*counter = 1;
numbers = [];
var returnPar;
while(counter <= 20){
  if((counter / 2)===0){
      return counter
      
  }
  counter = numbers.push(counter);
  console.log(counter++);
  //console.log(numbers);
  }
*/
numbers = [];
for(var i = 0; i <= 20; i++) {
  if(i % 2 === 0)
    numbers.push(i);
  }
  console.log(numbers);
  
})();