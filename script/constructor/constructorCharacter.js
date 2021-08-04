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