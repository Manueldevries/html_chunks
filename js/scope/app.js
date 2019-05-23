function indent(nb=1,char='\u0020\u0020') {

  arguments.length === 2 ?
    [nb, char] = arguments :
    (arguments.length === 1 && typeof arguments[0] === 'number'  ?
      [nb] = arguments : [char,nb=2] = arguments)

  var sp = ['\n'];
  for (var i = 0; i < nb; i++) sp.push(char)
  return sp.join('');
}

// representation de l'espace sur papier = Counterbore | open box | U+2423
console.log(`table${indent(1)}tr${indent(2)}td${indent(3)}table${indent(4)}tr${indent(5)}td ${indent(5)}td `);
