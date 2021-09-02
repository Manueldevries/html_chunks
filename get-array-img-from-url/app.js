// const data = require('./test.json');
import fs from 'fs'
import getHtml from './getHtml.js'
import { reduce2arrayObj, reduce2array, getLastUrlChunk } from './modules/purfn.js'

// const page = 'https://www.tempsl.fr/accessoires-cuisine-u1'
// const selector = 'img[src*="/blocs/"]';
// const page = 'https://www.mariannemelodie.fr/cd-accordeon-musette-c15'
// const selector = 'img[src*="/Produits/"]';
// const page = 'https://www.latelierdelucie.fr'
// const page = 'https://www.chienchatetcompagnie.fr'
// const page = 'https://www.ideeshomme.fr'
// const page = 'https://www.mariannemelodie.fr'
const page = 'https://www.confortetvie.fr'
// const page = 'https://www.tempsl.fr/'
const selector = 'img[src*="/homeEvt/"]';
const output = 'output'

getHtml(page, output, selector)
  .then(() => {
    console.log(`read ${output}`)
    const imagesDom = JSON.parse(fs.readFileSync(`./${output}.json`));

    const names_id = imagesDom.reduce(reduce2arrayObj, []).map(i => getLastUrlChunk(i))
    console.log('names_id', names_id);

    const names = imagesDom.reduce(reduce2array, []).map(i => getLastUrlChunk(i))
    console.log('names', names);

  })
  .catch(e => console.log(e))