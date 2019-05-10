// js group following values number arrays
var aryx = [0,0,0,158,412,412,412,0,342,0]
var same = []
var count = 0

// aryx.map( (i,idx,array) => {
//   if(i === array[idx+1] || i === array[idx-1]) { same.push(i) }else{ count++ }
// })

var array = [0,0,0,158,412,412,412,0,342,0],
  grouped = array.reduce((r, v, i, a) => {
    if (v === a[i - 1]) {
      r[r.length - 1].push(v);
    } else {
      r.push(v === a[i + 1] ? [v] : v);
    }
    return r;
}, []);

console.log(grouped)
