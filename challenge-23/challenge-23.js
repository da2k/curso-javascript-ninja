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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Challenge 21</title>
</head>
<body>
    <input type="text" value = 0 readonly data-js="visor">
    <div class="buttons">
        <button data-js="button-number" data-id="button-number0"> 0</button>
        <button  data-js="button-number"  data-id="button-number1"> 1</button>
        <button  data-js="button-number"  data-id="button-number2"> 2</button>
        <button  data-js="button-number"  data-id="button-number3"> 3 </button>
        <button  data-js="button-number"  data-id="button-number4"> 4</button>
        <button  data-js="button-number"  data-id="button-number5"> 5</button>
        <button  data-js="button-number"  data-id="button-number6"> 6</button>
        <button  data-js="button-number"  data-id="button-number7"> 7</button>
        <button  data-js="button-number"  data-id="button-number8"> 8</button>
        <button  data-js="button-number"  data-id="button-number9"> 9</button>
     </div>
    <div class="operations">
    <button data-js="button-operation" data-id="button-operation-plus"> + </button>
    <button data-js="button-operation" data-id="button-operation-minus"> - </button>
    <button data-js="button-operation" data-id="button-operation-mult"> * </button>
    <button data-js="button-operation" data-id="button-operation-div"> / </button>
        <button data-js="button-operation" data-id="button-operation-equal"> = </button>    
    <button data-js="button-operation" data-id="button-operation-ce"> CE </button>    
    </div>
</body>

</html>
