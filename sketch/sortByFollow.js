// fn callback(arg*4) used on each array value
// arg1: acc = previous value return by cb || initiale value = val accumuler au fur et à mesure des appels
// arg2: curr = current value of array arg3: curr array item index
// arg4: whole array on which is called reduce
const follow = (acc, curr, i, array) => {
  // si le tab est vide la val init [] est appellé en premier
  console.log(`array[i - 1]: ${array[i - 1]}`)
  if (curr === array[i - 1]) {
    acc[acc.length - 1].push(curr)
  } else {
    acc.push(curr === array[i + 1] ? [curr] : curr)
  }
  return acc
}

var array = [
  [0, 0, 620],
  [[ 0, 167, 158 ], [ 0, 218, 158 ]],
  [ 158, 167, 254 ],
  [[ 412, 167, 208 ], [ 412, 218, 208 ], [ 412, 276, 208 ]]
  [0, 330, 342],
  [342, 330, 278],
  [0, 672, 620]
]
var arrayAfterFilter = [
  [0, 0, 620],
  [
    [[ 0, 167, 158 ], [ 0, 218, 158 ]],
    [ 158, 167, 254 ],
    [[ 412, 167, 208 ], [ 412, 218, 208 ], [ 412, 276, 208 ]]
  ]
  [
    [0, 330, 342],
    [342, 330, 278],
  ]
  [0, 672, 620]
]

const aryred = array.reduce(follow, [])

console.log(`followX: ${aryred} `)

