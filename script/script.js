const fetchCharacters = async (qnt= 5) => {

    const charactersSection = document.createElement("section");
    charactersSection.classList.add('card-list')

    for (let c = 0; c < qnt; c++) {
        let characterID = Math.floor(Math.random() * 671);
        const rickResponse = await fetch(API_URL + characterID, {headers: {API_HEADER}})
        let {image, name, type, status} = await rickResponse.json();
        if (type === '') type = 'not specified';
        const characterCard = new Character(image, name, type, status).generateHTML();
        charactersSection.appendChild(characterCard)
    }
    await hideLoading();
    MAIN_ELEMENT.appendChild(charactersSection);
}
fetchCharacters(10)
