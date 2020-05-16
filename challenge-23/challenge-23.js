((doc)=>{
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

    'use strict';

    let result;
    let value;
    let displayValue = doc.querySelector('input');
    let regexOpLast = new RegExp('[\\*\\/\\+-]$');
    let regexOp = new RegExp('[\\*\\/\\+-]');
    let regexParentheses = new RegExp('[)(]','gm');
    let regexMultiply = new RegExp('\\*','gm');

    function initButtonsEvents(){
        let buttons = doc.querySelectorAll('#buttons > div > button[data-js]')
        buttons.forEach((btn,index)=>{
            btn.addEventListener('click', event=>{
                execBtn(btn.value);
            })
        })
    }

    function execBtn(value){
        switch(value){
          
            case 'ce':
                cancelEntry();
                break;
            case '+':
            case '-':
            case '/':
            case '*':
                addOperation(value);
                break;
            case '=':
                calc();
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                addValue(value);
                break;        
            default:
                alert('ERRO NA OPERAÇÃO!!!');
                break;
        }
    }

    function setDisplay(){
        displayValue.value = value ? value.replace(regexParentheses,'').replace(regexMultiply,'x') : '0';
    }

    function cancelEntry(){
        value = null;
        setDisplay();
    }

    function calc(){
        if(!value || regexOpLast.test(value)){
            return;
        }

        result = eval(value);
        value = result.toString();

        setDisplay();
    }

    function addValue(number){
        if(!value){
            if(number==='0'){
                return;
            }
            value = number;
            
        }else{
            if(regexOpLast.test(value) && number==='0'){
                return;
            }
            value += number;
        }
        setDisplay();
    }

    function addOperation(op){
        if(!value){
            return;
        }else{
           if(regexOp.test(value)){
               if(regexOpLast.test(value)){
                value = value.replace(regexOpLast,op);
               }else{
                   value = '('+value+')'+op;
               }
           }else{
               value += op;
           }
        }
        setDisplay();
    }

    initButtonsEvents();


})(document)
