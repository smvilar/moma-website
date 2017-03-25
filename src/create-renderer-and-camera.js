import {
  PerspectiveCamera,
  WebGLRenderer,
} from 'three';

export default function createRendererAndCamera() {
  // Create renderer and attach it to the DOM
  const renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  document.body.appendChild(renderer.domElement);

  // Create the main camera
  const camera = new PerspectiveCamera(
    75, 1.3, 0.1, 1000,
  );

  camera.position.set(0, 0, 5);

  function setSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);

    const aspect = width / height;
    camera.aspect = aspect;
  }

  window.addEventListener('resize', setSize);
  setSize();

  return { renderer, camera };
}
