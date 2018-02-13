(function (win, doc) {
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

    var tipoTeste = true;

    //debugger;
    var $nivel1 = doc.querySelector('[data-js-id="nivel1"]');
    var $nivel2 = doc.querySelector('[data-js-id="nivel2"]');
    var $nivel3 = doc.querySelector('[data-js-id="nivel3"]');
    var $nivel4 = doc.querySelector('[data-js-id="nivel4"]');
    on($nivel1);
    on($nivel2);
    on($nivel3);
    on($nivel4);

    doc.querySelector('body').addEventListener(
        'click',
        () => console.log('*** body com False fica no fim. ****'),
        false
    )
    doc.querySelector('html').addEventListener(
        'click',
        () => console.log('*** html com True fica no começo. ****'),
        true
    )

    //funções
    function on(elemento) {
        elemento.addEventListener('click', logarDataJsId, tipoTeste );
    }
    function logarDataJsId(event) {
        event.preventDefault();
        console.log(this.getAttribute('data-js-id'));
    }

})(window, document);