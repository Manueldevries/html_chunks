import * as sk from './sk.json'
const array = Array.from(sk)
// https://medium.com/elp-2018/la-curryfication-au-coeur-de-la-programmation-fonctionnelle-5fd50ce0e858
const checkAttrVal = (value,item) => item.width == value
const whidtMax = array.filter(x => checkAttrVal(620,x))
const check = (value,item) => item.width < value
const inf620 = array.map(i=>check(620,i))

// output
export const indent = (nb = 1, ret=true) => {
  var sp;
  ret ? sp = ['\n'] : sp = []
  for (var i = 0; i < nb; i++) sp.push('\u0020\u0020')
  return sp.join('')
}

// depth of array
export const max = (a, count = 0) =>
  Array.isArray(a) ? max(maxDepth(a), count + 1) : count

export const maxDepth = a => {
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

export const s = a => console.log(...a)

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

const xywPosAry = array.map(item => [item.xPos, item.yPos, item.width, item.height, item.name])
const xywPosFolloww = xywPosAry.reduce(followw, [])

let accWidth = 0
let aryTps = []
const arySlice = []
console.log(xywPosFolloww[1]);
console.log(max(xywPosFolloww[1]));
xywPosFolloww.map((i,x,j) => {
  i[2] === 620
    ? ( accWidth = 0, arySlice.push(i) )
    : i[0][2] ?

      (accWidth < 620
        ? (
          (accWidth += i[0][2]),
          aryTps.push(i),
          accWidth == 620 ? ( accWidth = 0, arySlice.push(aryTps), aryTps = [] ) : 'null'
        )
        : ( accWidth = 0, arySlice.push(aryTps), aryTps = [] ))

      : (accWidth < 620
        ? ( accWidth += i[2],
        aryTps.push(i),
        accWidth == 620
          ? ( accWidth = 0, arySlice.push(aryTps), aryTps = [] )
          : 'null')
        : ( accWidth = 0, arySlice.push(aryTps), aryTps = [] ))
})

export { arySlice }
