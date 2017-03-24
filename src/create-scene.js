import { Scene } from 'three';
import createVideoPlane from './create-video-plane';
import { LIFESPAN } from './update';

const FREQUENCY = 2000;

export default function createScene() {
  const scene = new Scene();

  function addPlane() {
    createVideoPlane().then((plane) => {
      plane.timestamp = Date.now();

      scene.add(plane);
      console.debug(`Added plane with id: ${plane.id}, count: ${scene.children.length}`);

      setTimeout(() => {
        scene.remove(plane);
        console.debug(`Removed plane with id: ${plane.id}, count: ${scene.children.length}`);
      }, LIFESPAN);
    });
  }

  addPlane();
  setInterval(addPlane, FREQUENCY);

  return scene;
}
