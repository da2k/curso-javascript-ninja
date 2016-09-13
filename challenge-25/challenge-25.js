(function(data, doc){
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
  // console.table(data);
  $input = doc.querySelector('[data-js="search"]');
  console.log($input);

  var $list = doc.querySelector('ul');

  $input.addEventListener('input', function() {
    // console.table(filterItems(data, $input.value));
    $list.innerHTML = '';
    renderItems( filterItems( data, $input.value ) );
  },false);

  function filterItems(arr, str) {
    return arr.filter(function(item){
      return item.name.toLowerCase().indexOf(str) !== -1;
    });
  }


  function renderItems(arr) {
    arr.forEach(function(item){
      var li = doc.createElement('li');
      li.innerHTML = item.id + ' ' + item.name;
      $list.appendChild(li);
    });
  }


}(dados, document));
