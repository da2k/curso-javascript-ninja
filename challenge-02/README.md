# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
?function soma(n1,n2){
            var result = n1+n2;
            return result;
        }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
?var somaTeste = soma(5+'5'); //55


// Qual o valor atualizado dessa variável?
?console.log(somaTeste);

// Declare uma nova variável, sem valor.
?var variavelNoValue;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
?function adicaoValor(parametro){
            parametro = 2020;
            return console.log("Valor da variavel agora é "+ parametro);
        }

// Invoque a função criada acima.
?adicaoValor(variavelNoValue);

// Qual o retorno da função? (Use comentários de bloco).
?      /**
       * Valor da variavel agora é 2020
       */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
?function multiplicaESoma(parametroUm,parametroDois,parametroTres){
            if(parametroUm == null  || parametroDois == null || parametroTres == null){
                return console.log("Preencha Todos valores Corretamente!");
            }else{
                var result = parametroUm * parametroDois * parametroTres + '2';
                return console.log(result);
            }
        }

// Invoque a função criada acima, passando só dois números como argumento.
?multiplicaESoma(1,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?// "Preencha Todos valores Corretamente!" 

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
?multiplicaESoma(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?//62

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
?function funcaoLoca(paramUm,paramDois,paramTres){
            if(paramUm != null && paramDois == null && paramTres == null){
                return console.log(paramUm);
            }else if(paramUm != null && paramDois != null && paramTres == null){
                var result = paramUm + paramDois;
                return console.log(result);
            }else if(paramUm != null && paramDois != null && paramTres != null){
                var result = (paramUm + paramDois) / paramTres;
                return console.log(result);
            }else if(paramUm == null && paramDois == null && paramTres == null){
                return console.log(false);
            }else{
                return console.log(null);
            }
        }

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?funcaoLoca(1); //1
 funcaoLoca(1,2); //3
 funcaoLoca(1,2,3); //1
 funcaoLoca(); //false 
 funcaoLoca(); //null, nunca vai cair aqui deus >_>
```