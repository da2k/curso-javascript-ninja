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

(function(win){
  
  'use strict';

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);

    this.on = function(evento, func) {
      this.element.forEach(function(element) {
        element.addEventListener(evento, func, false);
      })
    };

    this.off = function() {
      this.element.forEach(function(element) {
        element.removeEventListener(evento, func, false);
      })
    };

    this.get = function() {
      return this.element;
    };
  }

  var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            $status.get()[0].value = 'Carregando';
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
  }

  var $cep = new DOM('[data-js="cep"]');
  var $submit = new DOM('[data-js="submit"]');
  var $status = new DOM('[data-js="status"]');
  var $uf = new DOM('[data-js="uf"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $logradouro = new DOM('[data-js="logradouro"]');

  var request = new HttpClient();
  var url = "https://viacep.com.br/ws/[CEP]/json/";

  $submit.on('click', function() {
    if($cep.get()[0].value.length === 0) {
      $status.get()[0].value = 'Erro';
    } else {
      var cepFormatado = $cep.element[0].value.match(/\d/g).join('');
      if(cepFormatado.length === 8) {  
        request.get(url.replace('[CEP]', cepFormatado), function(response) {
          var data = JSON.parse(response);
          if(data.erro) {
            $status.get()[0].value = 'Erro';
          } else {
            $uf.get()[0].value = data.uf;
            $bairro.get()[0].value = data.bairro;
            $cidade.get()[0].value = data.localidade;
            $logradouro.get()[0].value = data.logradouro;
            $status.get()[0].value = 'Sucesso';
          }
        });
      } else {
        alert("Digite um CEP válido.");
      }
    }
  });

})();
