/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
( function( wind , doc){
 
 'use strict';

 var $input = doc.querySelector('input'); 
 var $buttonNumber = doc.querySelectorAll('[data-js="number"]');
 var $buttonOperacoes =  doc.querySelectorAll('[data-js="operador"]');
 var $buttonCe  = doc.querySelector('[data-js="ce"]');
 var $buttonResultado = doc.querySelector('[data-js="="]');


 // 
  Array.prototype.forEach.call( $buttonNumber , atribuirNumber    )
  Array.prototype.forEach.call( $buttonOperacoes , atribuirOperador  )
  $buttonCe.addEventListener( 'click' , atribuirClear , false )
  $buttonResultado.addEventListener('click', atribuirResultado , false)
 //



 function  atribuirNumber( item ){
      
         item.onclick = function(){
           
           var regex = /(^0\d)+/gm;
      
           $input.value +=   item.innerHTML;
           $input.value = $input.value.replace( regex ,item.innerHTML);
          
       }
 }


 function atribuirOperador( item ){

      item.onclick = function(){

          var regex = /[\+\-\x\÷]$/g;
         
          if( regex.test( $input.value ) )
           $input.value  = $input.value.replace(regex , item.innerHTML );
          else
           $input.value+= item.innerHTML;
 
      }
 }  
 

 function atribuirClear(){

     $input.value = 0;

 }


 function atribuirResultado(){

  var regex1  = /(\d+)([\x\÷])(\d+)/g;
  var regex2  = /(\d+)([\+\-])(\d+)/g;
  var value   = $input.value;

  if( regex1.test( $input.value ) )
  $input.value = value.replace(regex1 , primeiraOrdem )
  else if( regex2.test( $input.value ) )
  $input.value = value.replace(regex2 , segundaOrdem  )
  else
  return 'Trabalho finalizado.';
   
  atribuirResultado();

 }

 function primeiraOrdem(regex,n1,operador,n2){
     
	if( operador === 'x' )
	return +n1 * +n2;
    else if( operador === '÷' )
    return +n1 / +n2;

 }
 function segundaOrdem(regex,n1,operador,n2){
  
    if( operador === '+' )
	return +n1 + +n2;
    else if( operador === '-' )
    return +n1 - +n2;

	
 }


} )( window ,  document )