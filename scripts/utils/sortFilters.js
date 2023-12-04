import {displayLightbox} from "./lightbox.js";
import {displayTotalLikes} from "./likes.js";

export const filterMenu = () => {
  const dropdownBtn = document.querySelector('.drop-btn');
  const dropdownContent = document.querySelector('.dropdown_content');
  const dropdownItems = document.querySelectorAll('.dropdown_content li button');

  dropdownBtn.addEventListener('click', () => {
    const isExpanded = dropdownBtn.getAttribute('aria-expanded') === 'true';

    dropdownBtn.setAttribute('aria-expanded', String(!isExpanded));
    dropdownContent.style.display = isExpanded ? 'none' : 'flex';
    dropdownContent.setAttribute('aria-hidden', String(isExpanded));
    dropdownItems.forEach(item => item.setAttribute('tabindex', isExpanded ? '-1' : '0'));
  });
};

export const displayMediaWithFilter = mediasTemplate => {
  const currentFilter = document.querySelector('#current_filter');
  const allFilters = Array.from(document.querySelectorAll('.dropdown_content li button'));

  let filterAlreadySelected = allFilters.find(filter => filter.textContent === currentFilter.textContent);
  filterAlreadySelected.style.display = 'none';

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
  };
}