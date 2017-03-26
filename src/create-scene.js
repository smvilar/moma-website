import { Scene } from 'three';

import {
  createVideo,
  disposeVideo,
  createBackground,
} from './video-plane';

import { LIFESPAN } from './update';

const FREQUENCY = 2 * 1000;
const BACKGROUND_FREQUENCY = LIFESPAN;

export default function createScene() {
  const scene = new Scene();

  function addBackground() {
    createBackground().then((plane) => {
      plane.timestamp = Date.now();
      plane.background = true;

      scene.add(plane);

      setTimeout(() => {
        scene.remove(plane);
        disposeVideo(plane);
      }, LIFESPAN);
    });
  }

  addBackground();
  setInterval(addBackground, BACKGROUND_FREQUENCY);

  function addPlane() {
    createVideo().then((plane) => {
      plane.timestamp = Date.now();

      scene.add(plane);

      setTimeout(() => {
        scene.remove(plane);
        disposeVideo(plane);
      }, LIFESPAN);
    });
  }

  addPlane();
  setInterval(addPlane, FREQUENCY);

  return scene;
}
