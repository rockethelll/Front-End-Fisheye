import Api from "../api/Api.js";
import Photographer from "../models/Photographer.js";
import MediasFactory from "../factories/MediasFactory.js";
import PhotographerHeader from "../templates/PhotographerHeader.js";
import {ContactForm} from "../utils/contactForm.js";
import PhotographerMedias from "../templates/PhotographerMedias.js";
import {displayTotalLikes, toggleHeartIcon} from "../utils/likes.js";

const photographersApi = new Api("./data/photographers.json");
const params = new URL(document.location).searchParams;
let photographerId = parseInt(params.get("id"));

export const getPhotographerAndMedias = async () => {
  const { photographers, media } = await photographersApi.get();

  const photographer = photographers
    .map(photographer => new Photographer(photographer))
    .find(photographer => photographer.id === photographerId);

  const medias = media
    .map(media => new MediasFactory(media))
    .filter(media => media.photographerId === photographerId);

  return { photographer, medias };
};

const init = async () => {
  const {photographer, medias} = await getPhotographerAndMedias();

  const photographerHeader = new PhotographerHeader(photographer);
  photographerHeader.createPhotographerHeader();

  const photographerMedias = new PhotographerMedias(photographer, medias);
  photographerMedias.createPhotographerMedias();

  ContactForm(photographer);
  displayTotalLikes();
  toggleHeartIcon();
}

init();