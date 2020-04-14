( function() {

    'use strict';

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
    var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';

    /*
    Vamos começar com umas brincadeiras fáceis :D
    Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
    no console:
    */
    console.log( 'Adicionando seu nome no texto:' );
    
    var mudancaNome = text.replace( /Manuel Marques de Sousa/g, 'André Rodrigues' );
    console.log( mudancaNome );

    /*
    Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
    console.
    Ex: Se você for da São Paulo, substitua por "paulista".
    */
    console.log( '\nTrocando naturalidade:' );
    
    var mudancaCidade = text.replace( /brasileiro/g, 'varzeagrandense' );
    console.log( mudancaCidade );

    /*
    Substitua todos os números por um traço `-`. Cada caractere de número deve
    ser um traço. Mostre o resultado no console:
    */
    console.log( '\nTrocando números por -:' );
    
    var mudancaNumeros = text.replace( /\d/g, '-' );
    console.log( mudancaNumeros );

    /*
    Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
    minúsculo por "0" (número zero). Mostre o resultado no console:
    */
    console.log( '\nTrocando de "D" a "h" por "0":' );
    
    var mudancaLetras = text.replace( /[D-Hd-h]/g, '0' );
    console.log( mudancaLetras );

    /*
    Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
    Mostre o resultado no console:
    */
    console.log( '\nTrocando "A" e "a" por "4":' );
    
    var mudancaA = text.replace( /[Aa]/g, '4' );
    console.log( mudancaA );

    /*
    Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
    o método `toUpperCase()`. Mostre o resultado no console:
    */
    console.log( '\n"O Centauro de Luvas" em caixa alta:' );
    
    var mudancaFrase = text.replace( /O Centauro de Luvas/, function( frase ) {
        return frase.toUpperCase();
    } );
    console.log( mudancaFrase );

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
    
    var meses = [ 'março', 'setembro', 'dezembro' ];
    function getMonthNumber( qualMes ) {

        var mesesNumero = {
            'janeiro': '01',
            'fevereiro':' 02',
            'março': '03',
            'abril': '04',
            'maio': '05',
            'junho': '06',
            'julho': '07',
            'agosto': '08',
            'setembro': '09',
            'outubro': '10',
            'novembro': '11',
            'dezembro': '12'
        };

        return mesesNumero[qualMes];
    }
    console.log( 'O mês de ' + meses[0] + ' é representado pelo número ' + getMonthNumber( meses[0] ) + '.' );
    console.log( 'O mês de ' + meses[1] + ' é representado pelo número ' + getMonthNumber( meses[1] ) + '.' );
    console.log( 'O mês de ' + meses[2] + ' é representado pelo número ' + getMonthNumber( meses[2] ) + '.' );

    /*
    Agora, declare uma variável chamada `regexDate` que irá receber a expressão
    regular que irá fazer o match com as datas. Crie grupos de captura para o
    dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
    meses que estão no texto, não precisa adicionar todos.
    Com o que vimos até agora, você consegue fazer :D
    Mostre a regex no console.
    */
    console.log( '\nRegex que vai fazer o match com as datas do texto:' );
    
    var regexDateA = /(13) de (junho) de (1804)/g;
    var regexDateB = /(18) de (julho) de (1875)/g;
    console.log( regexDateA );
    console.log( regexDateB );
    
    var regexDateC = /(\d\d) de (junho|julho) de (\d\d\d\d)/g;
    console.log( regexDateC );

    /*
    Agora crie a função que irá fazer o replace dos dados. A função será chamada
    de `replaceDate`. Ela deve retornar a data no formato:
    "[DIA]/[MÊS]/[ANO]"
    Após criar a função, faça o replace das datas no texto, mostrando no
    console o resultado.
    */
    console.log( '\nReplace de datas:' );
    
    // MINHAS SOLUÇÕES 
    function replaceDate( date ) {
        return date.replace( regexDateA, function( regex, dia, mes, ano ) {
            return( dia + '/' + getMonthNumber( mes ) + '/' + ano );
        } ).replace( regexDateB, function( date, group1, group2, group3 ) {
            return( dia + '/' + getMonthNumber( mes ) + '/' + ano );
        } );
    }
    console.log( replaceDate( text ) );
    
    function replaceDate( date ) {
        return date.replace( regexDateC, function( regex, dia, mes, ano ) {
            return( dia + '/' + getMonthNumber( mes ) + '/' + ano );
        } );
    }
    console.log( replaceDate( text ) );
    
    // SOLUÇÃO DO PROFESSOR
    function replaceDateProf( regex, day, mouth, year ) {
        return day + '/' + getMonthNumber( mouth ) + '/' + year;
    }
    console.log( text.replace( regexDateC, replaceDateProf ) );
    
} ) ();