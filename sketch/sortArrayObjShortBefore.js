var array = [
  { 'name': 's1', 'xPos': 0, 'yPos': 0, 'width': 620, 'height': 167 },

  { 'name': 's2c1s1', 'xPos': 0, 'yPos': 167, 'width': 158, 'height': 51 },
  { 'name': 's2c1s2', 'xPos': 0, 'yPos': 218, 'width': 158, 'height': 112 },

  { 'name': 's2c2', 'xPos': 158, 'yPos': 167, 'width': 254, 'height': 163 },

  { 'name': 's2c3s1', 'xPos': 412, 'yPos': 167, 'width': 208, 'height': 51 },
  { 'name': 's2c3s2', 'xPos': 412, 'yPos': 218, 'width': 208, 'height': 58 },
  { 'name': 's2c3s3', 'xPos': 412, 'yPos': 276, 'width': 208, 'height': 54 },

  { 'name': 's3c1', 'xPos': 0, 'yPos': 330, 'width': 342, 'height': 102 },
  { 'name': 's3c2', 'xPos': 342, 'yPos': 330, 'width': 278, 'height': 102 },
  { 'name': 's4', 'xPos': 0, 'yPos': 672, 'width': 620 }
]

const acc = (acc_, nextWidth) => acc_ + nextWidth
function findZero(elt){return elt === 0}

const newAry = []
const arySameY = []
const xPosAry = []
const aryZeroX = []
array.map(item=>newAry.push(item))
array.map( (item,idx,ary) => {
  if(ary[idx+1]){
    if( item.xPos === 0 && item.width === 620  ){
      console.log('single: '+item.name);
      newAry.push([item.name]); newAry.shift()
    }else{
      const yPosAry = newAry.map(item => item.yPos)
      const xPosAry = newAry.map(item => item.xPos !== undefined ? item.xPos : 'null')

      console.log(xPosAry.findIndex(findZero)+': '+item.name)
      // console.log(`[...xPosAry]: ${[...xPosAry]}`);
      console.log([...xPosAry]);

      // arySameY.push([yPosAry.map(item => item === newAry[0].yPos )])
      arySameY.push( yPosAry.map(item_ => item_ === newAry[0].yPos) )
      newAry.shift()
    }
  }

});
// newAry.map( item=>console.log(item) )
arySameY.map(item=>console.log(item))
