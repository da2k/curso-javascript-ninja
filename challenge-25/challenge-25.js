  (function (window, document) {

    'use strict'
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

  var whiteRabbit = document.getElementById("rabbit");

  var rabbitDownKeyframes = new KeyframeEffect(
      whiteRabbit,
      [
        { transform: 'translateY(0%)' },
        { transform: 'translateY(100%)' }
      ],
      { duration: 3000, fill: 'forwards' }
    );

  var rabbitDownAnimation = new Animation(rabbitDownKeyframes, document.timeline);

  // On tap or click,
  whiteRabbit.addEventListener("mousedown", downHeGoes, false);
  whiteRabbit.addEventListener("touchstart", downHeGoes, false);

  // Trigger a single-fire animation
  function downHeGoes(event) {

    // Remove those event listeners
    whiteRabbit.removeEventListener("mousedown", downHeGoes, false);
    whiteRabbit.removeEventListener("touchstart", downHeGoes, false);

    // Play rabbit animation
    rabbitDownAnimation.play();

  }

  (function() {
    var mousePos;
    var rato = document.getElementById('rato')

    document.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 100); // setInterval repeats every X ms

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
    }


    function getMousePosition() {

        var pos = mousePos;
        if (!pos) {
            // We haven't seen any movement yet
        }
        else {
            console.log(pos)
            rato.style.left = pos.x + 10 + 'px'
            rato.style.top =  pos.y + 10 + 'px'

        }

    }
})();
// test git push

})(window, document)
