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

      setTimeout(() => {
        scene.remove(plane);
        plane.geometry.dispose();
        plane.material.map.dispose();
        plane.material.dispose();
      }, LIFESPAN);
    });
  }

  addPlane();
  setInterval(addPlane, FREQUENCY);

  return scene;
}
