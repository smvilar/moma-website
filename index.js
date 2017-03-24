import createScene from './src/create-scene';
import createRendererAndCamera from './src/create-renderer-and-camera';
import update from './src/update';

const { renderer, camera } = createRendererAndCamera();
const scene = createScene();

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  update(scene);
}

render();
