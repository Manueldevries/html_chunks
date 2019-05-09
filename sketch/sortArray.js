// fn get max of array
const arrayMax = arr => arr.reduce((p, v) => (p > v ? p : v))
const arrayMin = arr => arr.reduce((p, v) => (p < v ? p : v))

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
const test = array.map((i, x) => i.xPos)
// .slice(1, 4 + 1)
const rest = (ary = [], idx = 0) => ary.slice(idx, ary.length)
// console.log(` ${rest(test, 4)} `)
// yPosAry.splice(result[0], parseInt(result[result.length - 1]) + 1)

arySortIdx(yPosAry, arrayMin(yPosAry))
console.log(result.map(it => `${it}`))
// console.log(` ${rest(test, result[0])} `)
console.log(` ${test[0]} `)

arySortIdx(yPosAry, 167)
console.log(result.map(it => `${it}`))
console.log(` ${rest(test, result[1][result[1].length - 1])} `)

arySortIdx(yPosAry, 330)
console.log(result.map(it => `${it}`))
console.log(` ${rest(test, result[2][result[2].length - 1])} `)

arySortIdx(yPosAry, 672)
console.log(result.map(it => `${it}`))
console.log(` ${rest(test, result[3][result[3].length - 1])} `)
