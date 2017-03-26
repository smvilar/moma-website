import {
  Math,
} from 'three';

export const LIFESPAN = 6 * 1000;

const rotateInX = (obj) => {
  obj.scale.set(0.3, 0.3, 1);
  obj.position.z = 2;
  obj.rotation.x += 0.04;
};

const rotateInY = (obj) => {
  obj.scale.set(0.3, 0.3, 1);
  obj.position.z = 2;
  obj.rotation.y += 0.04;
};

const rotateInZ = (obj) => {
  obj.scale.set(0.5, 0.5, 1);
  obj.rotation.z += 0.04;
};

const zoomIn = (obj, f) => obj.scale.set(2 * f, 2 * f, 1);
const zoomInFrenzy = (obj, f) => zoomIn(obj, (f * 10) % 1);

const fullscreen = (obj) => {
  obj.position.z = -1;
  obj.scale.set(3, 3, 1);
};

const goingDown = (obj, f) => {
  obj.position.set(f > 0.5 ? 3 : -3, 2 - (5 * ((f % 0.5) * 2)), 0);
};

const goingUp = (obj, f) => {
  obj.position.set(f > 0.5 ? -3 : 3, -2 + (5 * ((f % 0.5) * 2)), 0);
};

const randomShit = (obj) => {
  obj.position.set(
    Math.randFloatSpread(5),
    Math.randFloatSpread(5),
    Math.randFloatSpread(5),
  );
};

const behaviors = [
  // rotateInX,
  // rotateInY,
  // rotateInZ,
  zoomIn,
  // zoomInFrenzy,
  fullscreen,
  goingDown,
  goingUp,
  randomShit,
];

function updateChildren(now) {
  return function updateChildrenInt(obj) {
    const f = (now - obj.timestamp) / LIFESPAN;

    if (obj.background) {
      fullscreen(obj, f);
    } else {
      behaviors[obj.id % behaviors.length](obj, f);
    }
  };
}

export default function update(scene) {
  scene.children.forEach(updateChildren(Date.now()));
}
