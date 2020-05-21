# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
> function soma(x,y){
... var resultado = x +y;
... return resultado;
... }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
> var resultado = soma(5,8);
undefined
> resultado;

> var addresultado = 5;

> addresultado
5
> resultado + addresultado;
18
>

// Qual o valor atualizado dessa variável?
18

// Declare uma nova variável, sem valor.
var teste;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function valor(){
           var teste = 12;
                
            return teste;
          }

          teste = valor(5);
            
          console.log("O valor da variavel agora é "+valor(teste));


// Invoque a função criada acima.
teste = valor(5)

// Qual o retorno da função? (Use comentários de bloco).
?/*O valor da variavel agora é 5 onde 5 é o novo valor da variave*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
/function mult(x,y,z){
                var res = (x * y * z) + 2;

                if(typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined' ){
                    console.log("Preencha todos os valores corretamente");
                }else {
                    console.log("//O resultado é:",res);
                }
            }  

// Invoque a função criada acima, passando só dois números como argumento.
var res= mult(1,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
var res= mult(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//O resultado é: 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function calc(a,b,c){
                if(typeof a !== 'undefined' && typeof b === 'undefined' && typeof c === 'undefined' ){
                    console.log(a);
                }else if(typeof a !== 'undefined' && typeof b !== 'undefined' && typeof c === 'undefined' ){
                    console.log(a + b);
                }else if(typeof a !== 'undefined' && typeof b !== 'undefined' && typeof c !== 'undefined'){
                    console.log((a + b)/c);
                }else if(typeof a === 'undefined' && typeof b === 'undefined' && typeof c === 'undefined'){
                    console.log(false);
                }else{
                    return null;
                }
            }

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
calc(1);//1
calc(4,8);//12
calc(4,8,2);//6
calc();
```