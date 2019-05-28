function test(objectif, length){

  function verif(debut){
    if(debut.length === length){
      return `ton argument:${debut} est pil à ${length}`
    }else if(debut.length < length) {
      console.log(`objectif trop court: ${debut.length}, objectif: ${debut} `)
      return verif(debut+'.')
      // return null
    }
  }
  return verif(objectif)
}

console.log(
  test('un paragraphe',20)
);