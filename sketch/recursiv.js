function trouverSeq(objectif) {
  function trouver(debut, histo) {
    if (debut == objectif) {
      debut
      return histo
    } else if (debut > objectif) {
      return null
    } else {
      return (
        trouver(debut + 5, '(' + histo + ' + 5)') ||
        trouver(debut * 3, '(' + histo * ' * 3)')
      )
    }
  }

  // exe trouver(debut:1,histo:"1")
  // 1er exe de trouverSeq(24) :
  return trouver(1, '1')
}

trouverSeq(24)
