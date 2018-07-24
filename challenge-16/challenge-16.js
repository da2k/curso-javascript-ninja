// ========== use strict - Criação de variáveis sem o var ==========
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode
// use strict, é uma diretiva usada a partir do ecma script 5
// 'use strict';
// diretiva que vai dizer que naquele escopo de funcao, vai estar em escopo restrito
// por exemplo, se cria uma variavel sem o var, ele vai acusar o erro.
// entao sempre no começo do método devemos por esse cara
// use strict n permite uso de variaveis sem o var

// use strict - uso do with e global this === undefined
// use strict não permite o uso do with
// with: serve para diminuir o tamanho de um objeto

(function () {

    var obj = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33'
                }
            }
        }
    }

    console.log(obj.prop1.prop2.prop3.prop31);

    // usando with (statemant)
    // esse cara nao funciona usando strict 
    with(obj.prop1.prop2.prop3) {
        // nao precia ir até o objeto prop3 novamente para acessar suas variaveis
        console.log(prop31, prop32, prop33);
    }
    // no escopo global dentro de funçoes o this === undefined

    // dentro da iife
    console.log(this); // escopo global, representa o objeto window
    // usando strict
    console.log(this); // representa o undefined ao invés de representar a window no scopo global

    // use strict o operador delete, objetos e funções
    // delete: operador lança um sintax error quando ele não pode deletar
    var obj = {
        prop1:'1',
        prop2:'2',
        prop3:'3'
    };
    var myvar = 'x';

    console.log(delete obj.prop1); // deleta a propriedade - retorna true
    console.log(delete myvar); // false n consegue deletar

    // com o use strict
    console.log(delete myvar); // esse cara irá lançar um erro
    console.log(delete obj); // lança erro

    // sem o modo restrito isso n da erro e o prop1 fica com o valor 2, ja com o use restrict isso gera erro
    // nao é permitido propriedades com o mesmo nome
    var obj = {
        prop1:'1',
        prop1:'2',
        prop3:'3'
    };
    // argumentos e funçoes tb devem ter nomes diferentes
    // sem o uso do use ele soma, com uso do use ele ta erro
    function myFunction (a, a, c){
        return a + b;
    }

    // Objeto String
    'benhur'.length; // nesse caso ele faz um wrapper do objeto string pq ele tem acesso ao metodo length
    var ben = new String('benhur'); // é a mesma coisa que a linha de cima
    // charAt
    'benhur'.charAt(0); // retorna b
    // concat
    ben.concat('da rosa','guimaraes'); // retorna a concatenacao mas n muda a variavel principal
    // indexof verifica a posicao e retorna o indice
    // lastindexof = index of de traz para frente
    // repleace = substitui a string
    // slice = pega partes da string
    // split = quebra a string
    // join = junta as posicoes do array em uma string
    // substring = age da mesma forma que o slice
    // toLowerCase = transforma as letras em caixa baixa
    // toUpperCase = letras em caixa alta
    
})();
