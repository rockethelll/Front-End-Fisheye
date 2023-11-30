export const displayTotalLikes = (photographerMedias) => {
  const totalLikes = document.querySelector('.display-likes');
  totalLikes.innerText = photographerMedias.medias
    .filter(media => media.likes)
    .reduce((acc, media) => acc + media.likes, 0)
}
