/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/
(function(){
    'use strict'
    /*
    Em todos os exercícios desse desafio, nós vamos utilizar expressões
    regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
    variável chamada `text`:
    "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
    */
    let text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';

    /*
    Vamos começar com umas brincadeiras fáceis :D
    Troque o nome "Manuel Marques de Souza" pelo seu nome, e mostre o resultado
    no console:
    */
    console.log( 'Adicionando seu nome no texto:' );
    let nomeTexto = text.replace(/Manuel Marques de Sousa/g,'Deni Dias da Silva Junior');
    console.log(nomeTexto);

    /*
    Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
    console.
    Ex: Se você for da São Paulo, substitua por "paulista".
    */
    console.log( '\nTrocando naturalidade:' );
    let naturalidadeTexto = text.replace(/brasileiro/g,'santista');
    console.log(naturalidadeTexto);

    /*
    Substitua todos os números por um traço `-`. Cada caractere de número deve
    ser um traço. Mostre o resultado no console:
    */
    console.log( '\nTrocando números por -:' );
    let tracoTexto = text.replace(/\d/g,'-');
    console.log(tracoTexto);

    /*
    Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
    minúsculo por "0" (número zero). Mostre o resultado no console:
    */
    console.log( '\nTrocando de "D" a "h" por "0":' );
    let trocaLetrasTexto = text.replace(/[(D-Hd-h)]/g,'0');
    console.log(trocaLetrasTexto);

    /*
    Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
    Mostre o resultado no console:
    */
    console.log( '\nTrocando "A" e "a" por "4":' );
    let trocaATexto = text.replace(/a/gi,'4');
    console.log(trocaATexto);

    /*
    Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
    o método `toUpperCase()`. Mostre o resultado no console:
    */
    console.log( '\n"O Centauro de Luvas" em caixa alta:' );
    let centauroTexto = text.replace(/O Centauro de Luvas/g,function(textoCapturado){
        return textoCapturado.toUpperCase();
    });
    console.log(centauroTexto);

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

    function getMonthNumber(month){
        
        month = month.toUpperCase();

        let months = {
            'JANEIRO': '01',
            'FEVEREIRO': '02',
            'MARÇO': '03',
            'ABRIL': '04',
            'MAIO': '05',
            'JUNHO': '06',
            'JULHO': '07',
            'AGOSTO': '08',
            'SETEMBRO': '09',
            'OUTUBRO': '10',
            'NOVEMBRO': '11',
            'DEZEMBRO': '12'
        };

        return months[month];
    }

    console.log('O mês de Março é representado pelo número '+getMonthNumber('março')+'.');
    console.log('O mês de Setembro é representado pelo número '+getMonthNumber('Setembro')+'.');
    console.log('O mês de Outubro é representado pelo número '+getMonthNumber('outubro')+'.');

    /*
    Agora, declare uma variável chamada `regexDate` que irá receber a expressão
    regular que irá fazer o match com as datas. Crie grupos de captura para o
    dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
    meses que estão no texto, não precisa adicionar todos.
    Com o que vimos até agora, você consegue fazer :D
    Mostre a regex no console.
    */
    console.log( '\nRegex que vai fazer o match com as datas do texto:' );
    let regexDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/g;
    console.log(regexDate);

    /*
    Agora crie a função que irá fazer o replace dos dados. A função será chamada
    de `replaceDate`. Ela deve retornar a data no formato:
    "[DIA]/[MÊS]/[ANO]"
    Após criar a função, faça o replace das datas no texto, mostrando no
    console o resultado.
    */
    console.log( '\nReplace de datas:' );
    
    function replaceDate(dia,mes,ano){
        return dia+'/'+getMonthNumber(mes)+'/'+ano;
    }
    let replaceDateText = text.replace(regexDate, function(textoCapturado, dia, mes, ano){
        return replaceDate(dia, mes, ano);
    });
    console.log(replaceDateText);
})();