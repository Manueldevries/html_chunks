function reduce2arrayObj(array, item, index) {
  let add_id = ({ ['id_' + (index + 1)]: item })
  return [...array, add_id]
}
export { reduce2arrayObj }

function reduce2array(array, item) {
  return [...array, item]
}
export { reduce2array }

function getLastUrlChunk(str) {
  // STRING
  if (typeof str === 'string') return str.split('/')[str.split('/').length - 1]
  // OBJECT
  if (typeof str === 'object') return ({
    [Object.keys(str)[0]]:
      str[Object.keys(str)].split('/')[str[Object.keys(str)].split('/').length - 1]
  })
}
// console.log(getLastUrlChunk('https://preprod-medias.mariannemelodie.fr/WebArbo/blocs/73-nouveautes-livres.jpg'));
export { getLastUrlChunk }