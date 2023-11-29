import Media from "./Media.js";

export default class MediaVideo extends Media {
  constructor(data) {
    super(data);
    this.video = data.video;
  }
}