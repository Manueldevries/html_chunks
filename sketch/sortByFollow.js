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

var array = [0, 0, 0, 158, 412, 412, 412, 0, 342, 0]
const followX = array.reduce(follow, [])

console.log(`followX: ${followX} `)
// 0,0,0,158,412,412,412,0,342,0
