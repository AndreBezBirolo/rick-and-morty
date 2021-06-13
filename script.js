document.addEventListener('DOMContentLoaded', function () {
  const MAIN_ELEMENT = document.querySelector('main');
  const API_URL = 'https://rickandmortyapi.com/api/character/';
  const API_HEADER = {
    Accept: 'application/json',
    "Content-Type": 'application/json'
  }
  // Sem HTML
  // for (let c = 0; c < 4; c++) {
  //   let characterID = Math.floor(Math.random() * 671);
  //   fetch(API_URL + characterID, { headers: { API_HEADER } })
  //     .then((res) => res.json())
  //     .then(({ image, name }) => {

  //       let containerCardElement = document.createElement('section');
  //       containerCardElement.classList.add('container');

  //       let imageElement = document.createElement('img');
  //       imageElement.width = 300;
  //       imageElement.height = 300;
  //       imageElement.src = image;
  //       imageElement.alt = `Personagem: ${name}`

  //       let nameElement = document.createElement('p');
  //       nameElement.classList.add('nomeDoPersonagem');
  //       nameElement.innerText = name;

  //       containerCardElement.appendChild(imageElement);
  //       containerCardElement.appendChild(nameElement);

  //       MAIN_ELEMENT.appendChild(containerCardElement);
  //     })
  // }


  // Com HTML
  let containers = document.querySelectorAll('.container');
  containers.forEach(function (container) {
    let characterID = Math.floor(Math.random() * 671);
    fetch(API_URL + characterID, { headers: { API_HEADER } })
      .then((res) => res.json())
      .then(({ image, name }) => {

        let imageElement = container.querySelector('img');
        imageElement.src = image;
        imageElement.alt = `Personagem: ${name}`

        let nameElement = container.querySelector('p');
        nameElement.innerText = name;

      })
  })

});