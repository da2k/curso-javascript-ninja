(function() {

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
    var textMyName = text.replace(/Manuel Marques de Sousa/i, 'Leonardo Melo')
    console.log( 'Adicionando seu nome no texto:', textMyName );
    
    /*
    Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
    console.
    Ex: Se você for da São Paulo, substitua por "paulista".
    */
    var bornCity = text.replace(/brasileiro/, 'paraibano')
    console.log( '\nTrocando naturalidade:', bornCity  );
    
    /*
    Substitua todos os números por um traço `-`. Cada caractere de número deve
    ser um traço. Mostre o resultado no console:
    */
    var hiphen = text.replace(/\d/g, '-')
    console.log( '\nTrocando números por -:', hiphen );
    
    /*
    Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
    minúsculo por "0" (número zero). Mostre o resultado no console:
    */
    var lettersDh = text.replace(/[D-Za-h]/g, '0')
    console.log( '\nTrocando de "D" a "h" por "0":', lettersDh );
    
    /*
    Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
    Mostre o resultado no console:
    */
    var letterA = text.replace(/a/gi, '4')
    console.log( '\nTrocando "A" e "a" por "4":', letterA );
    
    /*
    Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
    o método `toUpperCase()`. Mostre o resultado no console:
    */
    var phrase = text.replace(/O Centauro de Luvas/gi, function(c){
        return c.toUpperCase()
    })
    console.log( '\n"O Centauro de Luvas" em caixa alta:', phrase );
    
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
    function getMonthNumber(month) {
    
        var monthNumber = ''

        switch(month) {
            case ('janeiro') :
                monthNumber =  '01'
                break
            case ('fevereiro') :
                monthNumber = '02'
                break
            case ('março') :
                monthNumber =  '03'
                break
            case ('abril') :
                monthNumber =  '04'
                break
            case ('maio') :
                monthNumber =  '05'
                break
            case ('junho') :
                monthNumber =  '06'
                break
            case ('julho') :
                monthNumber =  '07'
                break
            case ('agosto') :
                monthNumber =  '08'
                break
            case ('setembro') :
                monthNumber =  '09'
                break
            case ('outubro') :
                monthNumber =  '10'
                break
            case ('novembro') :
                monthNumber =  '11'
                break
            case ('dezembro') :
                monthNumber =  '12'
                break
        }

        return monthNumber
    }
    console.log( '\nMeses representados por números:', getMonthNumber('março'), getMonthNumber('setembro'), getMonthNumber('dezembro') );
    console.log( 'O mês de março é representado pelo número ' + getMonthNumber('março'))
    console.log( 'O mês de setembro é representado pelo número ' + getMonthNumber('setembro'))
    console.log( 'O mês de dezembro é representado pelo número ' + getMonthNumber('dezembro'))
    
    /*
    Agora, declare uma variável chamada `regexDate` que irá receber a expressão
    regular que irá fazer o match com as datas. Crie grupos de captura para o
    dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
    meses que estão no texto, não precisa adicionar todos.
    Com o que vimos até agora, você consegue fazer :D
    Mostre a regex no console.
    */
    var regexDate = /(\d\d)([\w\s]*)(\d\d\d\d)/g
    console.log( '\nRegex que vai fazer o match com as datas do texto:', regexDate );
    // ?
    
    /*
    Agora crie a função que irá fazer o replace dos dados. A função será chamada
    de `replaceDate`. Ela deve retornar a data no formato:
    "[DIA]/[MÊS]/[ANO]"
    Após criar a função, faça o replace das datas no texto, mostrando no
    console o resultado.
    */
    function replaceDate(data) {
        var dataArray = data.split(' ')
        return dataArray[0] + '/' + getMonthNumber(dataArray[2]) + '/' + dataArray[4] 
    }
    var datesText = text.match(regexDate)
    for (var data of datesText) {

        console.log( '\nReplace de datas:', replaceDate(data) );
    }
    // ?
}())
