export default class PhotographerCard {
    constructor(photographer){
        this.photographer = photographer;
    }

    createPhotographerCard() {
        const article = document.createElement( 'article' );
        article.innerHTML = `
            <a href="photographer.html?id=${this.photographer.id}" aria-label="Voir le profil de ${this.photographer.name}">
                <img src="./assets/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
                <h2 >${this.photographer.name}</h2>
            </a>
            <h3>${this.photographer.city}, ${this.photographer.country}</h3>
            <p class="tagline">${this.photographer.tagline}</p>
            <p class="price">${this.photographer.price}€/jour</p>
        `;
        return article;
    }
}