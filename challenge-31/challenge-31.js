/*
Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
coluna na tabela, com um botão de remover.

Ao clicar nesse botão, a linha da tabela deve ser removida.

Faça um pull request no seu repositório, na branch `challenge-31`, e cole
o link do pull request no `console.log` abaixo.

Faça um pull request, também com a branch `challenge-31`, mas no repositório
do curso, para colar o link do pull request do seu repo.
*/

function App(){

  const form = document.querySelector('#form');
  const table = document.querySelector('#table');
  let inputs = document.querySelectorAll('#form input');

  let inputsArr = Array.from(inputs);
  inputsArr.push('<button>Remover</button>');



function createTable() {
  const tr = document.createElement('tr');

  inputsArr.forEach((item, index) => {
    const td = document.createElement('td');
    table.appendChild(tr);
    tr.appendChild(td);
    if(index == 4) {
      td.innerHTML = item;
    } else {
      td.innerHTML = item.value;
    }

    item.value = '';
  })
}

function loadCompanyInfo(){
  const ajax = new XMLHttpRequest();
  ajax.open("GET", "company.json", true);
  ajax.send();

  ajax.onreadystatechange = function () {

    if(this.readyState == 4 && this.status == 200) {

      const res = JSON.parse(this.responseText);
      document.querySelector("#display").innerHTML = res.name + ' - ' + res.phone;
    }

  }
}
loadCompanyInfo();


form.addEventListener('submit', (e) => {
  e.preventDefault();

  createTable();
})
}

App();
