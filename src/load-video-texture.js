import {
  ClampToEdgeWrapping,
  NearestFilter,
  RGBFormat,
  UnsignedByteType,
  UVMapping,
  VideoTexture,
} from 'three';

export default function load(src) {
  return new Promise((resolve) => {
    // Create video element
    const videoEl = document.createElement('video');
    videoEl.autoplay = true;
    videoEl.loop = true;
    videoEl.crossOrigin = '';
    videoEl.src = src;
    videoEl.load();
    videoEl.play();

    // Wait until load
    videoEl.addEventListener('canplay', () =>
      resolve(new VideoTexture(videoEl,
        UVMapping,
        ClampToEdgeWrapping,
        ClampToEdgeWrapping,
        NearestFilter,
        NearestFilter,
        RGBFormat,
        UnsignedByteType,
      )),
    );
  });
}
