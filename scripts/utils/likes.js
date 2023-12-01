import {getPhotographerAndMedias} from "../pages/photographer.js";

// Display the total number of likes
export const displayTotalLikes = async () => {
  const { medias } = await getPhotographerAndMedias();
  const btnLikes = document.querySelectorAll('.card__likes');

  updateTotalLikes(medias);

  // Update the number of likes on the card
  btnLikes.forEach(btnLike => {
    btnLike.addEventListener('click', () => {
      handleLikesAndHearts(medias, btnLike);
    })
  })
};

// Update the total number of likes
export const updateTotalLikes = (medias) => {
  const totalLikes = document.querySelector('.display-likes');
  totalLikes.innerText = medias
    .filter(media => media.likes)
    .reduce((acc, media) => acc + media.likes, 0);
};

// Change heart icon when like-unlike a media
export const handleLikesAndHearts = (medias, btnLike) => {
  const mediaId = medias.find(media => media.id === +btnLike.dataset.id);
  !btnLike.classList.contains('isLiked') ? mediaId.likes++ : mediaId.likes--;

  btnLike.classList.toggle('isLiked');

  // Update the number of likes on the card
  const likeMedia = btnLike.querySelector('.card__likes-likes');
  likeMedia.innerText = mediaId.likes;

  const heartUnliked = btnLike.querySelector('.unliked');
  const heartLiked = btnLike.querySelector('.liked');

  // Change heart icon when like-unlike a media
  heartUnliked.classList.toggle('visible');
  heartLiked.classList.toggle('visible');

  // Change aria-hidden attribute when like-unlike a media
  heartLiked.setAttribute('aria-hidden', heartLiked.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
  heartUnliked.setAttribute('aria-hidden', heartUnliked.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');

  updateTotalLikes(medias);
};
