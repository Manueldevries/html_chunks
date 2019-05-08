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
// find size first table->find yPos.min
const minY = array.map( item => item)
const getMin = (arg) => Math.min(...arg)
// console.log( getMin( array.map( item => item.yPos) ) );

function findZero(elt){return elt === 0}

const newAry = []
const arySameY = []
const arySameX = []
const xPosAry = []
// const aryZeroX = []
array.map(item=>newAry.push(item))
array.map( (item,idx,ary) => {
  if(ary[idx+1]){
    if( item.xPos === 0 && item.width === 620  ){
      console.log('single: '+item.name);
      newAry.push([item.name]); newAry.shift()
    }else{
      const yPosAry = newAry.map(item => item.yPos)
      const xPosAry = newAry.map(item => item.xPos !== undefined ? item.xPos : 'close')

      // console.log(xPosAry.findIndex(findZero)+': '+item.name)
      console.log(`[...xPosAry]: ${[...xPosAry]}`);

      // arySameY.push([yPosAry.map(item => item === newAry[0].yPos )])
      arySameY.push( yPosAry.map(item_ => item_ === newAry[0].yPos) )
      arySameX.push( xPosAry.map(item_ => item_ === newAry[0].xPos) )
      const test = newAry.map( (item,idx) => arySameY[0][idx] && item.xPos === ary[idx+1].xPos ? item.name : 'false'  )
      console.log(`test: ${test} `);

      newAry.shift()
    }
  }

});

arySameY.map(item=>console.log( `itemY: ${item}` ))
arySameX.map(item=>console.log( `itemX: ${item}` ))
