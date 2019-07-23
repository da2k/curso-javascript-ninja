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

$input = document.querySelector('input')
$divButtons = document.querySelector('.buttons')

$buttonReset = document.querySelector('[type=reset]')

$buttonReset.addEventListener('click', function(e){
    $input.value = 0
})

$buttonResult = document.querySelector('#result')

$buttonResult.addEventListener('click', function(e){
    sum($input.value)
})

for(let i=1; i<10;i++){
    $button = document.createElement('button')
    $button.setAttribute("data",i)
    $button.innerText = i

    $divButtons.appendChild($button)  
}

$buttons = document.querySelectorAll('[data]')
$operators = document.querySelectorAll('.standard')

$buttons.forEach(function(btn){

    btn.addEventListener('click', function(e){
       let valor = btn.getAttribute("data")
       console.log(valor)
        
       if($input.value == 0){
           $input.value = valor
       }else{
             $input.value +=valor
       }
       
    })

})

$operators.forEach(function(btnOperator){
    btnOperator.addEventListener('click', function(e){
        let op = btnOperator.innerText
        // console.log(op)
        console.log("Operador: "+op)

        let string = $input.value
        // console.log(string)

       if(string.match(/(\*|\/|\-|\+){2}$/gim)){
           $input.value = string.replace(/(\*|\/|\-|\+){2}$/gim,op)
           console.log('Substituindo ultimo caractere por: '+op)
       }
    })

})


function sum(valores){
    console.log(eval(valores))
    $input.value = eval(valores)
}