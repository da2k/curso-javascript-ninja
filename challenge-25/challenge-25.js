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

    var $ball = doc.querySelector('[data-js="ball"]');
    var dragged;

    function on(event, callback) {
        doc.addEventListener(event, callback, false);
    }

    on('dragstart', function(event) {
        dragged = event.target;
        event.target.style.opacity = .5;
    }, false);

    on('dragend', function(event) {
        event.target.style.opacity = '';
    });

    on('dragover', function(event) {
        event.preventDefault();
    }, false);

    on('dragenter', function(event) {
        if (event.target.className === 'dropzone')
            event.target.style.background = 'purple';
    }, false);

    on('dragleave', function(event) {
        if (event.target.className === 'dropzone')
            event.target.style.background = '';
    }, false);

    on('drop', function(event) {
        event.preventDefault();
        if (event.target.className === 'dropzone') {
            event.target.style.background = '';
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    }, false);

    doc.addEventListener('click', function(event) {
        $ball.style.transform = 'translateY(' + (event.clientY + 25) + 'px)';
        $ball.style.transform += 'translateX(' + (event.clientX + 25) + 'px)';
    }, false);

})(Window, document);