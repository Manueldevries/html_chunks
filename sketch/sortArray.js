import { indent, followw, arySlice, maxDepth, max, s } from './function.js'

const nest = (elt, cr_bool) => {
  if(elt.length > 1){
    // console.log(`elt: ${elt} -> length`, elt.length);
    elt.map( (i,x) => {
      if(x === 0){
        return console.log(`${indent(1, cr_bool)}${indent(2)}td${indent(3)}table${indent(4)}tr${indent(5)}td ${i} `)
      }else{
        return console.log(`${indent(4,cr_bool)}${indent(5)}td ${i} `)
      }
    })
  }
}

const sortRow = (elt, cr_bool) => {
  // return Array.isArray(elt) ? elt.map(i => `array: ${i}`) : creatTD(elt)
  if (max(elt) === 1) {
    return `${indent(1,cr_bool)}${indent(2)}td__ ${elt}`
  } else {
    return elt.map((i) => (max(i) > 1 ? nest(i, false) : sortRow(i)))
  }
}

arySlice.forEach((element, i) => {
  // console.log(s(element) ? s(element) : 'NEXT SLICE')
  i === 0 ? console.log('start') : console.log(`${indent(1)}tr`);
  if (i === 0) {
    console.log(`table.${i}${indent(1,true)}tr `)
    console.log(`${sortRow(element, false)} `)
  } else {
    console.log(`${sortRow(element, false)} `)
  }
})
console.log('this is the END!!!')
