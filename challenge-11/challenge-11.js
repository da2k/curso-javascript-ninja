(function(){
   // Envolva todo o c�digo desse arquivo em uma IIFE (incluindo esse coment�rio).

   /*
   Crie uma vari�vel chamada `once`, que recebe `false` como seu valor.
   Crie um loop que execute enquanto essa vari�vel for verdadeira. Dentro do
   loop, mostre no console a mensagem:
   'Entrou ao menos uma vez!'
   Qual loop voc� deve usar para que essa mensagem seja mostrada no console?
   */
   var once = false;
   do {console.log('Entrou ao menos uma vez!');} while(once);

   /*
   Crie um objeto chamado `person`, que receba as seguintes propriedades:
   - 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
   para o nome, idade, peso e data de nascimento dessa pessoa.
   */
   var person = {
      'name': 'Japhet',
      'age': 27,
      'weight': 80,
      'birthday': '1990/02/02'
   };

   /*
   Use um loop para percorrer o objeto criado acima, mostrando no console
   a frase:
   'The [PROPERTY] of person is [VALUE]'
   Aproveite e crie uma vari�vel `counter` que vai contar quantas propriedades
   esse objeto tem.
   Ap�s o loop, mostre a frase:
   'The person has [COUNTER] properties'
   */
   var counter = 0;
   for (var prop in person){
      counter++;
      console.log('The '+prop+' of person is '+person[prop]+'');

     };
    console.log('The person has '+counter+' properties');

   /*
   Crie uma fun��o chamada `moreThan`, que vai verificar se a pessoa (objeto
   criado acima) � mais velha que a idade passada por par�metro.
   Se verdadeiro, retornar `true`. Sen�o, retornar false.
   Ap�s a fun��o, mostrar a mensagem no console:
   'The person has more than 25 years old? [TRUE/FALSE]'
   */
   function moreThan(a){
      if(person['age']>a){
         return true;
      }
      return false;
   };
   console.log('The person has more than 25 years old? '+moreThan(25));

   /*
   Fa�a um loop de 0 a 20, que adicione cada n�mero como um item de um
   array chamado `numbers`. Se o contador for maior que 10, saia do loop.
   Mostre no console os n�meros no array.
   */
   console.log( 'De 0 a 10:' );
   var numbers = [];
   for (var i = 0; i <= 20; i++){
      numbers.push(i);
     if (i === 10) {
        break;
     };
   }
   console.log(numbers);

   /*
   Fa�a outro loop de 0 a 20, que adicione a um array chamado `numbers` (j�
   criado acima, s� precisa ser reiniciado) n�meros de 0 a 20, inclusive
   esses. Se o n�mero for �mpar, pular para o pr�ximo n�mero.
   Mostrar no console os n�meros do array.
   */
   console.log( 'Pares de 0 a 20:' );
   var numbers = [];
   for (var i = 0; i <= 20; i++){
     if (i % 2 !== 0) {
        continue;
     };
     numbers.push(i);
   }
   console.log(numbers);


})();