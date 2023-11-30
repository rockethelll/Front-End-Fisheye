import MediaImage from "../models/MediaImage.js";
import MediaVideo from "../models/MediaVideo.js";

export default class MediasFactory {
  constructor(data) {
    if (data.image) {
      return new MediaImage(data);
    } else if (data.video) {
      return new MediaVideo(data);
    } else {
      throw 'Unknown media type'
    }
  }
}