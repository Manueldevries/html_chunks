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

