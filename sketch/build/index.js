'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _function = require('./function');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var array = [{ name: 's1', xPos: 0, yPos: 0, width: 620, height: 167 }, { name: 's2c1s1', xPos: 0, yPos: 167, width: 158, height: 51 }, { name: 's2c1s2', xPos: 0, yPos: 218, width: 158, height: 112 }, { name: 's2c2', xPos: 158, yPos: 167, width: 254, height: 163 }, { name: 's2c3s1', xPos: 412, yPos: 167, width: 208, height: 51 }, { name: 's2c3s2', xPos: 412, yPos: 218, width: 208, height: 58 }, { name: 's2c3s3', xPos: 412, yPos: 276, width: 208, height: 54 }, { name: 's3c1', xPos: 0, yPos: 330, width: 342, height: 102 }, { name: 's3c2', xPos: 342, yPos: 330, width: 278, height: 102 }, { name: 's4', xPos: 0, yPos: 672, width: 620 }, { name: 's5c1s1', xPos: 0, yPos: 682, width: 158, height: 51 }, { name: 's5c1s2', xPos: 0, yPos: 733, width: 158, height: 112 }, { name: 's5c2', xPos: 158, yPos: 682, width: 254, height: 163 }, { name: 's5c3s1', xPos: 412, yPos: 682, width: 208, height: 51 }, { name: 's5c3s2', xPos: 412, yPos: 733, width: 208, height: 58 }, { name: 's5c3s3', xPos: 412, yPos: 791, width: 208, height: 54 }];

var newAry = array.map(function (clone) {
  return _extends({}, clone);
});
var xywPosAry = array.map(function (item) {
  return [item.xPos, item.yPos, item.width];
});
var xywPosFolloww = xywPosAry.reduce(_function.followw, []);

var memo = 0;
var aryMemo = [];
var arySlice = [];

xywPosFolloww.map(function (i) {
  i[2] === 620 ? (memo = 0, arySlice.push(i)) : i[0][2] ? memo < 620 ? (memo += i[0][2], aryMemo.push(i), memo == 620 ? (memo = 0, arySlice.push(aryMemo), aryMemo = []) : 'null') : (memo = 0, arySlice.push(aryMemo), aryMemo = []) : memo < 620 ? (memo += i[2], aryMemo.push(i), memo == 620 ? (memo = 0, arySlice.push(aryMemo), aryMemo = []) : 'null') : (memo = 0, arySlice.push(aryMemo), aryMemo = []);
});

// test profondeur tableaux
var s = function s(a) {
  var _console;

  return (_console = console).log.apply(_console, _toConsumableArray(a));
}; // s(arySlice)

arySlice.forEach(function (element, i) {
  console.log(s(element));
  console.log('max:', (0, _function.max)(element));
  console.log('table.' + i + (0, _function.indent)(1) + 'tr' + (0, _function.indent)(2) + 'td');
});
console.log('firstline' + (0, _function.indent)(1) + 'secondline' + (0, _function.indent)(2) + 'three');