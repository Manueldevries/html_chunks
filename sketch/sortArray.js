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

const xywPosFolloww = xywPosAry.reduce(followw, []) // console.log(xywPosFolloww)

let memo = 0
let aryMemo = []
let arySlice = []
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

// test profondeur tableaux
s = a => console.log(...a)
s(arySlice)

const slice = [
  [0, 0, 620],
  [
    [[0, 167, 158], [0, 218, 158]],
    [158, 167, 254],
    [[412, 167, 208], [412, 218, 208], [412, 276, 208]],
  ],
  [[0, 330, 342], [342, 330, 278]],
  [0, 672, 620],
  [
    [[0, 682, 158], [0, 733, 158]],
    [158, 682, 254],
    [[412, 682, 208], [412, 733, 208], [412, 791, 208]],
  ],
]

const maxDepth = a => {
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
const max = (a, count = 0) =>
  Array.isArray(a) ? max(maxDepth(a), count + 1) : count
const space = num => / \s/ * num
slice.forEach(element => {
  console.log(s(element))
  console.log('max:', max(element))
  if (max(element) === 1)
    console.log(`table\n${space(10)}tr\n    td\n      \nimg width=${element}`)
})
