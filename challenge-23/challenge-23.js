(function(window, document){
   
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
    var $elementNumbers = document.querySelectorAll('[class="calcNumber"]');
    var $elementOperators = document.querySelectorAll('[class="calcOperator"]');
    var $resultado = document.getElementById('resultado');
    var $buttonCE = document.getElementById('CE');
    var $buttonIgual = document.getElementById('igual');

    Array.prototype.forEach.call($elementNumbers, function(element) {
        element.addEventListener('click', handleNumbers);
      });
    Array.prototype.forEach.call($elementOperators, function(element) {
        element.addEventListener('click', handleOperators);
      });
    $buttonIgual.addEventListener('click', handleClickIgual, false);
    $buttonCE.addEventListener('click', handleClickCE, false);

    function handleNumbers(){
        concatenar(this.value, false);
    }

    function handleOperators(){
        concatenar(this.value, true);
    }

    var lastOperador = false;
    function removerUltimoCaractere(x){
        return x.slice(0, - 1);
    }

    function concatenar(novo, operador){
        var atual = $resultado.value;
        if( atual === '0'){
            if(operador)
                return;
            atual = '';
        }

        if (operador && lastOperador)
            atual = removerUltimoCaractere(atual);
        lastOperador = operador;
        $resultado.value = atual + novo;
    }
    
    function handleClickCE(){ 
        $resultado.value = '0'; 
        lastOperador = false;
    }

    function handleClickIgual(){ 
        var conta = $resultado.value.replace('%', '/').replace('x','*');
        if(lastOperador)
            conta = removerUltimoCaractere(conta);
        lastOperador = false;
        $resultado.value = eval(conta); 
    }

})(window, document);
