## algo décomposé

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
[
  [0,620], // slice_1 *w620*
  [0,158],[0,158], // slice_2 w158
  [158,254], // slice_2 w412 (158 + 254)
  [412,208], [412,208], [412,208], // slice_2 *w620* (412 + 208)
  [0,342], // slice_3 w342
  [342,278], // slice_3 w620 (342 + 278)
  [0,620] // slice_4 w620
]

```
