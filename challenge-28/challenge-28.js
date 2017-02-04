( function( win, doc ){
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
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
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

  function init(){
    var $button = doc.querySelector('[data-js="consultar"]');
    var $cep = doc.querySelector('[data-js="cep"]');
    var $status = doc.querySelector('[data-js="status"]');
    var $logradouro = doc.querySelector('[data-js="logradouro"]');
    var $bairro = doc.querySelector('[data-js="bairro"]');
    var $estado = doc.querySelector('[data-js="estado"]');
    var $cidade = doc.querySelector('[data-js="cidade"]');
    var $cepConsultado = doc.querySelector('[data-js="cep_consultado"]');
    var ajax = new XMLHttpRequest();

    $button.addEventListener( 'click', handleConsultar, false );

    function handleConsultar( evt ){
      evt.preventDefault();
      consultarCEP();
    };

    function consultarCEP(){
      ajax.open( 'GET', 'https://viacep.com.br/ws/' + cepParaBuscar() + '/json/' );
      ajax.send();

      ajax.addEventListener( 'readystatechange', ajaxHandle, false);
    }

    function ajaxHandle(){
      if ( isRequestOK() ){
        setStatus('Endereço referente ao CEP '+ cepParaBuscar() +':');
        preencherDadosHTML();
      }else if ( isCEPInexistente() ){
        setStatus('Não encontramos o endereço para o CEP '+ cepParaBuscar() +'.');
      }
      else{
        setStatus('Buscando informações para o CEP '+ cepParaBuscar() +'...');
      }
    }

    function isRequestOK(){
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function isCEPInexistente(){
      return ajax.readyState === 4 && ajax.status === 0;
    }

    function preencherDadosHTML(){
      var data = JSON.parse( ajax.responseText );
      $logradouro.value = data.logradouro;
      $bairro.value = data.bairro;
      $estado.value = data.uf;
      $cidade.value = data.localidade;
      $cepConsultado.value = data.cep;
    }

    function setStatus(text){
      $status.replaceChild(doc.createTextNode( text ), $status.firstChild);
    }

    function cepParaBuscar(){
      return $cep.value.replace(/[^0-9]/g, '');
    }

  }

  init();

})(window, document);
