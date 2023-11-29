import MediaImage from "../models/MediaImage.js";
import MediaVideo from "../models/MediaVideo.js";

export default class MediasFactory {
  constructor(data) {
    if (data.image) {
      return new MediaImage();
    } else if (data.video) {
      return new MediaVideo();
    } else {
      throw 'Unknown media type'
    }
  }
}