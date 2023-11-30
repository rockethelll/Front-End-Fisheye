import {getPhotographerAndMedias} from "../pages/photographer.js";

export const displayTotalLikes = async () => {
  const {medias} = await getPhotographerAndMedias();
  const cardLikes = document.querySelectorAll('.card__likes-hearts');

  const updateTotalLikes = () => {
    const totalLikes = document.querySelector('.display-likes');
    totalLikes.innerText = medias
      .filter(media => media.likes)
      .reduce((acc, media) => acc + media.likes, 0)
  }
  updateTotalLikes();

  // Update the number of likes on the card
  cardLikes.forEach(cardLike => {
    cardLike.addEventListener('click', () => {
      const mediaId = medias.find(media => media.id === +cardLike.dataset.id);
      cardLike.classList.contains('isLiked') ? mediaId.likes++ : mediaId.likes--;

      const likeMedia = cardLike.previousElementSibling;
      likeMedia.innerText = mediaId.likes;

      updateTotalLikes();
    })
  });
}


export const toggleHeartIcon = () => {
  const heartsUnliked = document.querySelectorAll('.unliked');
  const heartsLiked = document.querySelectorAll('.liked');

  // Toggle heart icon when like-unlike a media
  heartsUnliked.forEach(heartUnliked => {
    heartUnliked.addEventListener('click', () => {
      const cardLikes = heartUnliked.parentElement;
      const heartLiked = heartUnliked.nextElementSibling;
      // Remove the class 'visible' to the heart unliked and add it to the heart liked
      heartUnliked.classList.toggle('visible');
      heartLiked.classList.toggle('visible');
      // Check if the heart liked has the class 'visible' and change the aria-hidden attribute
      heartLiked.classList.contains('visible');
      heartLiked.setAttribute('aria-hidden', 'false');
      heartUnliked.setAttribute('aria-hidden', 'true');
      cardLikes.classList.add('isLiked');
    })
  });

  // Toggle heart icon when like-unlike a media
  heartsLiked.forEach(heartLiked => {
    heartLiked.addEventListener('click', () => {
      const cardLikes = heartLiked.parentElement;
      const heartUnliked = heartLiked.previousElementSibling;
      // Remove the class 'visible' to the heart liked and add it to the heart unliked
      heartLiked.classList.toggle('visible');
      heartUnliked.classList.toggle('visible');
      // Check if the heart unliked has the class 'visible' and change the aria-hidden attribute
      heartUnliked.classList.contains('visible');
      heartLiked.setAttribute('aria-hidden', 'true');
      heartUnliked.setAttribute('aria-hidden', 'false');
      cardLikes.classList.remove('isLiked');
    })
  });
}

// export const likeUnlikeMedia = () => {
//   toggleHeartIcon();
//
// }
