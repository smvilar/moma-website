import {
  ClampToEdgeWrapping,
  NearestFilter,
  UVMapping,
  VideoTexture,
} from 'three';

export function load(src) {
  return new Promise((resolve) => {
    const videoEl = document.createElement('video');
    videoEl.autoplay = true;
    videoEl.loop = true;
    videoEl.crossOrigin = '';
    videoEl.src = src;

    function onCanPlay() {
      videoEl.removeEventListener('canplay', onCanPlay);

      resolve(new VideoTexture(videoEl,
        UVMapping,
        ClampToEdgeWrapping,
        ClampToEdgeWrapping,
        NearestFilter,
        NearestFilter));
    }

    videoEl.addEventListener('canplay', onCanPlay);
  });
}

export function unload(videoEl) {
  videoEl.remove();
}
