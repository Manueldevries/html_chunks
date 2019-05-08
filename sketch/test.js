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
  { name: 's4', xPos: 0, yPos: 672, width: 620 },
]

const newAry = []
const yPosAry = array.map(item => item.yPos)
const yPosAry_ = array.map(item => item.yPos)
// const aryZeroX = []
array.map(item => newAry.push(item))
// fn get max of array
const arrayMax = arr => arr.reduce((p, v) => (p > v ? p : v))
const arrayMin = arr => arr.reduce((p, v) => (p < v ? p : v))
// array sort index same value
function arySortIdx(ary, minY) {
  var aryYindex = []
  ary.filter(function(elem, index, array) {
    if (elem == minY) {
      aryYindex.push([index])
    }
  })
  return aryYindex
}

const a = arySortIdx(yPosAry, arrayMin(yPosAry))
const a_ = yPosAry.splice(0, parseInt(a[a.length - 1]) + 1)
console.log(`
yPosAry_: ${yPosAry_}\n
indexY:${a}\n slice:${a_}\n reste:${yPosAry}
`)

const b = arySortIdx(yPosAry, arrayMin(yPosAry))
const b_ = yPosAry.splice(0, parseInt(b[b.length - 1]) + 1)

console.log(`
indexY:${b}\n slice:${b_}\n reste:${yPosAry}
`)

const c = arySortIdx(yPosAry, 330)
const c_ = yPosAry.splice(0, parseInt(c[c.length - 1]) + 1)

console.log(`
indexY:${c}\n slice:${c_}\n reste:${yPosAry}
`)
