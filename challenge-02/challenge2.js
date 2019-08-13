// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
    return x + y;
} 

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var funcao = soma(1,2);

// Qual o valor atualizado dessa variável?
funcao;

// Declare uma nova variável, sem valor.
var vari;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function nova(){
    vari = 3;
    return 'o valor da variável agora é '+vari;
}

// Invoque a função criada acima.
nova();

// Qual o retorno da função? (Use comentários de bloco).
/* 3 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function dois(a,b,c){
    if(a == null || b == null || c == null){
        return 'Preencha todos os valores corretamente!';
    }
    return a*b*c + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
dois(5,4);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
dois(1,2,3);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano false.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne null.
*/
function tres(g,h,j){
    if(g == undefined && h == undefined && j == undefined){
        return false;
    }else if(g != undefined && h != undefined && j == undefined){
        return g + h;
    }else if(g != undefined && h == undefined && j == undefined){
        return g;
    }else if(g != undefined && h != undefined && j != undefined){
        return (g + h) / j;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
tres(1);
tres(5,6);
tres(5,6,7);