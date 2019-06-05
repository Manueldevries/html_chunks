import * as sk from './sk.json'
const array = Array.from(sk)
// https://medium.com/elp-2018/la-curryfication-au-coeur-de-la-programmation-fonctionnelle-5fd50ce0e858
const checkAttrVal = (value,item) => item.width == value
const whidtMax = array.filter(x => checkAttrVal(620,x))
console.log( `whidtMax Array.isArray: ${Array.isArray(whidtMax)}`)
whidtMax.map(i => console.log(`${[i.name]}:${[i.width]}`) )

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

export { arySlice }
