import sample from 'lodash/sample';

const moma = [
  '26gR1MmYcPooH67Re',
  'l4FGAmYy959zfsb9S',
  '3oKIPyK3dZpNQxqcOQ',
  'xUPGcJnhtuBbbhzFza',
];

const ids = [
  'pDZlSIvudnln2',
  'lifYEhPB0YiNq',
  'Ne7gJSVnZi1GM',
  'Gg0fDH1OG2M4U',
  'l41lQWuejXDu0hoUo',
  'UNi614YmNwJck',
  'JhomXSCTOU4wM',
  '9KdKyDRZKqqTm',
  '3o7rc7K7YH2F7af3a0',
  'pXL2aFpeBGVcQ',
  'SX0fkEgJhziP6',
  'TA6GBiH0rMqru',
  '4xvKR1cG0il44',
  'LDPNmA3OYelbO',
  'b671YB9Rlcnra',
  '13XtNGv2tiECha',
  'w2oEYAluIwZs4',
  'sX5znMg9K8Qjm',
  '11A5DmeAHYqgG4',
  'LcoFaijjpLCc8',
  'EuRSVPYP4J5sI',
  '89nmoA8X2jEWI',
  'L6jEztrbftwHK',
  'Yl1G1y9dKPIPe',
  'xTiN0lDklGx3PZIPVm',
  'oXvmEWKGeerbW',
  'JaeBUv3xaCBMY',
  '9iVs4oaLnr1YY',
  '10DnwPMOWFxn7G',
  '3oriO3TIAR3cnAOcTK',
  'l2QZZmVDeUjGOEIow',
  'HUk2pvTayfIaY',
  'oZDd8XHJeHive',
  'eTdN7L04C6puE',
  'l2R04LDwcpF3c7yr6',
  '1204d0DWdhsuVG',
  '3oGRFjm63p2QC1x8eQ',
  'xTiQyHfdsc3lc6dHS8',
  '3o72F7IUfTzQvdC0Eg',
  '3oEdv3ytBMjY5nG77O',
  '3NH3HPsR7JED6',
  'zhmIHStBa2ezu',
  'xTiTnAWsCOrpoyyat2',
  'PQC1RSdnhpjJC',
  'TNqMlgTuv5jJ6',
  'Hyr4pmiUpF1G8',
  '13Zl6d2sklzexi',
  'QgoN2gR9R0A00',
  'HRzsAaLPbloxW',
  'frqcN3tjkusAE',
  '8c6Sjbblrt4qY',
  'l0Exl8EkUTTQq5kuQ',
  'xUA7aKSrQev4ZMVZNm',
  'xUPGckk36p1cneEnGU',
  '26FmQ7lwxD9MMkq64',
  'xUA7aM6lhWfMsWBedG',
  'xUPGcxkltip545hjMc',
  'l3q2vzB9tkNWjkWqY',
  '26gs9BV87ZmxS3Np6',
  'l0MYG26wwRyNUIBH2',
  'RL0oAtRlEOiru',
  'C800u2ezOtP3y',
  'wmDYwr6nhp6TK',
  'xThuWcaa4U4XZQDgvm',
  'l2JhHKpKbwQELFOmY',
  'ofIm107o4QEBa',
  'xThuWlT47FLpqr1giY',
  'oVWJaca8a3IpW',
  'mWhL2eUwoqo80',
  'Ml0wiAt61BFgk',
  'kDbXxYqPk0ud2',
  'fUBbxS4oLW0IU',
  '3Gr4RNSrU2GlO',
  '8yjKObKqaN44w',
  'a1Lwp44yqYEww',
  'IE7Ns4pLnig24',
  '3osxYcz4vYKgdYYLJu',
  '2fhuW3O3VKPD2',
  'mXJyswM8jD9AI',
  '98rDBgZedHM9q',
  'c2PRgxvQhTcA0',
  'tyGAt0slV2RlS',
  'GnYrwdHetc6go',
  'Zr6kuPzyH4wwM',
  'qvgl0bNUpUU6s',
  'Bpqp2E59wkaOY',
  'fR8nxVF7s17q',
  'EqNcHDks2OxJ6',
  'PqwR550Ey8UEg',
  'jCjV4dw3OGtUc',
  'l0Ex3nsZNprnA9E08',
  'mbT855WSPZvNu',
  'kYIPjYGroCOQM',
  'iN1aMj0XwhsNq',
  'ZKVmU2SDSZa7e',
  'r6KmXTYIy6KOY',
  '26xBB05cZbU9sbrfG',
  'l3q2saSgiw6yvzfnq',
  'AB734caB4jx84',
  '8QJdAFruPfmTu',
  'Px7cRZAHwaSKQ',
  'Jh7lMycppqMeY',
  'mhpkHTAWU9w08',
  '3o7TKOBkgIvaOS44gg',
  '26BoDVtDxdj6s99g4',
  '3o7WTFmAMnKd7DyrQY',
  '6yGfWQbhIEpz2',
  'mbT855WSPZvNu',
  '13pOqXA5tOTlvy',
  'QfkiIrOjVbGPC',
  'EFScg7xfdM7zW',
  'g1ki47MSEyZIQ',
  'ZYl9Uy2XrupMs',
  'QA4mrlPI3CeBi',
  'bPwO5WZ7BiAlW',
  'pq9kJwQddbprW',
  'qp3Wcu6H7RYxG',
  'XwUxOopo6z3e8',
  '13jR29016aYFBC',
  'feRp3mRqvcjSg',
  'Cg4m26nfALUqI',
  'DmsBGyhQmXNcc',
  'MLyjG3QUSZrDG',
  'CLmO7yQq4bpgk',
  'KXtzVDu8KuBag',
  'xeWdP7bK90xTq',
  'eAPI6FATrhsw8',
  'VmQ9XbpvRKAUw',
  'PNXjB3EzWTZoQ',
  '10uAGXXeHYokkU',
  'BdQ2u72aOxtE4',
  '14kcgdgETgFXKo',
  'B9oLx7wSVPrZm',
  'qAMZ7FJ3z7f1K',
  '1ZSOGJrHuNJNS',
  'LllA2dKt1qZuE',
  '3o6ZtmVjg80pISGgsE',
  'Elt9TxTgq0awU',
  '13TxkWCJHuGjdu',
  '10HV1bBJtfl7TG',
  'S7t4NSnWPub8A',
  '3KGi3DIdwHvgs',
  'l46CzM8uGiGUnLVHW',
  'l41lNkAFGs7jyWzYY',
  '7i4RN6x7ay9Ne',
  'GMYKvEVMWU6jK',
  'xUySTO9XH3qGpjV1de',
  'mFc7LDvpuhwkM',
  'PIWj98iEgY9tS',
  '6qG4WO0ezvjSE',
  'ylbiP6uiqKnde',
  'x1wa4Mk5ZRRHW',
  'yFIhlx6Soz19C',
  'ZvZL2oseXXQcM',
  'xT1XGJcLE74znjTaqQ',
  '6kuvQEi4mlKve',
  'KgQ0DpLYCuVVu',
  'MHCrhypzynUAw',
  'KBaeQ8W9SYEiA',
  'k1UwbeSv0QdAk',
  'dIebwFJw4luG4',
  'asDRqNnYYMyD6',
  '1RVzgPjlHAkuY',
  'pR29bVXPYIM00',
  '26tnb1h5qY1MWcNQA',
  'J9SNrn8Lyi9Mc',
  'fyuiIJmFJVwn6',
  'PIMF8zCLnoobC',
  'uQMrWHjL7L7Dq',
  'Jyt4wzLPCOVCU',
  '8K1cxNhuCK5RC',
  '8t46FPVGtq5CU',
  'WZovbIwXvUiVq',
  'DDstHj62HqDUQ',
  'IBXWAGm3Wj3IA',
  'BrgudzI7FbIHe',
  'bw1suU6iKK9xK',
  '8Wvu1Qa4AvXZ6',
  'sarOnsCRq6je0',
  'AJMapaJnmsvni',
  'w8eLxqbin9ita',
  'eV3QBO099UeNW',
  'ZsMs7MQMcFukU',
  '7JQdS1UM3QJpK',
  'GTTCvwd6tZEJi',
  'elqDrEejKWU80',
  'iSrNVM1qYakWQ',
  '49PYOXml2Kzqo',
  '3o7ZeM11x4DWYPGptS',
  '4oyWGXk0cAdfa',
  'SNBfm9OlpOO7C',
  'N9F7nHT3ZmCL6',
  'TqndrEoIufnIk',
  'JnhmsqeorL2Cc',
  '9Razlh0bCR7W0',
];

const hambre = [
  'JnhmsqeorL2Cc',
  'JFsrCaLd2WFc4',
  'JnhmsqeorL2Cc',
  'Hy0nFK7gNrAis',
  'rCDGSUTdMtN4c',
  '9Vv7vQCdDQtk4',
  '6CctSluR2HIli',
  'l4KhXrybcQDTUIeQM',
  'l46Cs3yBQVSQAwlZC',
  'Lj6fSQzEnVd1C',
  'ep5cdEuyKgKI0',
  'nnigKIEIzIj5K',
  'x3oIqP3ds8ONW',
  'i57xVyYyF507C',
  '6pxUQ3P9e6vE4',
  'vQYiNTNjf9EOY',
  '13pOqXA5tOTlvy',
  'OYEfjNwhNHIGc',
  'rlxvBFLZda9vW',
  'QyCnoD6yVoBoc',
  '5kh1XmJtZHvCU',
  'dDWBzgLJzqnh6',
  'CqLMhtgxaU0bm',
  'SX0fkEgJhziP6',
  '8UXMp4ydg0GqI',
  'A4YaW8abke9ZC',
  'PeIk8xbXIBdm',
  'k2hh0zJzIBvY4',
  'P85J7H4y8QpTG',
  'l1IHWYweioaSA',
  'fEyAjRwjEBdGE',
  'HZS9gauOydhnO',
  'N3A5MBimt4ojm',
  'p02GVeWRTvJcc',
  '8MSOVCY6HJRM4',
  'arxMXvwoqBXFK',
  'GGooDHKI1mrE4',
  'GnCc88zZhSVUc',
  'eEUvHvoOncA4E',
  'nKW1M28emFLVu',
  'JfMKveUkhS7oQ',
  '9jN31sQVQn9Ha',
  'JIshznjplvDos',
  '8Sg1FgXmOb3Og',
  'xDJfkqMlIlHbO',
  '10cqnoE2H4uZna',
  'AoAbWKkvZYhzO',
  'caSgWCzYsofTO',
];

const toVideo = id =>
  `https://media.giphy.com/media/${id}/giphy.mp4`;

export default function getRandomVideo(hint = '') {
  if (hint === 'hambre') {
    return toVideo(sample(hambre));
  }

  return toVideo(sample(ids));
}

let currentMomaIdx = 0;

export function getMomaVideo() {
  const video = toVideo(moma[currentMomaIdx]);
  currentMomaIdx = (currentMomaIdx + 1) % moma.length;
  return video;
}
