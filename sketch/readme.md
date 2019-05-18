

- CAS 1 item.y unique = singleTab tr > td
- CAS 2 item.y multiple = nestedTable tr > td > table tr

- nestedTable vérifier item.Y1.x == item.x.next jusqu'a !x

## suite sortArray.js

[looping array](http://www.jstips.co/en/javascript/looping-over-arrays/)

```javascript
const yx = [
  [
    [167,0], [218,0]
  ],
  [167,158],
  [
    [167,412],[218,412],[276,412]
  ]
]
var myNewArray = [].concat.apply([], yx);

```

### array sort TD by [xPos, width]

```javascript
var w = [620,158,158,254,208,208,208,342,278,620]
// to gather by second value[no][yes] of each array item
var toGather = [
  [0,0,620],
  [0,167,158],[0,218,158],
  [158,167,254],
  [412,167,208],[412,218,208],[412,276,208],
  [0,330,342],
  [342,330,278],
  [0,672,620]
]
var toGather = [[0,620],[0,158],[0,158],[158,254],[412,208],[412,208],[412,208],[0,342],[342,278],[0,620]]
var gather = [[0,620],[[0,158],[0,158]],[158,254],[[412,208],[412,208],[412,208]],[0,342],[342,278],[0,620]]
[
  [0,620], // slice_1 *w620*
  [0,158],[0,158], // slice_2 w158
  [158,254], // slice_2 w254 wc412 (158 + 254)
  [412,208], [412,208], [412,208], // slice_2 w208 *wc620* (412 + 208)
  [0,342], // slice_3 w342
  [342,278], // slice_3 w620 (342 + 278)
  [0,620] // slice_4 w620
]

```

### group by following values

```javascript
// fn callback(arg*4) used on each array value
const follow = (acc, v, i, a) => {
  if (v === a[i - 1]) {
    acc[acc.length - 1].push(v)
  } else {
    acc.push(v === a[i + 1] ? [v] : v)
  }
  return acc
}

var array = [0, 0, 0, 158, 412, 412, 412, 0, 342, 0]
const followX = array.reduce(follow, [])

console.log(`followX: ${followX} `)

```

```javascript
// xywPosFolloww
0:Array(3) [0, 0, 620]
1:Array(2) [Array(3), Array(3)]
2:Object {curr: Array(3)}
3:Array(3) [Array(3), Array(3), Array(3)]
4:Object {curr: Array(3)}
5:Object {curr: Array(3)}
6:Array(3) [0, 672, 620]

Array(3) [0, 0, 620]

Array(2) [Array(3), Array(3)]
Array(3) [0, 167, 158]
Array(3) [0, 218, 158]

Object {curr: Array(3)}
Array(3) [158, 167, 254]

Array(3) [Array(3), Array(3), Array(3)]
Array(3) [412, 167, 208]
Array(3) [412, 218, 208]
Array(3) [412, 276, 208]

Object {curr: Array(3)}
{Array(3) [0, 330, 342]}
Object {curr: Array(3)}
{Array(3) [342, 330, 278]}

Array(3) [0, 672, 620]


```
## Solution pour filtrer les slice

- @see sortArray.js -> var arySlice to get index of array.obj[{…}] to cut slice. After cut slices into nested table (based on xywPosFolloww result ?)
