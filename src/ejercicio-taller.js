/* World Bank */
const Singers = {
  "Sakira": {
    "discs": [
      {
        "songs": {
          "first": 'Sueños blancos',
          "second": 'Antologia',
          "third": 'Estoy aquí'
        },
        "name": "Pies descalsos",
      },
      {
        "songs": {
          "first": 'Sueños',
          "second": 'Esta noche voy contigo',
          "third": 'Lejos de tu amor'
        },
        "name": "Magia",
      },
    ],
    "name": "Shakira",
    "image": "https://imagenes.canalrcn.com/lomaslike/shakira-video-cantando-bailando-11-anos-instagram-.jpg",
  },
  "Beyonce": {
    "discs": [
      {
        "songs": {
          "first": 'Halo',
          "second": 'Crazy in love',
          "third": 'Single Ladies'
        },
        "name": "Beyoncé",
      },
      {
        "songs": {
          "first": 'Pray you catch me',
          "second": 'Hold Up',
          "third": "Don't hurt yourself"
        },
        "name": "Lemonade",
      },
      {
        "songs": {
          "first": 'Deja vu',
          "second": 'Get me bodied',
          "third": 'Suga mama'
        },
        "name": "B'Day",
      },
    ],
    "name": "Beyoncé",
    "image": "https://img.20mn.fr/TXgrbV24Tp-IOns4BtzKog/830x532_beyonce-concert-allemagne-juillet-2018.jpg",
  },
  "Ariana": {
    "discs": [
      {
        "songs": {
          "first": 'Raindrops',
          "second": 'Blazed',
          "third": 'The light is coming'
        },
        "name": "Sweetener",
      },
      {
        "songs": {
          "first": 'Imagine',
          "second": 'Needy',
          "third": 'Nasa'
        },
        "name": "Thank U next",
      },
      {
        "songs": {
          "first": 'Break Free',
          "second": 'Problem',
          "third": 'Baby I'
        },
        "name": "The best",
      },
    ],
    "name": "Ariana",
    "image": "https://okdiario.com/img/2019/06/07/critican-un-posible-retoque-estetico-de-ariana-grande-655x368.jpg",
  },
}

const discos=Singers.Sakira.discs
for (let i=0; i< discos.length; i++){
  console.log(discos[i].name)}

const discos2=Singers.Beyonce.discs
for (let i=0; i<discos2.length; i++){
  console.log(discos2[i].name)
}

const discos3=Singers.Ariana.discs
for (let i=0; i<discos3.length; i++){
  console.log(discos3[i].name)
}

const names = Object.keys(Singers);
for (let i=0; i<names.length; i++){
  // console.log(Singers[names[i]].discs)
  const discos = Singers[names[i]].discs;
  for (let i=0; i<discos.length;i++){
    console.log(discos[i].name)
  }}
