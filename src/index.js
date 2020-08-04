import Stats from 'stats.js';
import createScene from './create-scene';
import createRendererAndCamera from './create-renderer-and-camera';
import update from './update';
import Detector from './detector';

const isDev = process.env.NODE_ENV === 'development';

function main() {
  const { renderer, camera } = createRendererAndCamera();
  const scene = createScene();

  const stats = isDev ? new Stats() : null
  if (stats) document.body.appendChild(stats.dom);

  function render() {
    if (stats) stats.begin();
    renderer.render(scene, camera);
    update(scene);
    if (stats) stats.end();
  }

  function loop() {
    render();
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

if (Detector.webgl) {
  main();
} else {
  const warning = Detector.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}
