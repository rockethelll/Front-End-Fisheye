export default class PhotographerMedias {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
    }

    createPhotographerMedias() {
        const gallery = document.querySelector('.gallery-container');
        const content = `
            ${this.medias.map(media => {
                const mediaContent = media.image ? 
                    `<img src="./assets/images/${this.photographer.name}/${media.image}" alt="${media.title}">`
                    :
                    `<video aria-label="${media.title}">
                        <source src="./assets/images/${this.photographer.name}/${media.video}" type="video/mp4">
                    </video>`;
            return `
                    <article class="gallery__card">                           
                        <a href="#" data-media=${media.id} aria-label="View media">
                            ${mediaContent}
                        </a>
                        <div class="card__infos">
                            <h2 class="card__title" aria-label="${media.title}">${media.title}</h2>
                                <button class="card__likes" role="button" aria-label="Like button and number of likes" data-id="${media.id}">
                                    <span class="card__likes-likes" aria-label="Number of likes">${media.likes}</span> 
                                    <span class="card__likes-hearts">
                                        <i class='far fa-heart unliked visible' aria-label='Like the picture' aria-hidden='false'></i>
                                        <i class='fas fa-heart liked' aria-label='Unlike the picture' aria-hidden='true'></i>
                                    </span> 
                                </button>
                        </div>
                    </article>
                `;
        }).join("")}
            <aside class="photographer-likes-price">
                <div class="total-likes"><span class="display-likes"></span><em class="fas fa-heart"></em></div>
                <div class="daily-price"><span class="display-price">${this.photographer.price}</span>€ / jour</div>
            </aside>
        `;

        gallery.innerHTML = content;
        return content;
    }
}