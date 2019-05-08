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
// const aryZeroX = []
array.map(item => newAry.push(item))
array.map((item, idx, ary) => {
  if (ary[idx + 1]) {
    if (item.xPos === 0 && item.width === 620) {
      console.log('single: ' + item.name)
      newAry.push([item.name])
      newAry.shift()
    } else {
      const yPosAry = newAry.map(item => item.yPos)
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
// create first y array
var yIdx = []
arySameY[0].filter((elem, index, array) =>
  elem ? yIdx.push(index) : yIdx.push(-1)
)
// console.log(arySameX[3].splice(0, arySameX[3].indexOf(false)))
// //1-> ${arySameX[1].splice(0, arySameX[1].indexOf(false))}
// ${arySameX.map((ary, idx) => ary.splice(0, ary.indexOf(false)) + '\n' + ary)}

console.log(`

${yIdx.splice(0, yIdx.indexOf(arrayMax(yIdx)) + 1)}
${arySameX.length}
${array[3].name}
${xPosAry_.map((x, idx, ary) => `x:${x}\n `)}
`)
// ${yIdx}
