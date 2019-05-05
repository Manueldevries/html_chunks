var array = [
  { 'name': 's1', 'xPos': 0, 'yPos': 0, 'width': 620 },

    { 'name': 's2c1s1', 'xPos': 0, 'yPos': 167, 'width': 158 },
    { 'name': 's2c1s2', 'xPos': 0, 'yPos': 218, 'width': 158 },

    { 'name': 's2c2', 'xPos': 158, 'yPos': 167, 'width': 254 },

    { 'name': 's2c3s1', 'xPos': 412, 'yPos': 167, 'width': 208 },
    { 'name': 's2c3s2', 'xPos': 412, 'yPos': 218, 'width': 208 },
    { 'name': 's2c3s3', 'xPos': 412, 'yPos': 276, 'width': 208 },

    { 'name': 's3c1', 'xPos': 0, 'yPos': 330, 'width': 342 },
    { 'name': 's3c2', 'xPos': 342, 'yPos': 330, 'width': 278 },
  { 'name': 's4', 'xPos': 0, 'yPos': 672, 'width': 620 }
]
const acc = (oldWidth, curWidth) => oldWidth + curWidth

const newAry = []
let unique = array.map( (item,idx,ary) => {
  if(ary[idx+1]){
    if( item.xPos === 0 && item.width === 620  ){
      newAry.push([{'single': item.name}])
      // ary.shift(ary[idx])
    }else if( item.width < 620 ) {
      newAry.push([{'nested': item.name}])
      console.log(idx+': ',ary[idx])
    }
  } else if (item.xPos === 0 && item.width === 620){
    newAry.push([{'single': item.name}])
    // ary.shift(ary[idx])
  }else{
    console.log('END')
  }
});

console.log(newAry.map(item=>item[0].single));
console.log(newAry.map(item=>item[0].nested));
// console.log(newAry.map(item=>item[0].single));
