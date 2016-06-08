// 変数とオブジェクト

// イディオムの一種. 変数aが既に値(厳密にはtureになる値)を持っていれば使い, 持っていれば7を代入
var a = a || 7;
// 変数fooにオブジェクト(の参照)を代入
var foo = {};

// 5.1 2つの引数の値を交換できない例
function no_swap(a, b) {
  var tmp = a;
  a = b;
  b = tmp;
}
// >var one = 1;
// >var zero = 0;
// >no_swap(one, zero);
// >print(one, zero);
// 1 0

// 2つの引数の値を交換する関数(JS独自拡張を利用)
function swap(a, b) {
  return [a, b];
}
// >[one, zero] = swap(one, zero);
// >print(one, zero);
// 0 1

//
//
