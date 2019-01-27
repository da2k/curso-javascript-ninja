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

    var $inputName = doc.querySelector('[data-js="inputNome"]');
    var $inputEmail = doc.querySelector('[data-js="inputEmail"]');
    var $inputFone = doc.querySelector('[data-js="inputFone"]');
    var $inputAssunto = doc.querySelector('[data-js="select"]');
    var $buttonForm = doc.querySelector('[data-js="buttonForm"]');

    $buttonForm.addEventListener('click', submitForm, false);

    function submitForm(event) {
        event.preventDefault();
        validarInformacoes();
    }

    function validarInformacoes(){
        if (!$inputName.value) {
            return alert('Entre com os dados corretamente!');
            }
            if (!$inputFone.value) {
            return alert('Entre com os dados corretamente!');
            }
            if (!isvalidEmail($inputEmail.value)) {
            return alert('Entre com um e-mail válido!');
            }
            if (!confirm('Exibir dados?')) {
            return alert('Operação cancelada');
            }
            exibirDados();
    }

    function exibirDados (){
        alert ('Nome:' +$inputName.value
        +'\nE-mail: ' +$inputEmail.value
        +'\nTelefone: ' +$inputFone.value
        +'\nAssunto: ' +$inputAssunto.value
        );
    }

    function isvalidEmail(email) {
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email); //teste@teste.ts.ts
    }
   
})(window, document);
