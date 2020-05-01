# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
    return x+y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let valor = soma(10,18) + 5;

// Qual o valor atualizado dessa variável?
33

// Declare uma nova variável, sem valor.
let valor2;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function retornaString(valor){
    valor = 50;
    return `O valor da variável agora é ${valor}. Onde ${valor} é o novo valor da variável.`;
}

// Invoque a função criada acima.
retornaString(valor2);

// Qual o retorno da função? (Use comentários de bloco).
/*O valor da variável agora é 50. Onde 50 é o novo valor da variável.*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicar(x,y,z){
    let array = Array.from(arguments);
    if(array.length < 3){
        return 'Preencha todos os valores corretamente!';
    }
    return array.reduce((prevValor, valor)=> prevValor*valor) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicar(1,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*Preencha todos os valores corretamente!*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicar(1,5,20);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*102*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function operacoes(x,y,z){
    let array = Array.from(arguments);

    switch(array.length){
        case 0:
            return false;
        case 1:
            return array[0];
        case 2:
            return array.reduce((prevValor,valor)=>prevValor + valor);
        case 3:
            let operacao = 0;
            array.forEach((item,index)=>{
                if(index < array.length-1){
                    operacao += item;
                }else{
                    operacao /= item;
                }
            });
            return operacao;
        default:
            return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
operacoes(); //RESULTADO: false
operacoes(2); //RESULTADO: 2
operacoes(3,4); //RESULTADO: 7
operacoes(5,6,7); //RESULTADO: 1.5714285714285714
operacoes(8,9,10,11); //RESULTADO: null
```
