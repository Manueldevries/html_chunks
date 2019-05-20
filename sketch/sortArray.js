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

  { name: 's5c1s1', xPos: 0, yPos: 682, width: 158, height: 51 },
  { name: 's5c1s2', xPos: 0, yPos: 733, width: 158, height: 112 },
  { name: 's5c2', xPos: 158, yPos: 682, width: 254, height: 163 },
  { name: 's5c3s1', xPos: 412, yPos: 682, width: 208, height: 51 },
  { name: 's5c3s2', xPos: 412, yPos: 733, width: 208, height: 58 },
  { name: 's5c3s3', xPos: 412, yPos: 791, width: 208, height: 54 },
]
const newAry = array.map(clone => ({ ...clone }))
const xywPosAry = array.map(item => [item.xPos, item.yPos, item.width])
let memo = 0
let aryMemo = []
let arySlice = []
const inf620 = (curr, array, i) => {
  let current = {'name':newAry[i].name,'x':newAry[i].xPos,'y':newAry[i].yPos,'w':newAry[i].width}
  let prev = newAry[i-1].name
  let next = newAry[i+1].name
  return memo < 620 ?
    ( (array[i][1] === curr[1] ?
      memo += curr[2]
      : false), aryMemo.push(curr) )
    : (memo = 0, aryMemo = [])
}
// building nested obj
const followw = (acc, curr, i, array) => {
  if (array[i - 1] === undefined) {
    array[i][0] === 0 ? arySlice.push(['slice:'+newAry[i].name,'index:'+i]) : false
    acc.push( curr[2] === array[i + 1][2] ? [curr] : curr )
  } else if (curr[2] === array[i - 1][2]) {
    inf620(curr, array, (i-1));
    acc[acc.length - 1].push(curr)

  } else if (array[i + 1] === undefined) {
    array[i][0] === 0 ? arySlice.push(['slice:'+newAry[i].name,'index:'+i]) : false
    // acc.push( curr[2] === array[i + 1][2] ? [curr] : curr ) // undefined
  } else {
    array[i][0] === 0 ? arySlice.push(['slice:'+newAry[i].name,'index:'+i]) : false

    inf620(curr, array, i)
    acc.push(curr[2] === array[i + 1][2] ? [curr] : { curr: curr })
  }
  return acc
}

// console.log(xywPosAry)
const xywPosFolloww = xywPosAry.reduce(followw, [])
console.log(xywPosFolloww)
