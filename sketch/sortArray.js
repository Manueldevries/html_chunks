import { indent, followw, arySlice, maxDepth, max, s } from './function.js'

const creatTD = elt => `td ${elt}`

const sortRow = (elt, depth) => {
  // return Array.isArray(elt) ? elt.map(i => `array: ${i}`) : creatTD(elt)
  if (max(elt) === 1) {
    return `${indent(1)}tr${indent(2)}td ${elt}`
  } else {
    return elt.map(i => (max(i) > 1 ? `array:${i}` : sortRow(i)))
  }
}

arySlice.forEach((element, i) => {
  console.log(s(element) ? s(element) : 'NEXT SLICE')
  console.log('max:', max(element))
  if (i === 0) {
    console.log(`table.${i}`)
    console.log(`${sortRow(element)} `)
  } else {
    console.log(`${sortRow(element)} `)
  }
})
console.log('this is the END!!!')
