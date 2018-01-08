# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var soma = soma(2,3) + 5;

// Qual o valor atualizado dessa variável?
10

// Declare uma nova variável, sem valor.
var myvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function setarValor(){
    myvar = 20;
    return "O valor da Variavel Agora é " + myvar;
}

// Invoque a função criada acima.
setarValor()

// Qual o retorno da função? (Use comentários de bloco).
/*RESPOSTA:
    O valor da variavel agora é 20 
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicar (x,y,z){
    if (x === undefined || y === undefined || z === undefined){
        return  'Preencha os Dados Corretamente';
    }
    else{
        return ((x*y*z) + 2)
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicar(2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
'Peencha todos os dados Corretamente'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicar(3,2,1);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function teletub (x,y,z){
    
    var indice = 0;
    var container =[];
    var retorno = null;
    
    if (x !== undefined){
        container[indice] = x;
        indice++;
    }
    if(y !== undefined){
        container[indice] = y;
        indice++;
    }
    if(z !== undefined){
        container[indice] = z;
    }

    if(container.length === 0){
        return false;
    }else if(container.length === 1){
        return container[0];
    }else if(container.length === 2){
        return container[0] + container[1];
    }else if(container.length === 3){
        return (container[0] + container[1])/container[2]; 
    }else{
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
teletub();
teletub(1);
teletub(1,2);
teletub(1,2,3);
```