import {displayLightbox} from "./lightbox.js";
import {displayTotalLikes} from "./likes.js";

export const filterMenu = () => {
  const dropdownBtn = document.querySelector('.dropdown__btn');
  const dropdownContent = document.querySelector('.dropdown__content');
  const dropdownItems = document.querySelectorAll('.dropdown__content li button');

  dropdownBtn.addEventListener('click', () => {
    document.querySelector('.fa-chevron-up').classList.toggle('chevron-rotate');
    const isExpanded = dropdownBtn.getAttribute('aria-expanded') === 'true';

    dropdownBtn.setAttribute('aria-expanded', String(!isExpanded));
    dropdownContent.classList.toggle('display-list');
    dropdownContent.setAttribute('aria-hidden', String(isExpanded));
    dropdownItems.forEach(item => item.setAttribute('tabindex', isExpanded ? '-1' : '0'));
    dropdownContent.focus();
  });
};

export const displayMediaWithFilter = mediasTemplate => {
  const currentFilter = document.querySelector('#current_filter');
  const allFilters = Array.from(document.querySelectorAll('.dropdown__content li button'));

  let filterAlreadySelected = allFilters.find(filter => filter.textContent === currentFilter.textContent);
  filterAlreadySelected.style.display = 'none';

  // Add event listener on each filter button to sort medias
  allFilters.forEach(filter => {
    filter.addEventListener('click', () => {

      currentFilter.textContent = filter.textContent;
      if (filterAlreadySelected) filterAlreadySelected.style.display = 'block';
      filterAlreadySelected = filter;
      filterAlreadySelected.style.display = 'none';
      sortByFilter(filter.textContent);
    });
  });

  const sortByFilter = filterValue => {
    switch (filterValue) {
      case 'Titre':
        mediasTemplate.medias.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case 'Popularité':
        mediasTemplate.medias.sort((a, b) => b.likes - a.likes);
        break;

      case 'Date':
        mediasTemplate.medias.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }

    mediasTemplate.createPhotographerMedias();
    displayLightbox(mediasTemplate);
    displayTotalLikes();

    const mediaElements = document.querySelectorAll('.gallery-container');
    mediaElements.forEach((media, index) => {
      setTimeout(() => {
        media.classList.add('animeCard');
      }, 100 * index);
      media.classList.remove('animeCard');
    });
  };
}