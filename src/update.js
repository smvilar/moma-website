export const LIFESPAN = 6 * 1000;

// const debug = (obj, f) => console.debug(f);

const rotateInX = (obj) => {
  obj.scale.set(0.7, 0.7, 1);
  obj.position.z = 2;
  obj.rotation.x += 0.04;
};

const rotateInZ = (obj) => {
  obj.scale.set(0.7, 0.7, 1);
  obj.rotation.z += 0.04;
};

const zoomIn = (obj, f) => obj.scale.set(2 * f, 2 * f, 1);
const zoomInFrenzy = (obj, f) => zoomIn(obj, (f * 10) % 1);

const fullscreen = (obj) => {
  obj.position.z = -1;
  obj.scale.set(4, 4, 1);
};

const falling = (obj, f) => {
  obj.position.set(f > 0.5 ? 3 : -3, 2 - (5 * ((f % 0.5) * 2)), 0);
};

const behaviors = [
  rotateInX,
  rotateInZ,
  zoomIn,
  zoomInFrenzy,
  fullscreen,
  falling,
];

export default function update(scene) {
  const now = Date.now();

  scene.children.forEach((obj) => {
    const f = (now - obj.timestamp) / LIFESPAN;
    behaviors[obj.id % behaviors.length](obj, f);
  });
}
