(function( win, doc ) {
  "use strict";
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "http://cep.correiocontrol.com.br/[CEP].json", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */


function DOM( selector ) {
  this.element = document.querySelectorAll( selector );
}

DOM.prototype = {

  on: function( eventType, callback ) {
    Array.prototype.forEach.call( this.element, function( item, index ) {
      return item.addEventListener( eventType, callback, null );
    });
  },

  off: function( eventType ) {
    Array.prototype.forEach.call( this.element, function( item, index ) {
      return item.removeEventListener( eventType );
    });
  },

  forEach: function() {
    return Array.prototype.forEach.apply( this.element, argumets );
  },

  map: function() {
    return Array.prototype.map.apply( this.element, argumets );
  },

  filter: function() {
    return Array.prototype.filter.apply( this.element, argumets );
  },

  reduce: function() {
    return Array.prototype.reduce.apply( this.element, argumets );
  },

  reduceRight: function() {
    return Array.prototype.filterRight.apply( this.element, argumets );
  },

  every: function() {
    return Array.prototype.every.apply( this.element, argumets );
  },

  some: function() {
    return Array.prototype.some.apply( this.element, argumets );
  }
}

DOM.isArray = function( obj ) {
  return DOM.getType( obj ) === '[object Array]';
};

DOM.isObject = function( obj ) {
  return DOM.getType( obj ) === '[object Object]';
};

DOM.isFunction = function( obj ) {
  return DOM.getType( obj ) === '[object Function]';
};

DOM.isNumber = function( obj ) {
  return DOM.getType( obj ) === '[object Number]';
};

DOM.isString = function( obj ) {
  return DOM.getType( obj ) === '[object String]';
};

DOM.isBoolean = function( obj ) {
  return DOM.getType( obj ) === '[object Boolean]';
};

DOM.isNull = function( obj ) {
  return DOM.getType( obj ) === '[object Null]' || DOM.getType( obj ) === '[object Undefined]';
};

DOM.getType = function( obj ) {
  return Object.prototype.toString.call( obj );
};

  var $form = new DOM('[data-js="form"]');
  var $inputCep = doc.querySelector('[data-js="cep"]');
  var $containerStatus = doc.querySelector('[data-js="status-message"]');
  var $containerTbody = doc.querySelector('[data-js="tableBody"]');
  var $loadMessage = '<center>Carregando</center>';
  var $successMessage = '<center>Carregado com sucesso</center>';
  var $errorMessage = '<center>Não foi possivel carregar</center>';
  var cepValue = '';
  $form.on('submit', sendForm);

  function sendForm() {
    event.preventDefault();
    cepValue = clearCEP( $inputCep.value );
    $containerStatus.innerText = 'Buscando informações para o CEP ' + cepValue + '...';

    return loadData( cepValue );
  }

  function clearCEP( cep ) {
    return cep.replace(/[ \D]/g,'')
  }

  function loadData( cepValue ) {
    var ajax = new XMLHttpRequest();
    ajax.open('GET','http://apps.widenet.com.br/busca-cep/api/cep/' + cepValue + '.json');
    ajax.send(null);
    ajax.addEventListener('readystatechange', function() {
      if ( ajax.readyState === 4 && ajax.status === 200 ) {
        writeResponse( JSON.parse( ajax.responseText ) );
      }
    }, false)
  }

  function writeResponse( responseText ) {
    $containerStatus.innerText = 'Carregado com sucesso';
    var $lineTr = doc.createElement('tr');
    var $lineTd;
    var textNode;
    for ( var item in responseText ) {
      if ( item === 'status' )
        continue;
      textNode = doc.createTextNode( responseText[ item ] );
      $lineTd = doc.createElement('td');
      $lineTd.appendChild( textNode );
      $lineTr.appendChild( $lineTd );
    }

    $containerTbody.appendChild( $lineTr );
  }

}( window, document ));
