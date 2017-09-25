(function(win, doc){

  'use strict';

  var $valor = doc.querySelector('[type="numeros"]');
  var $zero = doc.querySelector('[data-js="zero"]');
  var $um = doc.querySelector('[data-js="um"]');
  var $dois = doc.querySelector('[data-js="dois"]');
  var $tres = doc.querySelector('[data-js="tres"]');
  var $quatro = doc.querySelector('[data-js="quatro"]');
  var $cinco = doc.querySelector('[data-js="cinco"]');
  var $seis = doc.querySelector('[data-js="seis"]');
  var $sete = doc.querySelector('[data-js="sete"]');
  var $oito = doc.querySelector('[data-js="oito"]');
  var $nove = doc.querySelector('[data-js="nove"]');
  var $soma = doc.querySelector('[data-js="soma"]');
  var $subtracao = doc.querySelector('[data-js="subtracao"]');
  var $multiplicacao = doc.querySelector('[data-js="multiplicacao"]');
  var $divisao = doc.querySelector('[data-js="divisao"]');
  var $igual = doc.querySelector('[data-js="igual"]');
  var $reiniciar = doc.querySelector('[data-js="limpar"]');
  var arrayDados = [];
  var resultadoTotal = '';
  var armazenaNumero = [];
  var armazenaAux = '';

  $zero.addEventListener('click', function(event){
    event.preventDefault();
    $valor.value === '0' ? $valor.value = $zero.value : $valor.value += $zero.value;
    armazenaAux += $zero.value;
  });

  $um.addEventListener('click', function(envet){
    event.preventDefault();
    $valor.value === '0' ? $valor.value = $um.value : $valor.value += $um.value;
    armazenaAux += $um.value;
  });

  $dois.addEventListener('click', function(envet){
    event.preventDefault();
    $valor.value === '0' ? $valor.value = $dois.value : $valor.value += $dois.value;
    armazenaAux += $dois.value;
  });

  $tres.addEventListener('click', function(envet){
    event.preventDefault();
    $valor.value === '0' ? $valor.value = $tres.value : $valor.value += $tres.value;
    armazenaAux += $tres.value;
  });

  $quatro.addEventListener('click', function(envet){
    event.preventDefault();
    $valor.value === '0' ? $valor.value = $quatro.value : $valor.value += $quatro.value;
    armazenaAux += $quatro.value;
  });

  $cinco.addEventListener('click', function(envet){
    event.preventDefault();
    $valor.value === '0' ? $valor.value = $cinco.value : $valor.value += $cinco.value;
    armazenaAux += $cinco.value;
  });

  $seis.addEventListener('click', function(envet){
    event.preventDefault();
    $valor.value === '0' ? $valor.value = $seis.value : $valor.value += $seis.value;
    armazenaAux += $seis.value;
  });

  $sete.addEventListener('click', function(envet){
    event.preventDefault();
    $valor.value === '0' ? $valor.value = $sete.value : $valor.value += $sete.value;
    armazenaAux += $sete.value;
  });

  $oito.addEventListener('click', function(envet){
    event.preventDefault();
    $valor.value === '0' ? $valor.value = $oito.value : $valor.value += $oito.value;
    armazenaAux += $oito.value;
  });

  $nove.addEventListener('click', function(envet){
    event.preventDefault();
    $valor.value === '0' ? $valor.value = $nove.value : $valor.value += $nove.value;
    armazenaAux += $nove.value;
  });

  $soma.addEventListener('click', function(envet){
    event.preventDefault();
    if($valor.value.length === 1 && $valor.value === '0')
      return;
    if($valor.value.slice(-1) === '*' || $valor.value.slice(-1) === '/' || $valor.value.slice(-1) === '-')
      $valor.value = $valor.value.slice(0, $valor.value.length - 1);
    if($valor.value.slice(-1) !== '+') {
      armazenaNumero.push(armazenaAux);
      armazenaAux = '';
      $valor.value += $soma.value;
      armazenaNumero.push($soma.value);
    }
  });

  $subtracao.addEventListener('click', function(envet){
    event.preventDefault();
    if($valor.value.length === 1 && $valor.value === '0')
      return;
    if($valor.value.slice(-1) === '*' || $valor.value.slice(-1) === '/' || $valor.value.slice(-1) === '+')
      $valor.value = $valor.value.slice(0, $valor.value.length - 1);
    if($valor.value.slice(-1) !== '-'){
      armazenaNumero.push(armazenaAux);
      armazenaAux = '';
      $valor.value += $subtracao.value;
      armazenaNumero.push($subtracao.value);
    }
  });

  $multiplicacao.addEventListener('click', function(envet){
    event.preventDefault();
    if($valor.value.length === 1 && $valor.value === '0')
      return;
    if($valor.value.slice(-1) === '+' || $valor.value.slice(-1) === '/' || $valor.value.slice(-1) === '-')
      $valor.value = $valor.value.slice(0, $valor.value.length - 1);
    if($valor.value.slice(-1) !== '*'){
      armazenaNumero.push(armazenaAux);
      armazenaAux = '';
      $valor.value += $multiplicacao.value;
      armazenaNumero.push($multiplicacao.value);
    }
  });

  $divisao.addEventListener('click', function(envet){
    event.preventDefault();
    if($valor.value.length === 1 && $valor.value === '0')
      return;
    if($valor.value.slice(-1) === '*' || $valor.value.slice(-1) === '+' || $valor.value.slice(-1) === '-')
      $valor.value = $valor.value.slice(0, $valor.value.length - 1);
    if($valor.value.slice(-1) !== '/'){
      armazenaNumero.push(armazenaAux);
      armazenaAux = '';
      $valor.value += $divisao.value;
      armazenaNumero.push($divisao.value);
    }
  });

  $igual.addEventListener('click', function(envet){
    event.preventDefault();
    if($valor.value.length === 1)
      return;
    armazenaNumero.push(armazenaAux);
    resultadoTotal = armazenaNumero.join('');
    $valor.value = eval(resultadoTotal);
    console.log("valor total", $valor.value);
  })

  $reiniciar.addEventListener('click', function(envet){
    event.preventDefault();
    $valor.value = '0';
  });


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
})(window, document);

