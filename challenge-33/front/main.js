/*
Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
coluna na tabela, com um botão de remover.

Ao clicar nesse botão, a linha da tabela deve ser removida.

Faça um pull request no seu repositório, na branch `challenge-31`, e cole
o link do pull request no `console.log` abaixo.

Faça um pull request, também com a branch `challenge-31`, mas no repositório
do curso, para colar o link do pull request do seu repo.
*/


const form = document.querySelector('#form');
const table = document.querySelector('#table');


function createTable(arr) {

  arr.forEach((item) => {
    const tr = document.createElement('tr');
    const tdImage = document.createElement('td');
    const tdBrandModel = document.createElement('td');
    const tdYear = document.createElement('td');
    const tdColor = document.createElement('td');
    const tdPlate = document.createElement('td');
    const tdButton = document.createElement('td');

    table.appendChild(tr);
    tr.appendChild(tdImage);
    tr.appendChild(tdBrandModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdColor);
    tr.appendChild(tdPlate);
    tr.appendChild(tdButton);

    tdImage.innerHTML = item.image;
    tdBrandModel.innerHTML = item.brandModel;
    tdYear.innerHTML = item.year;
    tdColor.innerHTML = item.color;
    tdPlate.innerHTML = item.plate;
    tdPlate.setAttribute('data-js', 'plate');
    tdButton.innerHTML = '<button onclick="removeItem(this)">Remover</button>';

    item.value = '';
  })

}

function removeItem(e) {
  const plate = e.parentNode.parentNode.querySelector('[data-js="plate"]').innerHTML;

  const ajax = new XMLHttpRequest();
  ajax.open('DELETE', 'http://localhost:3000/car');
  ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  ajax.send(`plate=${plate}`);

  ajax.onreadystatechange = function () {

    if(this.readyState == 4){
      console.log('Deletado');
      console.log(ajax.responseText)
    }

  }
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

function getCars(){
  const ajax = new XMLHttpRequest();

    ajax.open('GET', 'http://localhost:3000/car');
    ajax.send();

    ajax.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        const res = JSON.parse(this.responseText);
        createTable(res);
      }
    }
}
getCars();

function postCar(){
    const ajax = new XMLHttpRequest();
    const image = document.querySelector('input[name=image]');
    const brandModel = document.querySelector('input[name=brandModel]');
    const year = document.querySelector('input[name=year]');
    const color = document.querySelector('input[name=color]');
    const plate = document.querySelector('input[name=plate]');

    ajax.open('POST', 'http://localhost:3000/car');
    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ajax.send(`image=${image.value}&brandModel=${brandModel.value}&year=${year.value}&color=${color.value}&plate=${plate.value}`);



    ajax.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        console.log('Carro cadastrado com sucesso', this.responseText);
        getCars();
      }
    }
}


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    postCar();
  })

