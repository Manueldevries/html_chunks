var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/_content.slim', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};
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

const s = a => console.log(...a)
// sort slice
var array = [
  { name: 's1', xPos: 0, yPos: 0, width: 620, height: 167 },

  { name: 's2c1s1', xPos: 0, yPos: 167, width: 158, height: 51 },
  { name: 's2c1s2', xPos: 0, yPos: 218, width: 158, height: 112 },
  { name: 's2c2', xPos: 158, yPos: 167, width: 254, height: 163 },
  { name: 's2c3s1', xPos: 412, yPos: 167, width: 208, height: 51 },
  { name: 's2c3s2', xPos: 412, yPos: 218, width: 208, height: 58 },
  { name: 's2c3s3', xPos: 412, yPos: 276, width: 208, height: 54 },

  { name: 's3c1', xPos: 0, yPos: 330, width: 342, height: 102 },
  { name: 's3c2', xPos: 342, yPos: 330, width: 278, height: 102 },

  { name: 's4', xPos: 0, yPos: 672, width: 620, height: 10 },

  { name: 's5c1s1', xPos: 0, yPos: 682, width: 158, height: 51 },
  { name: 's5c1s2', xPos: 0, yPos: 733, width: 158, height: 112 },
  { name: 's5c2', xPos: 158, yPos: 682, width: 254, height: 163 },
  { name: 's5c3s1', xPos: 412, yPos: 682, width: 208, height: 51 },
  { name: 's5c3s2', xPos: 412, yPos: 733, width: 208, height: 58 },
  { name: 's5c3s3', xPos: 412, yPos: 791, width: 208, height: 54 },
]

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

// var fs = require('fs');
const nest = (elt, cr_bool) => {
  if(elt.length > 1){
    // console.log(`elt: ${elt} -> length`, elt.length);
    elt.map( (i,x) => {
      if(x === 0){
        console.log('ok_ici');
        return console.log(`${indent(1, cr_bool)}${indent(2)}td${indent(3)}table${indent(4)}tr${indent(5)}td${indent(6)}table${indent(7)}tr${indent(8)}td ${i} `)
      }else{
        // console.log('pas là');
        return console.log(`${indent(7,cr_bool)}tr${indent(8)}td ${i} `)
      }
    })
  }
}

const sortRow = (elt, cr_bool) => {
  // return Array.isArray(elt) ? elt.map(i => `array: ${i}`) : creatTD(elt)
  const td_0 = `${indent(2, cr_bool)}td${indent(3)}img src="${elt[4]}" width="${elt[2]}" height="${elt[3]}"`
  const td_1 = `${indent(2, cr_bool)}td${indent(3, true)}table${indent(4, true)}tr`
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
  i === 0 ? console.log(`table._${i}${indent(1,true)}tr`) : console.log(`${indent(1,false)}tr`);
  if (i === 0) {
    // console.log(`table._${i}${indent(1,true)}tr`)
    sortRow(element, false)
  } else if(max(element) <= 1) {
    // td niv 0 = td img src=element
    sortRow(element, false)
  } else if(max(element) === 2){
    // td niv 1 = td table tr td * element
    sortRow(element, false)
  }else{
    // nest(element,false)
  }
})

