// {
//   var fs = require('fs');
//   var util = require('util');
//   var log_file = fs.createWriteStream(__dirname + '/_content.slim', {flags : 'w'});
//   var log_stdout = process.stdout;
//   console.log = function(d) { //
//     log_file.write(util.format(d) + '\n');
//     log_stdout.write(util.format(d) + '\n');
//   }
// }
import { indent, arySlice, max } from './function'

// output
const t0 = 'table border=\'0\' cellpadding=\'0\' cellspacing=\'0\''
const nest = (elt, cr_bool) => {
  console.log(`${indent(2, cr_bool)}td${indent(3, true)}${t0}${indent(4, true)}tr`);
  elt.map( (i) => {
    if(max(i) === 1){
      return console.log(`${indent(5,false)}td${indent(6)}img src="${i[4]}" width="${i[2]}" height="${i[3]}"`);
    }else{
      return console.log( `${indent(5, false)}td${indent(6)}${t0}`),
      i.map(i => console.log(`${indent(7,false)}tr${indent(8)}td${indent(9)}img src="${i[4]}" width="${i[2]}" height="${i[3]}"`))
    }
  })
}

const sortRow = (elt, cr_bool) => {
  const td_0 = `${indent(2, cr_bool)}td${indent(3)}img src="${elt[4]}" width="${elt[2]}" height="${elt[3]}"`
  const td_1 = `${indent(2, cr_bool)}td${indent(3, true)}${t0}${indent(4, true)}tr`
  if (max(elt) === 1) {
    // write td niv 0 et 1
    return console.log(td_0)
  } else {
    console.log(td_1);
    return elt.map(
      (i) => {
        console.log(`${indent(5,false)}td${indent(6)}img src="${i[4]}" width="${i[2]}" height="${i[3]}"`);
      }
    )
  }
}

arySlice.forEach((element, i) => {
  // console.log(s(element) ? s(element) : 'NEXT SLICE')
  // first table : tr
  i === 0 ? console.log(`${t0} class='level_${i}'${indent(1,true)}tr`) : console.log(`${indent(1,false)}tr`);
  sortSlice(i, element);
})

function sortSlice(i, element) {
  // ? td niv 0 = td img src=element
  max(element) === (0 || 1 || 2) ? sortRow(element, false) : nest(element, false);
}
