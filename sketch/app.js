var array = [ { 'name': 's1', 'xPos': 0, 'yPos': 0, 'height': 167, 'width': 620 }, { 'name': 's2c1s1', 'xPos': 0, 'yPos': 167, 'height': 51, 'width': 158 }, { 'name': 's2c1s2', 'xPos': 0, 'yPos': 218, 'height': 112, 'width': 158 }, { 'name': 's2c2', 'xPos': 158, 'yPos': 167, 'height': 163, 'width': 254 }, { 'name': 's2c3s1', 'xPos': 412, 'yPos': 167, 'height': 51, 'width': 208 }, { 'name': 's2c3s2', 'xPos': 412, 'yPos': 218, 'height': 58, 'width': 208 }, { 'name': 's2c3s3', 'xPos': 412, 'yPos': 276, 'height': 54, 'width': 208 }, { 'name': 's3c1', 'xPos': 0, 'yPos': 330, 'height': 102, 'width': 342 }, { 'name': 's3c2', 'xPos': 342, 'yPos': 330, 'height': 102, 'width': 278 } ]

const distinct = array.map(item => item.yPos)
  .filter((value, index, self) => self.indexOf(value) === index)

const all = [...new Set( array.map( (item,idx) => {return [item.name, item.yPos, item.xPos]} ) )];
//const cut = (aryA,aryB) =>
const test = [...array]
const bs = '&nbsp;'
// const rest = (...arg) => arg+'____\n'
const rest = (a,b,...arg) => a +'\n'+ b+'\n'+ arg
// const rest = (idx,...arg) => arg[idx]+'____\n'

console.log(
  `${ test.map( (item,idx,ary)=> {
        // return [item.yPos,item.xPos]+' : '
        // return ary[idx+1] ? ary[idx+1].name : 'empty'
        // return ary[idx].name+ rest() +'\n'
        return ary[idx+1] ? (ary[idx].yPos === ary[idx+1].yPos ? ary[idx].yPos : `::${ary[idx].yPos}`) : 'END'
      } )}`
)