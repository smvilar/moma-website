import range from 'lodash/range';
import sample from 'lodash/sample';
import {
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
} from 'three';

import loadVideoTexture from './load-video-texture';
import getRandomVideo from '../assets/videos';

function getRandomColor() {
  const chars = '6789ABCDEF';
  return `#${range(6).map(() => sample(chars)).join('')}`;
}

export default function createVideoPlane() {
  return loadVideoTexture(getRandomVideo()).then(map =>
    new Mesh(
      new PlaneGeometry(5, 5, 5),
      new MeshBasicMaterial({
        color: getRandomColor(),
        side: DoubleSide,
        map,
      }),
    ),
  );
}
