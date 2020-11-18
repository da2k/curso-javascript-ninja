# Desafio Semana #1

```js
// Declarar uma variável chamada `myvar`, sem valor.
let myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
let soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma += 1;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;

// Qual é o valor da variável `soma` até aqui?
72;
console.log(soma);

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
let souninja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
let comida = ['arroz', 'feijão', 'ovo'];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
if (soma == myvar) {
  console.log(
    `A variável myvar, que tem valor ${myvar} é igual a variável soma, que também tem o valor de ${soma}.`
  );
} else if (typeof soma == typeof myvar) {
  console.log(
    `A variável myvar, que é do tipo ${typeof myvar} é igual a variável soma, que também é do tipo ${typeof soma}.`
  );
} else {
  console.log(`A variável myvar tem valor e tipo diferente da variável soma.`);
}

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
if (myvar < soma) {
  console.log(
    `A variável myvar, que tem valor ${myvar} é menor que a variável soma, que tem o valor de ${soma}.`
  );
} else if ((myvar = soma)) {
  console.log(
    `A variável myvar, que tem valor ${myvar} é igual a variável soma, que também tem o valor de ${soma}.`
  );
} else {
  console.log(
    `A variável myvar, que tem valor ${myvar} é maior que a variável soma, que tem o valor de ${soma}.`
  );
}

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(num1, num2) {
  return num1 / num2;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
divisao(10, 2);
console.log(divisao(10, 2));
```
