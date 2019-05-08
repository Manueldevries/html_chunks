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
const y = [true, false, true, true, false, false, false, false, false, false]

const x1 = [true, true, false, false, false, false, true, false, true, false]
const x2 = [true, false, false, false, false, true, false, true, false]
const x3 = [true, false, false, false, false, false, false, false]
const x4 = [true, true, true, false, false, false, false]

// fn get max of array
const arrayMax = arr => arr.reduce((p, v) => (p > v ? p : v))
// create first y array
var yIdx = []
y.filter((elem, index, array) => (elem ? yIdx.push(index) : yIdx.push(-1)))

console.log(arrayMax(yIdx))

console.log(yIdx.splice(0, yIdx.indexOf(arrayMax(yIdx)) + 1))

console.log(`
${y.splice(0, 4)},
${yIdx}
`)
