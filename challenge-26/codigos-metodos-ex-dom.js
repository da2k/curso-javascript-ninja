(function (win, doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  var $mainContent = doc.querySelector('.main-content');
  var $mainHeader = doc.querySelector('.main-header');
  var $mainFooter = doc.querySelector('.main-footer');
  var $firstText = $mainContent.firstChild;

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
  console.log('hasAttribute(id)', $main.hasAttribute('id'))
  console.log('hasAttributes()', $mainContent.firstElementChild.firstElementChild.hasAttributes())

  // console.log('appendChild()', $mainContent.appendChild($mainHeader)); //Coloca o header dentro do $mainContent como último no
  console.log('insertBefore()', $mainContent.insertBefore($mainHeader, $firstText));
  // Clonando elemento
  var $cloneMainHeader = $mainHeader.cloneNode(true); // true é para pegar todo conteúdo
  console.log('cloneNode()', $mainContent.appendChild($cloneMainHeader));

  console.log('hasChildNodes - se tem algum nó dentro do elemento', $main.hasChildNodes());

  var $lastChildMainHeader = $mainContent.lastElementChild;
  console.log('removeChild', $mainContent.removeChild($lastChildMainHeader));

  var newTextNode = doc.createTextNode('Opa isso foi criado no JS!');

  var $newP = doc.createElement('p');
  $newP.appendChild(newTextNode);
  $main.appendChild($newP);

  console.log('set className', $main.className = 'arroz')
  console.log('get id', $main.id)
  console.log('getAttribute', $main.getAttribute('data-js'))
  console.log('setAttribute', $main.setAttribute('data-js', 'main-data-js'))





})(window, document);
