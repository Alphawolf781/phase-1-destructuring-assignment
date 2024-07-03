const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

const animal_sounds= {
  moo:'cow',
  neigh:'horse',
  baa:'sheep',
  oink:'pig',
  cluck:'chicken'
}
const moo = animal_sounds.moo
const neigh = animal_sounds.neigh
const baa =animal_sounds.baa
const oink = animal_sounds.oink
const cluck = animal_sounds.cluck

// const traditionalAnimalNames = 'bessie dolly babe little'
const traditionalNames= {
  bessie:'cow',
  dolly:'sheep',
  babe:'pig',
  little:'chicken'
}
const bessie = traditionalNames.bessie
const dolly = traditionalNames.dolly
const babe = traditionalNames.babe
const little = traditionalNames.little

const animalcolors = {
  balckandwhite:'cow',
  black:'sheep',
  pink:'pig'
}

const blackAndWhite = animalcolors.balckandwhite
const black = animalcolors.black
const pink = animalcolors.pink

const rainbowColors= ['red', 'orange', 'yellow',  'green', 'blue', 'indigo','violet']

const [red, orange, yellow , green, blue, indigo, violet]=rainbowColors

const initials= ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
const [r, o, y, g, b, v]=initials

const colorindigo=['indigo'] 
const [indg]=colorindigo

const muppetName=muppet.muppetName
const color=muppet.color
const job=muppet.job
const song=muppet.song
const partner= muppet.partner


const song2=nestedMuppet.album.theMuppetMovie.song2
const song4=nestedMuppet.album.theMuppetMovie.song4
const nestedJob=nestedMuppet.nestedJob
const nestedPartner=nestedMuppet.nestedPartner