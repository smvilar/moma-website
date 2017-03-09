import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

const width = window.innerWidth;
const height = window.innerHeight;

const scene = new Scene();
const camera = new PerspectiveCamera(
  75, width, height, 0.1, 1000,
);
const renderer = new WebGLRenderer();
renderer.setSize(width, height);

const cube = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshBasicMaterial({ color: 0x00ff00 }),
);
scene.add(cube);

camera.position.z = 5;

document.body.appendChild(renderer.domElement);
