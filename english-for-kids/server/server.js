// import cards from '../src/components/cards/CardsData';
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

const data = [
  [
    {
      id: 1,
      title: 'Action (set AA)',
      image: '../src/assets/img/dance.jpg',
    },
    {
      id: 2,
      title: 'Action (set BB)',
      image: '../src/assets/img/swim.jpg',
    },
    {
      id: 3,
      title: 'Action (set CC)',
      image: '../src/assets/img/draw.jpg',
    },
    {
      id: 4,
      title: 'Animal (set A)',
      image: '../src/assets/img/dog.jpg',
    },
    {
      id: 5,
      title: 'Animal (set B)',
      image: '../src/assets/img/pig.jpg',
    },
    {
      id: 6,
      title: 'Animal (set C)',
      image: '../src/assets/img/lion.jpg',
    },
    {
      id: 7,
      title: 'Clothes',
      image: '../src/assets/img/shirt.jpg',
    },
    {
      id: 8,
      title: 'Emotions',
      image: '../src/assets/img/smile.jpg',
    },
  ],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: '../src/assets/img/cry.jpg',
      audioSrc: '../src/assets/audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: '../src/assets/img/dance.jpg',
      audioSrc: '../src/assets/audio/dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: '../src/assets/img/dive.jpg',
      audioSrc: '../src/assets/audio/dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: '../src/assets/img/draw.jpg',
      audioSrc: '../src/assets/audio/draw.mp3',
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: '../src/assets/img/fish.jpg',
      audioSrc: '../src/assets/audio/fish.mp3',
    },
    {
      word: 'fly',
      translation: 'летать',
      image: '../src/assets/img/fly.jpg',
      audioSrc: '../src/assets/audio/fly.mp3',
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: '../src/assets/img/hug.jpg',
      audioSrc: '../src/assets/audio/hug.mp3',
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: '../src/assets/img/jump.jpg',
      audioSrc: '../src/assets/audio/jump.mp3',
    },
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: '../src/assets/img/open.jpg',
      audioSrc: '../src/assets/audio/open.mp3',
    },
    {
      word: 'play',
      translation: 'играть',
      image: '../src/assets/img/play.jpg',
      audioSrc: '../src/assets/audio/play.mp3',
    },
    {
      word: 'point',
      translation: 'указывать',
      image: '../src/assets/img/point.jpg',
      audioSrc: '../src/assets/audio/point.mp3',
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: '../src/assets/img/ride.jpg',
      audioSrc: '../src/assets/audio/ride.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: '../src/assets/img/run.jpg',
      audioSrc: '../src/assets/audio/run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: '../src/assets/img/sing.jpg',
      audioSrc: '../src/assets/audio/sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: '../src/assets/img/skip.jpg',
      audioSrc: '../src/assets/audio/skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: '../src/assets/img/swim.jpg',
      audioSrc: '../src/assets/audio/swim.mp3',
    },
  ],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: '../src/assets/img/cry.jpg',
      audioSrc: '../src/assets/audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: '../src/assets/img/dance.jpg',
      audioSrc: '../src/assets/audio/dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: '../src/assets/img/dive.jpg',
      audioSrc: '../src/assets/audio/dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: '../src/assets/img/draw.jpg',
      audioSrc: '../src/assets/audio/draw.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: '../src/assets/img/run.jpg',
      audioSrc: '../src/assets/audio/run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: '../src/assets/img/sing.jpg',
      audioSrc: '../src/assets/audio/sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: '../src/assets/img/skip.jpg',
      audioSrc: '../src/assets/audio/skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: '../src/assets/img/swim.jpg',
      audioSrc: '../src/assets/audio/swim.mp3',
    },
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: '../src/assets/img/cat.jpg',
      audioSrc: '../src/assets/audio/cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: '../src/assets/img/chick.jpg',
      audioSrc: '../src/assets/audio/chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: '../src/assets/img/chicken.jpg',
      audioSrc: '../src/assets/audio/chicken.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: '../src/assets/img/dog.jpg',
      audioSrc: '../src/assets/audio/dog.mp3',
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: '../src/assets/img/horse.jpg',
      audioSrc: '../src/assets/audio/horse.mp3',
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: '../src/assets/img/pig.jpg',
      audioSrc: '../src/assets/audio/pig.mp3',
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: '../src/assets/img/rabbit.jpg',
      audioSrc: '../src/assets/audio/rabbit.mp3',
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: '../src/assets/img/sheep.jpg',
      audioSrc: '../src/assets/audio/sheep.mp3',
    },
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: '../src/assets/img/bird.jpg',
      audioSrc: '../src/assets/audio/bird.mp3',
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: '../src/assets/img/fish1.jpg',
      audioSrc: '../src/assets/audio/fish.mp3',
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: '../src/assets/img/frog.jpg',
      audioSrc: '../src/assets/audio/frog.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: '../src/assets/img/giraffe.jpg',
      audioSrc: '../src/assets/audio/giraffe.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: '../src/assets/img/lion.jpg',
      audioSrc: '../src/assets/audio/lion.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: '../src/assets/img/mouse.jpg',
      audioSrc: '../src/assets/audio/mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: '../src/assets/img/turtle.jpg',
      audioSrc: '../src/assets/audio/turtle.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: '../src/assets/img/dolphin.jpg',
      audioSrc: '../src/assets/audio/dolphin.mp3',
    },
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: '../src/assets/img/cat.jpg',
      audioSrc: '../src/assets/audio/cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: '../src/assets/img/chick.jpg',
      audioSrc: '../src/assets/audio/chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: '../src/assets/img/chicken.jpg',
      audioSrc: '../src/assets/audio/chicken.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: '../src/assets/img/dog.jpg',
      audioSrc: '../src/assets/audio/dog.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: '../src/assets/img/lion.jpg',
      audioSrc: '../src/assets/audio/lion.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: '../src/assets/img/mouse.jpg',
      audioSrc: '../src/assets/audio/mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: '../src/assets/img/turtle.jpg',
      audioSrc: '../src/assets/audio/turtle.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: '../src/assets/img/dolphin.jpg',
      audioSrc: '../src/assets/audio/dolphin.mp3',
    },
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: '../src/assets/img/skirt.jpg',
      audioSrc: '../src/assets/audio/skirt.mp3',
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: '../src/assets/img/pants.jpg',
      audioSrc: '../src/assets/audio/pants.mp3',
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: '../src/assets/img/blouse.jpg',
      audioSrc: '../src/assets/audio/blouse.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      image: '../src/assets/img/dress.jpg',
      audioSrc: '../src/assets/audio/dress.mp3',
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: '../src/assets/img/boot.jpg',
      audioSrc: '../src/assets/audio/boot.mp3',
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: '../src/assets/img/shirt.jpg',
      audioSrc: '../src/assets/audio/shirt.mp3',
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: '../src/assets/img/coat.jpg',
      audioSrc: '../src/assets/audio/coat.mp3',
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: '../src/assets/img/shoe.jpg',
      audioSrc: '../src/assets/audio/shoe.mp3',
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: '../src/assets/img/sad.jpg',
      audioSrc: '../src/assets/audio/sad.mp3',
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: '../src/assets/img/angry.jpg',
      audioSrc: '../src/assets/audio/angry.mp3',
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: '../src/assets/img/happy.jpg',
      audioSrc: '../src/assets/audio/happy.mp3',
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: '../src/assets/img/tired.jpg',
      audioSrc: '../src/assets/audio/tired.mp3',
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: '../src/assets/img/surprised.jpg',
      audioSrc: '../src/assets/audio/surprised.mp3',
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: '../src/assets/img/scared.jpg',
      audioSrc: '../src/assets/audio/scared.mp3',
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: '../src/assets/img/smile.jpg',
      audioSrc: '../src/assets/audio/smile.mp3',
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: '../src/assets/img/laugh.jpg',
      audioSrc: '../src/assets/audio/laugh.mp3',
    },
  ],
];

app.use('/data', (req, res) => {
  res.send(data);
});
app.listen(3000, () => console.log('API is running on http://localhost:3000/login'));
