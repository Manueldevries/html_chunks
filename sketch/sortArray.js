// fn get max of array
const arrayMax = arr => arr.reduce((p, v) => (p > v ? p : v))
const arrayMin = arr => arr.reduce((p, v) => (p < v ? p : v))
// const unique = (val,idx, self) => self.indexOf(val) === idx
function unique(value, index, self) {
  return self.indexOf(value) === index
}
const follow = (acc, curr, i, array) => {
  if (curr === array[i - 1]) {
    // if (yPosAry[i] === 620) alert(curr)
    console.log(
      `curr: ${curr}, newAry[i].width: ${newAry[i].width}, newAry[i].yPos: ${
        newAry[i].yPos
      } `
    )
    // ? acc[acc.length - 1].push(['Y0:', curr])
    // : acc[acc.length - 1].push(curr)
    acc[acc.length - 1].push(curr)
  } else {
    console.log(`curr: ${curr}, newAry[i].width: ${newAry[i].width} `)
    if (yPosAry[i] === 620) alert(curr)
    acc.push(curr === array[i + 1] ? [curr] : curr)
  }
  return acc
}
var array = [
  { name: 's1', xPos: 0, yPos: 0, width: 620, height: 167 },

  { name: 's2c1s1', xPos: 0, yPos: 167, width: 158, height: 51 },
  { name: 's2c1s2', xPos: 0, yPos: 218, width: 158, height: 112 },
  { name: 's2c2', xPos: 158, yPos: 167, width: 254, height: 163 },
  { name: 's2c3s1', xPos: 412, yPos: 167, width: 208, height: 51 },
  { name: 's2c3s2', xPos: 412, yPos: 218, width: 208, height: 58 },
  { name: 's2c3s3', xPos: 412, yPos: 276, width: 208, height: 54 },
  // x[0,0] x[158] x[412,412,412] \n x[0[y:330]]
  // x[0[y:167],0[y:218]] x[158] x[412] \n x[0[y:330]]
  { name: 's3c1', xPos: 0, yPos: 330, width: 342, height: 102 },
  { name: 's3c2', xPos: 342, yPos: 330, width: 278, height: 102 },

  { name: 's4', xPos: 0, yPos: 672, width: 620 },
]
// sk output var
const newAry = array.map(clone => ({ ...clone }))
const yPosAry = array.map(item => item.yPos)
const xPosAry = array.map(item => item.xPos)
// building var
const result = []
// array sort index same value
const arySortIdx = (ary, minY) => {
  const aryYindex = []
  ary.filter(function(elem, index, array) {
    if (elem == minY) {
      aryYindex.push(index)
    }
  })
  return result.push(aryYindex.splice(0, aryYindex[aryYindex.length - 1] + 1))
}
const test = array.map((i, x) => [i.xPos, newAry[x].width])
const rest = (ary = [], idx = 0) => ary.slice(idx, ary.length)
const w = []
const xPosFollow = xPosAry.reduce(follow, [])
test.map((i, x) => w.push(i[1]))

console.log(`[...xPosAry]: [${[...xPosAry]}] `)
console.log(`xPosFollow: `, xPosFollow)
console.log([...yPosAry, ...xPosFollow])
console.log(`test[i.xPos, newAry[x].width]:${test} `)

arySortIdx(yPosAry, arrayMin(yPosAry))
console.log(result.map(it => `${it}`))

arySortIdx(yPosAry, 167)
console.log(result.map(it => `${it}`))

arySortIdx(yPosAry, 330)
console.log(result.map(it => `${it}`))

arySortIdx(yPosAry, 672)
console.log(result.map(it => `${it}`))
