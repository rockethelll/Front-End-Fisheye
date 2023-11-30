export const displayLightbox = (medias) => {
  const lightbox = document.querySelector('.lightbox');
  const nextBtn = document.querySelector('.lightbox__next');
  const previousBtn = document.querySelector('.lightbox__previous');
  const closeBtn = document.querySelector('.lightbox__close');
  const lightboxMedia = document.querySelector('.lightbox__media');
  const lightboxTitle = document.querySelector('.lightbox__title');
  const mediaProvider = Array.from(document.querySelectorAll('.gallery__card a'));

  const photographer = medias.photographer;
  const mediasList = medias.medias;
  let currentIndex = 0;

  mediaProvider.forEach(media => {
    media.addEventListener('click', () => {
      const mediaId = media.dataset.media;
      currentIndex = mediasList.findIndex(media => media.id === +mediaId);

      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden', 'false')

      const main = document.querySelector('main');
      main.setAttribute('aria-hidden', 'true');

      closeBtn.focus();
      lightboxContent();
    })
  })

  const lightboxContent = () => {
    const currentMedia = mediasList[currentIndex];

    lightboxMedia.innerHTML = `
      ${currentMedia.image ? `
      <img src="./assets/images/${photographer.name}/${currentMedia.image}" alt="${currentMedia.title}">` 
      : 
      `<video controls aria-label="${currentMedia.title}"><source src="./assets/images/${photographer.name}/${currentMedia.video}" type="video/mp4"></video>`}
    `;
    lightboxTitle.innerHTML = currentMedia.title;
  }
}