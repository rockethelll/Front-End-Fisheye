export const displayLightbox = (medias) => {
  const lightbox = document.querySelector('.lightbox');
  const nextBtn = document.querySelector('.lightbox__next');
  const previousBtn = document.querySelector('.lightbox__prev');
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

  // Display the current media in the lightbox
  const lightboxContent = () => {
    const currentMedia = mediasList[currentIndex];

    lightboxMedia.innerHTML = `
      ${currentMedia.image ? `
      <img src="./assets/images/${photographer.name}/${currentMedia.image}" alt="${currentMedia.title}">`
      :
      `<video controls loop muted aria-label="${currentMedia.title}"><source src="./assets/images/${photographer.name}/${currentMedia.video}" type="video/mp4"></video>`}
      <figcaption class="lightbox__title">${currentMedia.title}</figcaption>
    `;
    // lightboxTitle.innerText = currentMedia.title;
    // lightboxTitle.setAttribute('aria-label', `${currentMedia.title}`);
  }

  const closeLightbox = () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true')

    const main = document.querySelector('main');
    main.setAttribute('aria-hidden', 'false');
    lightboxMedia.innerHTML = '';
  }

  const nextMedia = () => {
    currentIndex++;
    if (currentIndex > mediasList.length - 1) {
      currentIndex = 0;
    }
    lightboxContent();
  }

  const previousMedia = () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = mediasList.length - 1;
    }
    lightboxContent();
  }

  // Close the lightbox with the escape key and navigate with the arrow keys
  const handleKeydown = e => {
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowRight':
        nextMedia();
        break;
      case 'ArrowLeft':
        previousMedia();
        break;
    }
  }

  document.addEventListener('keydown', handleKeydown);

  closeBtn.addEventListener('click', () => closeLightbox());
  nextBtn.addEventListener('click', () => nextMedia());
  previousBtn.addEventListener('click', () => previousMedia());
}