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
const xywPosAry = array.map(item => [item.xPos, item.yPos, item.width])
var memo = 0

// building nested obj
const followw = (acc, curr, i, array) => {
  if (array[i - 1] === undefined) {
    console.log('start - 1 = ' + array[i - 1])
    acc.push(curr)
  } else if (curr[2] === array[i - 1][2]) {
    acc[acc.length - 1].push(curr)
  } else if (array[i + 1] === undefined) {
    console.log('end +1 = ' + array[i + 1])
    acc.push(curr)
  } else {
    acc.push(curr[2] === array[i + 1][2] ? [curr] : { curr: curr })
    console.log(memo < 620 ? (memo += curr[2]) : (memo = 0))
    console.log(`memo:${memo}, curr[2]${curr[2]}`)
  }
  return acc
}

// console.log(xywPosAry)
const xywPosFolloww = xywPosAry.reduce(followw, [])
console.log(xywPosFolloww)
