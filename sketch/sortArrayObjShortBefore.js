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
let acc_ = 0; let count = 0; let countTR = 0;
const acc = (acc_, nextWidth) => {
  return acc_ + nextWidth
}

const newAry = []
let unique = array.map( (item,idx,ary) => {
  if(ary[idx+1]){
    if( item.xPos === 0 && item.width === 620  ){
      countTR+=1
      console.log('single: '+item.name);
    }else if( item.width < 620 && item.xPos !== ary[idx+1].xPos && ary[idx+1].xPos > 0  ) {
      acc_+item.width < 620 ? acc_ += item.width : acc_ = 0
      if(item.yPos !== ary[idx+1].yPos){
        console.log('tr>'+item.name)
      }else if(item.xPos === ary[idx-1].width){
        console.log('td__>'+item.name);
      }else{
        console.log('td>'+item.name);
      }
    }else{
      countTR+=1
      acc_ = 0
      if(item.yPos !== ary[idx+1].yPos ){
        if(item.width !== ary[idx-1].width){
          count+=1
          console.log(`nest_${count}${'\n'}tr>${item.name} `)
        }else{
          console.log(`tr>: ${item.name} `)
        }
      }
    }

  } else if (item.xPos === 0 && item.width === 620){
    console.log(item.name);
  }else{
    console.log('END')
  }
});
