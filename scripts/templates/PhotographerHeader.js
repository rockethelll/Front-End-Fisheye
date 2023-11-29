export default class PhotographerHeader {
  constructor(photographer) {
    this.photographer = photographer;
  };

  createPhotographerHeader() {

    const photographerDescription = document.querySelector('.photograph-header');

    const template = `
      <div class="photograph-profile">
        <h1 aria-label="${this.photographer.name}">${this.photographer.name}</h1>
        <h2 aria-label="${this.photographer.city}, ${this.photographer.country}">${this.photographer.city}, ${this.photographer.country}</h2>
        <p aria-label="${this.photographer.tagline}">${this.photographer.tagline}</p>
      </div>
      <button class="contact_button open-modal" aria-label="Contact me">Contactez-moi</button>
      <div class="photograph-profile-photo">
        <img src="assets/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
      </div>
      `
    photographerDescription.innerHTML = template;
    return template
  }
}