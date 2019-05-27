export const indent = (nb = 1, char = '\u0020\u0020') => {
  var sp = ['\n']
  for (var i = 0; i < nb; i++) sp.push(char)
  return sp.join('')
}
// building nested obj
export const followw = (acc, curr, i, array) => {
  if (array[i - 1] === undefined) {
    acc.push(curr[2] === array[i + 1][2] ? [curr] : curr)
  } else if (curr[2] === array[i - 1][2]) {
    acc[acc.length - 1].push(curr)
  } else {
    acc.push(curr[2] === array[i + 1][2] ? [curr] : curr)
  }
  return acc
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
