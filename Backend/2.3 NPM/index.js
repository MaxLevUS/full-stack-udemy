// var generateName = require('sillyname');

// import generateName from 'sillyname';

// var sillyName = generateName();

// console.log(`My name is ${sillyName}`)

// import superheroes from 'superheroes';


// var superHero = superheroes.random()

// console.log(`I'm a ${superHero}`)

// import superheroes from 'superheroes';

import superheroes from 'superheroes';

const randomHero = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`I'm a ${randomHero}`);

