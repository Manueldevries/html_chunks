const fs    = require('fs')
const util  = require('util')
const array = require('./sk.json')
const test  = require('./func')
// change clg by output to file :
// var log_file = fs.createWriteStream(__dirname + '/_content.slim', {flags : 'w'});
// var log_stdout = process.stdout;
// console.log = function(d) { //
//   log_file.write(util.format(d) + '\n');
//   log_stdout.write(util.format(d) + '\n');
// };

const indent = (nb = 1, ret=true) => {
  var sp;
  ret ? sp = ['\n'] : sp = []
  for (var i = 0; i < nb; i++) sp.push('\u0020\u0020')
  return sp.join('')
}
// building nested obj
const followw = (acc, curr, i, array) => {
  if (array[i - 1] === undefined) {
    acc.push(curr[2] === array[i + 1][2] ? [curr] : curr)
  } else if (curr[2] === array[i - 1][2]) {
    acc[acc.length - 1].push(curr)
  } else {
    acc.push(curr[2] === array[i + 1][2] ? [curr] : curr)
  }
  return acc
}
// depth of array
const max = (a, count = 0) =>
  Array.isArray(a) ? max(maxDepth(a), count + 1) : count

const maxDepth = a => {
  let maxVal = Number.MIN_VALUE
  let item

  a.forEach(val => {
    let depth = max(val)
    if (depth > maxVal) {
      maxVal = depth
      item = val
    }
  })

  return item
}

const xywPosAry = array.map(item => [item.xPos, item.yPos, item.width, item.height, item.name])
const xywPosFolloww = xywPosAry.reduce(followw, [])

let memo = 0
let aryMemo = []
const arySlice = []

xywPosFolloww.map(i => {
  i[2] === 620
    ? ((memo = 0), arySlice.push(i))
    : i[0][2]
      ? memo < 620
        ? ((memo += i[0][2]),
        aryMemo.push(i),
        memo == 620
          ? ((memo = 0), arySlice.push(aryMemo), (aryMemo = []))
          : 'null')
        : ((memo = 0), arySlice.push(aryMemo), (aryMemo = []))
      : memo < 620
        ? ((memo += i[2]),
        aryMemo.push(i),
        memo == 620
          ? ((memo = 0), arySlice.push(aryMemo), (aryMemo = []))
          : 'null')
        : ((memo = 0), arySlice.push(aryMemo), (aryMemo = []))
})
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
