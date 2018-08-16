/*
anotacoes:
DOM- Document Objet Model
A API do DOM tranforma cada elemento do HTML em um NODE (nó)
Para percorrer:
.parentNode - Seleciona o pai do NODE que estamos tratando
.childNodes - Seleciona os NODES que são filhos do NODE que estamso tratando
  (tomar cuidado quando for usar o childNodes para contar os filho de um elemento, porquê
  também são considerados filhos, todas as quebras de linhas)
.firstChild - Seleciona o primeiro filho
.lastChild - Seleciona o ultimo filho
.nextSibling - Seleciona o irmão
.previusSibling - Seleciona o irmão anterior

Propriedades dos elementos:
.nodeType - Exibe o tipo de NODE
    (Estes retornos são números, e cada um representa um NodeType
    1 - Element
    3 - Text
    8 - Comments
    9 - Document
    22 - documentFragment)

.nodeValue - Retorna o valor do nó
.nodeName - Retorna o nome do nó (tag)
.children - Retorna uma lista de HTML, como o childNodes, porém sem as quebras de linhas, textos e comentários.

Propriedades que só retornam elementos:
(não retornam, quebras de linhas, textos nem comentários)
.firstElementChild - Retorna o primeiro elemento filho
.lastElementChild - Retorna o ultimo elemento filho
.nextElementSibling - Retorna o próximo elemento irmão
.PreviusElementSibling - Retorna o elemento irmão anterior
.childElementCount - Retorna a quantidade de elementos filhos

Métodos para manipulação do DOM:
.hasAtribute(name) - Verifica se o elemento tem um atributo específico e retorna true/false (passar parametor em formato de 'string')
.hasAtributes(name) - Verifica se o elemento tem algum atributo e retorna true/false
.appendChild(elem) - adciona um filho á algum elemento
.insertBefore(node, beforWho) - insere um elemento antes de um elemento especificado
.cloneNode(boolean ) - clona um node existente, o parâmetro é ora dizer se o node clnado vem ou não com todos os elementos originais
.hasChildNodes() - retorna se um elemento tem algum flho, retorno boolean
.removeChild() - passa por parametro o elemento a ser removido de um node
.replaceChild(new, old) - troca um elemento por outro, recebido por parametros

document.creatTextNode('text') - Cria um node de text (salvar em uma variavel, poim é um atributo de document, assim podemos utilizalo  )
document.createElement('tagName') - Cria um elemento, e também salvar em uma variável, fomato de string

Attibutos do DOM -
Atributos padões do html, podem ser acessados através de um ponto, exemplo:
element.id -
element.value -
element.className -
E podemos manipulalos desta forma, atribuindo novos valores, pois são getters e setters, exemplo:
element.id = 'top'
element.getAttribute('attr') - Usado para pegar atributos não padrões do HTML (data-js, por exemplo), retorna strings
element.setAttribute('attr', 'value')





O desafio dessa semana é criar uma mini library (biblioteca) para
reutilizarmos nossos códigos quando fizermos manipulação de DOM!

Requisitos:
- O nome da lib deve ser "DOM".
- Ela deve ser uma função construtora, que receberá uma string por parâmetro.
Essa string será o nó do DOM a ser selecionado;
- No construtor, você deve atribuir à `this.element` todos os elementos
do DOM selecionados;
- Extenda a lib para ter os métodos `on`, `off` e `get`.
- O método `on` irá adicionar um listener de evento a todos os elementos
selecionados.
- O método `off` irá remover o listener de evento de todos os elementos
selecionados.
- O método `get` deve retornar os elementos.
- O código abaixo deve funcionar corretamente após a lib criada.

Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
Só passe para o próximo problema quando tiver resolvido o anterior :)
*/
// ?

(function (doc, win) {
  'use strict';

  //Construtor, recebe um parâmetro, e seleciona todos os elementos do parametro, retorando em forma de array-like
  function DOM(element) {
    this.element = doc.querySelectorAll(element);
  }

  //Função que pertence à elemntos criados apartir do DOM criado a cima, testa função recebe-se dois parâmetros,
  //onde o primeiro é o evento ('click', etc), e uma função de callback, que ocorre logo apartir do evento
  //Criando um protótipo de Array, para que possa usar os métodos de Arrays, neste forEach, que ocorre para
  //cada elemento deste array, usando o método call(), quecebe dois paraâmetros, o primeiro é o this. a ser usado,
  //neste caso, o próprio this.element, segundo parâmetro, uma função de callback, que ocorre para cada elemento do array
  //nesta função está sendo passado como parâmetro, um elemento a ser adcionado um event listener
  DOM.prototype.on = function (event, callback){
    Array.prototype.forEach.call(this.element, function (element){
      element.addEventListener(event, callback, false)
    })
  };

  DOM.prototype.off = function (event, callback){
    Array.prototype.forEach.call(this.element, function (element){
      element.removeEventListener(event, callback, false)
    })
  };

  //Retorna o Array clicado
  DOM.prototype.get = function (){
    return this.element;
  };

  //Criando uma vaiável $a, que receberá todo o retorno de new DOM('[...]'), como existe mais de um elemento com
  //a tag '[data-js="link"]', a$ agora será um Array-like, com este retorno.
  //agora $a tem todos os métodos atribuidos ao DOM, neste exemplo, usa-se o .on, passando como primeiro parâmetro
  //um evento de 'click', segundo parâmetro, a função a ser executada.
  //na linha 125, usa-se o método .off, para desativar o evento do botão clicado.
  var $a = new DOM('[data-js="link"]');
  $a.on('click', function hancldeClick(e) {
    e.preventDefault();
    console.log('clicou');
    $a.off('click', hancldeClick)
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

})(document, window)
