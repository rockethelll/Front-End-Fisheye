export default class PhotographerHeader {
  constructor(photographer) {
    this.photographer = photographer;
  }

  createPhotographerHeader() {
    const photographerNameOnContactForm = document.querySelector('.photograph-name');
    photographerNameOnContactForm.textContent = this.photographer.name;

    const photographerDescription = document.querySelector('.photograph-profile');

    const template = `
      <h1 aria-label="${this.photographer.name}">${this.photographer.name}</h1>
      <h2 aria-label="${this.photographer.city}, ${this.photographer.country}">${this.photographer.city}, ${this.photographer.country}</h2>
      <p aria-label="${this.photographer.tagline}">${this.photographer.tagline}</p>
      `
    photographerDescription.innerHTML = template;
    return template
  }
}