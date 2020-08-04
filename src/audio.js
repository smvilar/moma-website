const songs = [
  { url: 'Obvio.mp3', name: 'Obvio' },
  { url: 'Dystopictures.mp3', name: 'Dystopictures' },
  { url: 'Heart.mp3', name: 'Heart of Arrogance' },
  { url: 'Estas.mp3', name: 'Estás para Atrás' },
  { url: 'Hambre.mp3', name: 'Hambre' },
  { url: 'Break.mp3', name: 'Break Your Style' },
  { url: 'Unpleasant.mp3', name: 'Unpleasant Moment' },
  { url: 'It.mp3', name: 'It Has to Be Said' },
  { url: 'Ya.mp3', name: 'Ya Morí' },
];

export const songNames = songs.map(({ name }) => name);

export const songUrls = songs.map(({ url }) => `./${url}`);
