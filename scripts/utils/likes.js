import {getPhotographerAndMedias} from "../pages/photographer.js";

export const displayTotalLikes = async () => {
const { medias } = await getPhotographerAndMedias();
  const totalLikes = document.querySelector('.display-likes');
  totalLikes.innerText = medias
    .filter(media => media.likes)
    .reduce((acc, media) => acc + media.likes, 0)
}

export const toggleHeartIcon = () => {
  const heartsUnliked = document.querySelectorAll('.unliked');
  const heartsLiked = document.querySelectorAll('.liked');

  heartsUnliked.forEach(heartUnliked => {
    heartUnliked.addEventListener('click', () => {
      const heartLiked = heartUnliked.nextElementSibling;
      heartUnliked.classList.toggle('visible');
      heartLiked.classList.toggle('visible');
      heartLiked.classList.contains('visible');
      heartLiked.setAttribute('aria-hidden', 'false');
      heartUnliked.setAttribute('aria-hidden', 'true');
    })
  });

  heartsLiked.forEach(heartLiked => {
    heartLiked.addEventListener('click', () => {
      const heartUnliked = heartLiked.previousElementSibling;
      heartLiked.classList.toggle('visible');
      heartUnliked.classList.toggle('visible');
      heartUnliked.classList.contains('visible');
      heartLiked.setAttribute('aria-hidden', 'true');
      heartUnliked.setAttribute('aria-hidden', 'false');
    })
  });
}

// export const likeUnlikeMedia = () => {
//   toggleHeartIcon();
//
// }
