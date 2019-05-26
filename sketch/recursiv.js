function trouverSequence(objectif) {
  var cpt = 0
  function trouver(debut, historique) {
    cpt++
    if (debut == objectif)
      return historique;
    else if (debut > objectif)
      return null;
    else
      console.log(`cpt:${cpt}, debut:${debut}, histo:${historique}`);
      return trouver(debut + 5, "(" + historique + " + 5)") ||
             trouver(debut * 3, "(" + historique + " * 3)");
  }
  return trouver(1, "1");
}

console.log(trouverSequence(24));