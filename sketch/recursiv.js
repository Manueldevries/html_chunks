const exeStack = {}
function trouverSeq(objectif) {
  var cpt = 0
  function trouver(debut, histo) {
    console.log(`cpt:${cpt}-> debut:${debut}, histo:${histo}`)
    if (debut === objectif) {
      return histo
    } else if (debut > objectif) {
      cpt++
      return 0 // or false or null but does not get out trouver???
    } else {
      cpt++
      // console.log( debut + 5 )
      return (
        trouver(debut + 5, '(' + histo + ' + 5)') ||
        trouver(debut * 3, '(' + histo + ' * 3)')
      )
    }
  }
  // exe trouver(debut:1,histo:"1")
  // 1er exe de trouverSeq(24) :
  return trouver(1, '1')
}

console.log(`trouverSeq(24):${trouverSeq(24)}`);
