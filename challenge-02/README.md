# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
    return x+y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var somar = soma(5,5) + 5;

// Qual o valor atualizado dessa variável?
somar = 15

// Declare uma nova variável, sem valor.
var semVal;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function(semVal){
    semVal = 20
    
    return semVal = "O valor da variável agora é:" + semVal; 
}

// Invoque a função criada acima.
function(semVal);

// Qual o retorno da função? (Use comentários de bloco).

/* O Valor da variável agora é 20 
    semVal = 20; 
    */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function multiplica(x,y,z){
   
    if(x === undefined || y === undefined || z === undefined ){
     console.log("Preencha todos os valores corretamente!"); 
     alert("Preencha todos os valores corretamente!"); 
    }else{
        return (x+y+z)+2;
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplica(10,20);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplica(10,20,30);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
6002

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function desafioFinal(x1,y1,z1){

    if(x1 !== && undefined  y1 === undefined && z1 === undefined  ){
           return x1;
    } 
    else if(x1 === && undefined  y1 !== undefined && z1 === undefined  ){
           return y1;
    } 
     
    else if(x1 === && undefined  y1 === undefined && z1 !== undefined  ){
           return z1;
    } 
    else if(x1 !== && undefined  y1 !== undefined && z1 === undefined )
        return x1+y1;
    }
    else if(x1 === && undefined  y1 !== undefined && z1 !== undefined )
        return y1+z1;
    }
    else if(x1 !== && undefined  y1 === undefined && z1 !== undefined )
        return x1+z1;
    }
    else if(x1 !== && undefined  y1 !== undefined && z1 !== undefined ) {
        return (x1+y2)/z1;
    }
    else if(x1 === && undefined  y1 === undefined && z1 === undefined ){
        return false;
    }else{
        return null;
    }


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
desafioFinal(); //false
desafioFinal(10); // 10
desafioFinal(10,20); //30
desafioFinal(40,20,30); //2
```