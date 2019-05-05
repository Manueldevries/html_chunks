var array = [
  { 'name': 's1', 'xPos': 0, 'yPos': 0 },

    { 'name': 's2c1s1', 'xPos': 0, 'yPos': 167 },
    { 'name': 's2c1s2', 'xPos': 0, 'yPos': 218 },

    { 'name': 's2c2', 'xPos': 158, 'yPos': 167 },

    { 'name': 's2c3s1', 'xPos': 412, 'yPos': 167 },
    { 'name': 's2c3s2', 'xPos': 412, 'yPos': 218 },
    { 'name': 's2c3s3', 'xPos': 412, 'yPos': 276 },

    { 'name': 's3c1', 'xPos': 0, 'yPos': 330 },
    { 'name': 's3c2', 'xPos': 342, 'yPos': 330 }
]
// ary[idx+1]
let unique = array.map( (item,idx,ary) => {
  if(ary[idx+1]){
    if(item.yPos === item.xPos){
      return 'single: '+ item.name
    }else if(item.yPos !== ary[idx+1].yPos && item.xPos !== ary[idx+1].xPos ){
      return item.name
    }
  }

});


console.log(unique);

// self -> [ 0, 167, 218, 167, 167, 218, 276, 330, 330 ]
// result:
// [ [0], [[167, 218], [167], [167, 218, 276]], [330, 330] ]

// console.log(distinct.slice(0,1));
// console.log(distinct.slice(1,3));
// console.log(distinct.slice(3,4));