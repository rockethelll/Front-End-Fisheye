import Api from "../api/Api.js";
import Photographer from "../../models/Photographer.js";
import PhotographerCard from "../templates/PhotographerCard.js";

const photographersApi = new Api("./data/photographers.json");

async function displayPhotographersHomePage() {
  const photographersSection = document.querySelector(".photographer_section");

  const photographersFetch = await photographersApi.get();
  const photographers = photographersFetch.photographers;

  photographers
    .map(photographer => new Photographer(photographer))
    .forEach(photographer => {
      const initCard = new PhotographerCard(photographer);
      const photographerCard = initCard.createPhotographerCard();

      photographersSection.appendChild(photographerCard);
    });
}

displayPhotographersHomePage();