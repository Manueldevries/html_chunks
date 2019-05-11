// js group following values number arrays
var aryx = [0,0,0,158,412,412,412,0,342,0]

var array = [0,0,0,158,412,412,412,0,342,0]
const grouped = array.reduce((r, v, i, a) => {
  if (v === a[i - 1]) {
    r[r.length - 1].push(v);
  } else {
    r.push(v === a[i + 1] ? [v] : v);
  }
  return r;
}, []);

console.log(`grouped: ${grouped} `)
