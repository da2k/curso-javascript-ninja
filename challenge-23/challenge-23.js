(function( doc ) {
  'use strict';
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
var $inputCalculo = doc.querySelector( "input[type='text']" );
var $ce = doc.querySelector( '[data-js="ce"]' );

$ce.addEventListener('click', function(evt) {
  evt.preventDefault();
  $inputCalculo.value = '0';
})

var $btnValue = doc.querySelectorAll( '[data-js="value"]' );
var $btnSoma = doc.querySelector( '[data-js="soma"]' );
var $btnSub = doc.querySelector( '[data-js="sub"]' );
var $btnMult = doc.querySelector( '[data-js="mult"]' );
var $btnDivider = doc.querySelector( '[data-js="divider"]' );
var $btnResult = doc.querySelector( '[data-js="result"]' );

$btnSoma.addEventListener('click', function(evt) {
    evt.preventDefault();
    $inputCalculo.value += $btnSoma.textContent;
    var testeValor = $inputCalculo.value.replace(/\D+$/, '+');
    $inputCalculo.value = testeValor;
});
$btnSub.addEventListener('click', function(evt) {
    evt.preventDefault();
    $inputCalculo.value += $btnSub.textContent;
    var testeValor = $inputCalculo.value.replace(/\D+$/, '-');
    $inputCalculo.value = testeValor;
});
$btnMult.addEventListener('click', function(evt) {
    evt.preventDefault();
    $inputCalculo.value += $btnMult.textContent;
    var testeValor = $inputCalculo.value.replace(/\D+$/, 'x');
    $inputCalculo.value = testeValor;
});
$btnDivider.addEventListener('click', function(evt) {
    evt.preventDefault();
    $inputCalculo.value += $btnDivider.textContent;
    var testeValor = $inputCalculo.value.replace(/\D+$/, '÷');
    $inputCalculo.value = testeValor;
});

$btnValue.forEach(element => {
    element.addEventListener('click', function(evt) {
      evt.preventDefault();
      element.textContent === 0 ? element.textContent = '0'
      : $inputCalculo.value = $inputCalculo.value.replace(/^0+/, '');
      $inputCalculo.value += element.textContent;
    });
});

$btnResult.addEventListener('click', function(evt) {
    evt.preventDefault();

    var testeValor = $inputCalculo.value.replace(/\D+$/, '');
    $inputCalculo.value = testeValor;

    var multi = $inputCalculo.value.replace(/x/g, '*');
    $inputCalculo.value = multi;
    var divider = $inputCalculo.value.replace(/÷/g, '/');
    $inputCalculo.value = divider;
    var result = eval( $inputCalculo.value )

    $inputCalculo.value = result;

});


})( document );
