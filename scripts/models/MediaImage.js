import Media from "./Media.js";

export default class MediaImage extends Media {
  constructor(data) {
    super(data);
    this.image = data.image;
  }
}