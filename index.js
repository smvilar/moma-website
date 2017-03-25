import Stats from 'stats.js';
import createScene from './src/create-scene';
import createRendererAndCamera from './src/create-renderer-and-camera';
import update from './src/update';

const { renderer, camera } = createRendererAndCamera();
const scene = createScene();

const stats = new Stats();
document.body.appendChild(stats.dom);

function render() {
  stats.begin();
  renderer.render(scene, camera);
  update(scene);
  stats.end();

  requestAnimationFrame(render);
}

render();
