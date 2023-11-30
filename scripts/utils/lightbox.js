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

  mediaProvider.forEach(item => {
    item.addEventListener('click', () => {
      const mediaId = item.dataset.media;
      console.log(mediaId)
    })
  })
}