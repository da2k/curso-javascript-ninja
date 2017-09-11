(function (win, doc) {
  'use strict';

  var $main = doc.querySelector('.main');

  // Lembrar que espacamento de texto conta como item dom.
  // No firstChild ele está pegando o header por n ter diferença de espaço entre a tag main e ele.

  // essas propriedades trazem também os nós de texto e comentário do elemento DOM
  console.log('pega o pai', $main.parentNode)
  console.log('pega todos os filhos',$main.childNodes)
  console.log('primeiro filho',$main.firstChild)
  console.log('ultimo filho',$main.lastChild)
  console.log('irmao',$main.nextSibling)
  console.log('irmao',$main.previousSibling)

  console.log('nodeName', $main.nodeName)
  console.log('nodeValue', $main.nodeValue)
  console.log('nodeType', $main.nodeType)
  console.log('nodeName', $main.firstChild.nextSibling.nodeName)
  console.log('nodeValue', $main.firstChild.nextSibling.nodeValue)
  console.log('nodeType', $main.firstChild.nextSibling.nodeType)

  // As propriedades abaixo não trazem os nós de texto e nem de comentário dos elementos DOM

  console.log('childNodes', $main.childNodes)
  console.log('firstElementChild', $main.firstElementChild)
  console.log('nextElementSibling', $main.firstElementChild.nextElementSibling)
  console.log('previousElementSibling - mesmo com espaco no html consiguimos selecionar o elemento', $main.previousElementSibling)

  //Metodos dom
  console.log('hasAttribute(class)', $main.hasAttribute('class'))







})(window, document);
