const rmsp = (sentence) => sentence[sentence.length-1] === ' ' ? sentence+'lorems ipsum ' : sentence+' lorem ipsum '
function test(objectif, obLgth){

  function verif(debut){
    if(debut.length === obLgth){
      return `ton argument:${debut} est pil à ${obLgth}`
    }else if(debut.length > obLgth) {
      console.log(`ligne trop longue: ${debut.length}, objectif: ${debut} `)
      return null
    }else{
      console.log(`verif(rmsp(debut)) ?: ${verif(rmsp(debut))}, verif(debut+' de ') ?: ${verif(debut+' de ')}`);
      return (
        // exe(odd) || exe(even)
        verif(rmsp(debut)) ||
        verif(debut+' de ')
      )
    }
  }
  return verif(objectif)
}

console.log(
  test('un paragraphe',75)
);