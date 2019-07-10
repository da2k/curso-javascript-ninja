(function(){
    'use strict'

    /*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Em todos os exercícios desse desafio, nós vamos utilizar expressões
regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
variável chamada `text`:
"Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
*/

    var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.'

/*
Vamos começar com umas brincadeiras fáceis :D
Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
no console:
*/
    var nome = text.replace(/(Manuel Marques de Sousa)/g,'Pedro Henrique')

console.log( 'Adicionando seu nome no texto:' );

    console.log(nome)

/*
Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
console.
Ex: Se você for da São Paulo, substitua por "paulista".
*/
console.log( '\nTrocando naturalidade:' );

nome = nome.replace(/brasileiro/gi,'baiano')
console.log(nome)

/*
Substitua todos os números por um traço `-`. Cada caractere de número deve
ser um traço. Mostre o resultado no console:
*/
console.log( '\nTrocando números por -:' );

// nome = nome.replace(/(\d)/g,'-')
console.log(nome)

/*
Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
minúsculo por "0" (número zero). Mostre o resultado no console:
*/
console.log( '\nTrocando de "D" a "h" por "0":' );

// nome = nome.replace(/[D-h]/g, 0)

console.log(nome)

/*
Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
Mostre o resultado no console:
*/
console.log( '\nTrocando "A" e "a" por "4":' );

// nome = nome.replace(/A/gi,4)
console.log(nome)

/*
Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
o método `toUpperCase()`. Mostre o resultado no console:
*/
console.log( '\n"O Centauro de Luvas" em caixa alta:' );

nome = nome.replace(/O Centauro de luvas/gi, function(captura){
    return captura.toUpperCase()
})
console.log(nome)

/*
Agora iremos substituir as datas no formato "13 de junho de 1804" para
"13/06/1804". A primeira coisa a fazer é criar uma função chamada
`getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
retornar o número correspondente a esse mês.
Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
Números com menos de dois dígitos devem ter um zero na frente.
Crie então a função e mostre no console os retornos para os meses de março,
setembro e dezembro.
Use um console.log para cada mês, usando a frase:
"O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
*/
console.log( '\nMeses representados por números:' );

function getMonthNumber(nomeMes){
    let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    let numCorrespond = meses.indexOf(nomeMes)+1

    if(numCorrespond<10){
        return '0'+numCorrespond
    }else{
        return numCorrespond
    }
}

console.log('O mês de Março é representado pelo número '+getMonthNumber('março'))
console.log('O mês de Setembro é representado pelo número '+getMonthNumber('setembro'))
console.log('O mês de Dezembro é representado pelo número '+getMonthNumber('dezembro'))




/*
Agora, declare uma variável chamada `regexDate` que irá receber a expressão
regular que irá fazer o match com as datas. Crie grupos de captura para o
dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
meses que estão no texto, não precisa adicionar todos.
Com o que vimos até agora, você consegue fazer :D
Mostre a regex no console.
*/
console.log( '\nRegex que vai fazer o match com as datas do texto:' );

var regexDate = /(\d)(\d) (junho)(julho)(\d\d\d\d)/g

/*
Agora crie a função que irá fazer o replace dos dados. A função será chamada
de `replaceDate`. Ela deve retornar a data no formato:
"[DIA]/[MÊS]/[ANO]"
Após criar a função, faça o replace das datas no texto, mostrando no
console o resultado.
*/
console.log( '\nReplace de datas:' );

function replaceDate(texto){
    let novo = texto.replace(/(\d)(\d) (de) (junho|julho) (de) (\d\d\d\d)/g, function(capturaTotal, letra, letra2, letra3, letra4, letra5, letra6){


        // console.log('Captura Total: '+capturaTotal+' Letra: '+letra+' Letra2: '+letra2, 'Letra3: '+letra3, 'Letra4: '+letra4)
        console.log(letra+letra2+'/'+getMonthNumber(letra4)+'/'+letra6)
    })
}




replaceDate(text)

})()