'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var indent = exports.indent = function indent() {
  var nb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var char = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '  ';

  var sp = ['\n'];
  for (var i = 0; i < nb; i++) {
    sp.push(char);
  }return sp.join('');
};
// building nested obj
var followw = exports.followw = function followw(acc, curr, i, array) {
  if (array[i - 1] === undefined) {
    acc.push(curr[2] === array[i + 1][2] ? [curr] : curr);
  } else if (curr[2] === array[i - 1][2]) {
    acc[acc.length - 1].push(curr);
  } else {
    acc.push(curr[2] === array[i + 1][2] ? [curr] : curr);
  }
  return acc;
};
// depth of array
var max = exports.max = function max(a) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Array.isArray(a) ? max(maxDepth(a), count + 1) : count;
};

var maxDepth = exports.maxDepth = function maxDepth(a) {
  var maxVal = Number.MIN_VALUE;
  var item = void 0;

  a.forEach(function (val) {
    var depth = max(val);
    if (depth > maxVal) {
      maxVal = depth;
      item = val;
    }
  });

  return item;
};