const MAIN_ELEMENT = document.querySelector('main');
const API_URL = 'https://rickandmortyapi.com/api/character/';
const API_HEADER = {
    Accept: 'application/json',
    "Content-Type": 'application/json'
}

class Character {
    constructor(imageURL, name, type, status) {
        this.imageURL = imageURL;
        this.name = name;
        this.type = type;
        this.status = status;
    }
    generateHTML() {
        const containerCard = document.createElement('div');
        containerCard.classList.add('card')
        containerCard.classList.add('container')
        if (this.status === 'Alive') {
            containerCard.classList.add('alive')
        } else if (this.status === 'Dead') {
            containerCard.classList.add('dead')
        }
        const imageCard = document.createElement('img');
        imageCard.alt = this.name;
        imageCard.src = this.imageURL;
        imageCard.width = 300;
        imageCard.height = 300;
        containerCard.appendChild(imageCard);
        const titleCard = document.createElement('h2');
        titleCard.innerText = `Name: ${this.name}`;
        containerCard.appendChild(titleCard);
        const typeCard = document.createElement('p');
        typeCard.innerText = `Type: ${this.type}`;
        containerCard.appendChild(typeCard);
        const statusCard = document.createElement('p');
        statusCard.innerText = `Status: ${this.status}`;
        containerCard.appendChild(statusCard);
        return containerCard;
    }
}

const fetchCharacters = async () => {

    const charactersSection = document.createElement("section");
    charactersSection.classList.add('card-list')

    for (let c = 0; c < 5; c++) {
        let characterID = Math.floor(Math.random() * 671);
        const rickResponse = await fetch(API_URL + characterID, {headers: {API_HEADER}})
        let {image, name, type, status} = await rickResponse.json();
        if (type === '') type = 'not specified';
        const characterCard = new Character(image, name, type, status).generateHTML();
        charactersSection.appendChild(characterCard)
    }

    const hideLoading = async () => {
        const loading = document.querySelector('.loading');
        loading.remove();
    }

    await hideLoading();
    MAIN_ELEMENT.appendChild(charactersSection);
}
fetchCharacters()
