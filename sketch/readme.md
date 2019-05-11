

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

### TODO disect native fn reduce

```javascript
var array = [1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5, 6],
  grouped = array.reduce((r, v, i, a) => {
    if (v === a[i - 1]) {
      r[r.length - 1].push(v);
    } else {
      r.push(v === a[i + 1] ? [v] : v);
    }
    return r;
  }, []);

console.log(grouped);
// output
 [ [1, 1, 1, 1], [2, 2], [3, 3, 3], [5, 5], [6] ]

```
