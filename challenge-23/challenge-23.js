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
    <input type="text" value = 0 readonly>
    <div class="buttons">
        <button> 0</button>
        <button> 1</button>
        <button> 2</button>
        <button> </button>
        <button> 4</button>
        <button> 5</button>
        <button> 6</button>
        <button> 7</button>
        <button> 8</button>
        <button> 9</button>
     </div>
    <div class="operations">
    <button> + </button>
    <button> - </button>
    <button> * </button>
    <button> / </button>
    <button> CE </button>    
    </div>
</body>

</html>
