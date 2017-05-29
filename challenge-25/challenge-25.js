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
    
    // form
    var $form = doc.querySelector('[data-js="form-teste"]');
    var $inputNome = doc.querySelector('[data-js="campo-nome"]');
    
    //click
    var $showCat = doc.querySelector('[data-js="show-cat"]');
    var $cat = doc.querySelector('[data-js="cat"]');
    
    $form.addEventListener('submit', function(event){
        event.preventDefault();
        alert('Tentou enviar Form.');
    }, false);

    $inputNome.addEventListener('focus', function() {
        this.classList.add('increase');
    }, false);

    $inputNome.addEventListener('blur', function() {
        this.classList.remove('increase');
    }, false);

    $showCat.addEventListener('click', function(){
        $cat.classList.toggle('hidden');
    }, false);
    
})(window, document);
