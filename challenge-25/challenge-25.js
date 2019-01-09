(function(win, doc) {
  'use strict';
  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */

  var $inputName = doc.querySelector('[data-js="inputName"]');
  var $inputEmail = doc.querySelector('[data-js="inputEmail"]');
  var $inputFone = doc.querySelector('[data-js="inputFone"]');
  var $buttonForm = doc.querySelector('[data-js="buttonForm"]');
  var name = prompt('Digite o seu nome');
  var email = prompt('Digite o seu email');
  var fone = prompt('Digite o seu telefone');

  $inputName.value = name;
  $inputFone.value = fone;
  $inputEmail.value = email;

  $buttonForm.addEventListener('click', submitForm, false);

  function submitForm(event) {
    event.preventDefault();
    if (!$inputName.value) {
      return alert('Entre com os dados corretamente!');
    }

    if (!$inputFone.value) {
      return alert('Entre com os dados corretamente!');
    }

    if (!isvalidEmail($inputEmail.value)) {
      return alert('Entre com um e-mail válido!');
    }

    if (!confirm('Tem certeza que deseja enviar o formulário?')) {
      return alert('Formulário não inviado');
    }

    return alert('Enviado com sucesso!');
  }
  function isvalidEmail(email) {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
  }
})(window, document);
