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

  const form = document.querySelector('#form');
  const input = document.querySelector('[data-js="input"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let cep = input.value.replace(/\D/g, '');

    const ajax = new XMLHttpRequest();
    ajax.open('GET', `https://ws.apicep.com/cep/${cep}.json`)
    ajax.send();

    document.querySelector('[data-js="status"]').innerHTML = 'Buscando informações para o CEP [CEP]...';

    ajax.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
    document.querySelector('[data-js="status"]').innerHTML = '';

        document.querySelector('[data-js="logradouro"]').innerHTML = res.address;
        document.querySelector('[data-js="bairro"]').innerHTML = res.district;
        document.querySelector('[data-js="estado"]').innerHTML = res.state;
        document.querySelector('[data-js="cidade"]').innerHTML = res.city;
        document.querySelector('[data-js="cep"]').innerHTML = res.code;

      } else if(this.status == 400){
        document.querySelector('[data-js="status"]').innerHTML = ' Não encontramos o endereço para o CEP [CEP].';

      }
    };


  })
