function trouverSeq(objectif) {
  function trouver(debut, histo) {
    if (debut == objectif) {
      return histo
    } else if (debut > objectif) {
      return null
    } else {
      return (
        trouver(debut + 5, '(' + histo + ')') ||
        trouver(debut * 3, '(' + histo + ')')
      )
    }
  }
  return trouver(1, '1')
}
