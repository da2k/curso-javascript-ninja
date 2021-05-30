(function (document, window){

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

//copy and paste event
let $name = document.querySelector('[data-js="name"]');
let $city = document.querySelector('[data-js="city"]');
let $color = document.querySelector('[data-js="color"]');


$name.addEventListener('copy', getAndTransformData, false);
$city.addEventListener('copy', getAndTransformData, false);
$color.addEventListener('copy', getAndTransformData, false);


function getAndTransformData(event){
  let copiedValue =  document.getSelection();
  console.log(copiedValue)
  event.clipboardData.setData('text/plain', copiedValue.toString().toUpperCase());
  event.preventDefault();
  changeBackgroundColorAndColor()

}


function changeBackgroundColorAndColor(){
 let $pasteInputs = document.querySelectorAll('.copy-paste input');
 console.log($pasteInputs)
 Array.prototype.forEach.call($pasteInputs, function(item){
  item.style.backgroundColor = '#BBFFFF';
  item.style.color = '#FF69B4';
  item.style.fontWeight = 'bold';
 })
}

//drag and drop eventos
let $square =  document.querySelector('[data-js="square"]');
let $circle =  document.querySelector('[data-js="circle"]');
let $rectangle = document.querySelector('[data-js="rectangle"]');
let $dropZones = document.querySelectorAll("#drop-area input");

console.log($dropZones)


// function on(element, event, callback){
//   element.addEventListener(event, callback,false);
// }

$square.addEventListener('dragstart', dragStarted, false);
$circle.addEventListener('dragstart', dragStarted, false);
$rectangle.addEventListener('dragstart', dragStarted, false);


function dragStarted(event){
  event.dataTransfer.setData('text/plain', this.id);
  this.value = "";

}

for(let dropZone of $dropZones ){
  dropZone.addEventListener('dragover', function(event){
    event.preventDefault();
  }, false);


  dropZone.addEventListener(
    "drop",
    function (event) {
      event.preventDefault();
      const droppedElementId = event.dataTransfer.getData("text/plain");
      dropZone.value = droppedElementId;
    },
    false
  );
}


//blur event
//validation email

let blurInput = document.querySelector('[data-js="email"]');
console.log(blurInput)
blurInput.addEventListener('blur', function(event){

  let regex = /[\w+]+@\w+\.\w+(.\w{2})?/g;
  // console.log('This value', this.value)
  let isEmailValid = (regex.test(this.value));
  console.log(isEmailValid)

  isEmailValid ? this.style.backgroundColor = '#BBFFFF': this.style.backgroundColor = "#FF7256";

})

})(document, window);

