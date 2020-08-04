import Stats from 'stats.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import createScene from './create-scene';
import createRendererAndCamera from './create-renderer-and-camera';
import update from './update';
import Detector from './detector';
import { songNames, songUrls } from './audio';

const isDev = process.env.NODE_ENV === 'development';

let songIndex = 0;

function main() {
  setupSongList();
  setupAudioPlayer();

  const { renderer, camera } = createRendererAndCamera();
  const scene = createScene();

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new GlitchPass());

  const stats = isDev ? new Stats() : null;
  if (stats) document.body.appendChild(stats.dom);

  function render() {
    if (stats) stats.begin();
    composer.render();
    update(scene);
    if (stats) stats.end();
  }

  function loop() {
    render();
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

if (Detector.webgl) {
  main();
} else {
  const warning = Detector.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}

function appendElement(element, container) {
  return container.appendChild(document.createElement(element));
}

function setupSongList() {
  const ol = document.querySelector('ol');
  songNames.forEach((name, index) => {
    const li = appendElement('li', ol);
    const button = appendElement('button', li);
    button.textContent = name;
    button.onclick = () => { playSong(index); }
  });
}

function setupAudioPlayer() {
  const audio = document.querySelector('audio');
  audio.onended = nextSong;
  playSong(songIndex);
}

function nextSong() {
  playSong((songIndex + 1) % songUrls.length);
}

function playSong(index) {
  songIndex = index;
  const audio = document.querySelector('audio');
  audio.src = songUrls[songIndex];
  audio.play();

  const buttons = document.querySelectorAll('ol button');
  buttons.forEach((button, index) => {
    if (songIndex === index) {
      button.classList.add('playing');
    } else {
      button.classList.remove('playing');
    }
  })
}
