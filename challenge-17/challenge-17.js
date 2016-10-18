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
  var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';

  /*
  Vamos começar com umas brincadeiras fáceis :D
  Troque o nome "Manuel Marques de Souza" pelo seu nome, e mostre o resultado
  no console:
  */
  console.log( 'Adicionando seu nome no texto:' );
  console.log( text.replace(/(Manuel Marques de Sousa)/g, 'Marcus Vinicius') );

  /*
  Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
  console.
  Ex: Se você for da São Paulo, substitua por "paulista".
  */
  console.log( '\nTrocando naturalidade:' );
  console.log( text.replace(/brasileiro/g, 'paulista') );

  /*
  Substitua todos os números por um traço `-`. Cada caractere de número deve
  ser um traço. Mostre o resultado no console:
  */
  console.log( '\nTrocando números por -:' );
  // Opção 1
  // console.log( text.replace(/[0-9]/g, '-') );
  // Opção 2
  console.log( text.replace(/\d/g, '-') );

  /*
  Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
  minúsculo por "0" (número zero). Mostre o resultado no console:
  */
  console.log( '\nTrocando de "D" a "h" por "0":' );
  console.log( text.replace(/[A-Za-h]/g, '0') );

  /*
  Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
  Mostre o resultado no console:
  */
  console.log( '\nTrocando "A" e "a" por "4":' );
  // Opção1
  // console.log( text.replace(/A|a/g, '4') );
  // Opção2
  // console.log( text.replace(/[Aa]/g, '4') );
  // Opção3
  console.log( text.replace(/[a]/gi, '4') );

  /*
  Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
  o método `toUpperCase()`. Mostre o resultado no console:
  */
  console.log( '\n"O Centauro de Luvas" em caixa alta:' );
  console.log( text.replace(/O Centauro de Luvas/g, function( regex ) {
    return regex.toUpperCase();
  }) );

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
  // Opção1
  // var numberMonth;
  // function getMonthNumber( nameMonth ) {
  //   switch ( nameMonth ) {
  //     case 'janeiro':
  //       numberMonth = '01';
  //       break;
  //     case 'fevereiro':
  //       numberMonth = '02';
  //       break;
  //     case 'março':
  //       numberMonth = '03';
  //       break;
  //     case 'abril':
  //       numberMonth = '04';
  //       break;
  //     case 'maio':
  //       numberMonth = '05';
  //       break;
  //     case 'junho':
  //       numberMonth = '06;'
  //       break;
  //     case 'julho':
  //       numberMonth = '07;'
  //       break;
  //     case 'agosto':
  //       numberMonth = '08';
  //       break;
  //     case 'setembro':
  //       numberMonth = '09';
  //       break;
  //     case 'outubro':
  //       numberMonth = '10';
  //       break;
  //     case 'novembro':
  //       numberMonth = '11';
  //       break;
  //     case 'dezembro':
  //       numberMonth = '12';
  //       break;
  //   }
  //   console.log( 'O mês de ' + nameMonth + ' é representado pelo número ' + numberMonth + '.' );
  // }

  // Opção2
  // function getMonthNumber( nameMonth ) {
  //   var months = {
  //     janeiro: '01',
  //     fevereiro: '02',
  //     'março': '03',
  //     abril: '04',
  //     maio: '05',
  //     junho: '06',
  //     julho: '07',
  //     agosto: '08',
  //     setembro: '09',
  //     outubro: '10',
  //     novembro: '11',
  //     dezembro: '12'
  //   };
  //   return console.log( 'O mês de ' + nameMonth + ' é representado pelo número ' + months[ nameMonth ] + '.' );
  // }
  // console.log( getMonthNumber( 'março' ) );
  // console.log( getMonthNumber( 'setembro' ) );
  // console.log( getMonthNumber( 'dezembro' ) );

  //Opção3
  function getMonthNumber( nameMonth ) {
    var months = {
      janeiro: '01',
      fevereiro: '02',
      'março': '03',
      abril: '04',
      maio: '05',
      junho: '06',
      julho: '07',
      agosto: '08',
      setembro: '09',
      outubro: '10',
      novembro: '11',
      dezembro: '12'
    };
    return months[ nameMonth ];
  }
  console.log( 'O mês de março é representado pelo número ' + getMonthNumber( 'março' ) + '.' );
  console.log( 'O mês de setembro é representado pelo número ' + getMonthNumber( 'setembro' ) + '.' );
  console.log( 'O mês de dezembro é representado pelo número ' + getMonthNumber( 'dezembro' ) + '.' );

  /*
  Agora, declare uma variável chamada `regexDate` que irá receber a expressão
  regular que irá fazer o match com as datas. Crie grupos de captura para o
  dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
  meses que estão no texto, não precisa adicionar todos.
  Com o que vimos até agora, você consegue fazer :D
  Mostre a regex no console.
  */
  console.log( '\nRegex que vai fazer o match com as datas do texto:' );
  var regexDate = /(\d{2}) de (ju[nl]ho) de (\d{4})/g;
  console.log( regexDate );

  /*
  Agora crie a função que irá fazer o replace dos dados. A função será chamada
  de `replaceDate`. Ela deve retornar a data no formato:
  "[DIA]/[MÊS]/[ANO]"
  Após criar a função, faça o replace das datas no texto, mostrando no
  console o resultado.
  */
  console.log( '\nReplace de datas:' );
  // Passando todos os parâmetros
  // function replaceDate() {
  //   text.replace( /(\d{2}) de (ju[nl]ho) de (\d{4})/g, function( match, firstGroup, secondGroup) {
  //     getMonthNumber( secondGroup );
  //   });
  // }
  // replaceDate();

  // Salvando a função em uma variável
  // var a = function () {
  //   getMonthNumber( arguments[2] );
  // }
  // function replaceDate() {
  //   text.replace( /(\d{2}) de (ju[nl]ho) de (\d{4})/g, a );
  // }
  // replaceDate();

  // Separando a função e passando para o replace
  // function a() {
  //   return getMonthNumber( arguments[2] );
  // }
  // function replaceDate() {
  //   text.replace( /(\d{2}) de (ju[nl]ho) de (\d{4})/g, a );
  // }
  // replaceDate();

  //Usando o arguments, não passa nenhum parâmetro para a função e chama no arguments
  // Option1
  // function replaceDate() {
  //   text.replace( /(\d{2}) de (ju[nl]ho) de (\d{4})/g, function() {
  //     getMonthNumber( arguments[2] );
  //   });
  // }
  // replaceDate();
  // Opção2
  function replaceDate(regex, day, month, year) {
    return day + '/' + getMonthNumber( month ) + '/' + year;
  }
  console.log( text.replace( regexDate, replaceDate ) );

})();