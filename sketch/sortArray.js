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
// building nested obj
// fn get max of array
const follow = (acc, curr, i, array) => {
  if (curr === array[i - 1]) {
    console.log(
      `curr: ${curr}, newAry[i].width: ${newAry[i].width}, newAry[i].yPos: ${
        newAry[i].yPos
      } `
    )
    if (newAry[i].width === 620){
      acc[acc.length - 1].push(['Y0:', curr])
    }else{
      acc[acc.length - 1].push(curr)
    }
    // acc[acc.length - 1].push(curr)
  } else {
    console.log(`curr: ${curr}, newAry[i].width: ${newAry[i].width} `)
    // if (newAry[i].width === 620 && curr === 0){
    //   acc.push(curr)
    // }else{
    //   acc.push(curr === array[i + 1] ? [curr] : curr)
    // }
    acc.push(curr === array[i + 1] ? [curr] : curr)
  }
  return acc
}


const test = array.map((i, x) => [i.xPos, newAry[x].width])
const rest = (ary = [], idx = 0) => ary.slice(idx, ary.length)
const w = []
const xPosFollow = xPosAry.reduce(follow, [])
test.map((i, x) => w.push(i[1]))

console.log(`xPosAry: [${xPosAry}] `)
console.log('xPosFollow: ', xPosFollow)
