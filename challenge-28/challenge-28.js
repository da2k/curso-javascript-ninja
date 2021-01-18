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
  https://apicep.com/api-de-consulta/, onde [CEP] será o CEP passado
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

(function(DOM){

  
function app () {
  
  const $formCep = new DOM('[data-js="form-cep"]');
  const $inputCep = new DOM('[data-js="input-cep"]');
  const $address = new DOM('[data-js="address"]');
  const $district = new DOM('[data-js="district"]');
  const $state = new DOM('[data-js="state"]');
  const $city = new DOM('[data-js="city"]');
  const $code = new DOM('[data-js="code"]');
  const $status = new DOM('[data-js="status"]');
  const ajax = new XMLHttpRequest();

  $formCep.on('submit', handleSubmitFormCep); 

  function handleSubmitFormCep(event) {
    event.preventDefault();
    
    let url = 'https://ws.apicep.com/cep/[cepCode].json'.replace('[cepCode]', $inputCep.getDomElements()[0].value)

    ajax.open('GET', url );
    ajax.send();
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  function handleReadyStateChange(){
    if(isRequestOk()) {
      fillCepFields();
      getMessage('ok');
    }
  
  }

  function isRequestOk(){
    return ajax.readyState === 4 && ajax.status === 200; 
  }

  function fillCepFields() {
    const data = JSON.parse(ajax.responseText);

    console.log(data);
    $address.getDomElements()[0].textContent = data.address;
    $district.getDomElements()[0].textContent = data.district;
    $state.getDomElements()[0].textContent = data.state;
    $city.getDomElements()[0].textContent = data.city;
    $code.getDomElements()[0].textContent = data.code;

  }

  function getMessage(type) {
    const messages =  {
      loading: 'Buscando informações para o CEP',
      ok: 'Requisição realizada com sucesso', 
      error: 'Não encontramos o endereço para o CEP.'
    };
    
    $status.getDomElements()[0].textContent = messages[type];
  }
}

app();


})(window.DOM);