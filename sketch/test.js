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
const arySameY = []
const arySameX = []
let xPosAry_ = []
const yPosAry = array.map(item => item.yPos)
// const aryZeroX = []
array.map(item => newAry.push(item))
array.map((item, idx, ary) => {
  if (ary[idx + 1]) {
    if (item.xPos === 0 && item.width === 620) {
      console.log('single: ' + item.name)
      newAry.push([item.name])
      newAry.shift()
      // yPosAry.shift()
    } else {
      xPosAry_.push(item.xPos)
      xPosAry = newAry.map(item =>
        item.xPos !== undefined ? item.xPos : 'close'
      )

      arySameY.push(yPosAry.map(item_ => item_ === newAry[0].yPos))
      arySameX.push(xPosAry.map(item_ => item_ === newAry[0].xPos))
      newAry.shift()
    }
  }
})
// fn get max of array
const arrayMax = arr => arr.reduce((p, v) => (p > v ? p : v))
const arrayMin = arr => arr.reduce((p, v) => (p < v ? p : v))
// array sort index same value
function arySortIdx(ary, minY) {
  var aryYindex = []
  ary.filter(function(elem, index, array) {
    if (elem == minY) {
      aryYindex.push(index)
    }
  })
  return aryYindex
}
const a = arySortIdx(yPosAry, 330)
// var aryYindex = []
// yPosAry.filter(function(elem, index, array) {
//   if (elem == 167) {
//     aryYindex.push(index)
//   }
// })
// console.log(aryYindex)

console.log(`
 ${yPosAry},\n ${a}
`)
// ${yIdx}
