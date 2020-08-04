import range from 'lodash/range';
import sample from 'lodash/sample';
import {
  Mesh,
  MeshBasicMaterial,
  BoxBufferGeometry,
} from 'three';

import { load, unload } from './video';
import getRandomVideo, { getMomaVideo } from '../assets/videos';

function getRandomColor() {
  const chars = '0123456789ABCDEF';
  return `#${range(6).map(() => sample(chars)).join('')}`;
}

const geometry = new BoxBufferGeometry(5, 5, 0.05);

export function createVideo() {
  return load(getRandomVideo()).then((map) => new Mesh(
    geometry,
    new MeshBasicMaterial({
      color: getRandomColor(),
      map,
    }),
  ));
}

export function disposeVideo(plane) {
  plane.material.dispose();
  plane.material.map.dispose();

  unload(plane.material.map.image);
}

const backgroundMesh = new Mesh(geometry);

export function createBackground() {
  return load(getMomaVideo()).then((map) => {
    backgroundMesh.material = new MeshBasicMaterial({ map });
    return backgroundMesh;
  });
}
