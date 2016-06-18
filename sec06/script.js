// 関数宣言文で宣言した関数は宣言より前に呼び出し可能
function doit() {
  fn();
  function fn(){ print('called'); }
}

// argumentsオブジェクトを使うと実引数にアクセスできる
// function fn(){
//   print(arguments.length);
//   print(arguments[0], arguments[1], arguments[2]);
// }

// 再帰関数(nの階乗)
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// 再帰関数には再帰処理を停止する条件判定(停止条件)が必須である.
// 停止条件は先頭に書くのが一般的である.

// 関数f内の最初のprintは一見, グローバル変数xを表示するように見えるが,
// このxは次行で宣言しているローカル変数xである.
// var x = 1
// function f(){
//   print('x = ' + x);
//   var x = 2;
//   print('x = ' + x);
// }
// >f();
// x = undefined
// x = 2

// ブロックスコープはない.
// JSの独自拡張にletがある. let宣言をした変数はブロックスコープである.
// function f(){
//   let x = 1;
//   print(x);
//   {
//     let x = 2;
//     print(x);
//   }
//     print(x);
// }
// >f();
// 1
// 2
// 3

// シャドーイング
// スコープの小さい同名の変数(や関数)でスコープの大きい名前を隠すことを指す.

// スコープチェーン
// callオブジェクトのプロパティの次にグローバルオブジェクトのプロパティの順で探す

// クロージャとは状態を持つ関数である.
// クロージャは入れ子の関数宣言が前提である.
// イディオムとして, 関数リテラル式をそのままretrun文に書くことが多い.

// クロージャの落とし穴として, 関数内に2つの関数宣言があると, 2つは同じcallオブジェクトを指すこと
// を頭に入れといたほうがいい.

// クロージャのメリット
// 1. 名前空間の汚染を防ぐ
// 2. 情報隠蔽が可能(関数スコープとクロージャを使えばアクセス制御が可能)

// 関数リテラルをその場で呼び出し, list_6_11がそれを参照する
// 関数リテラルの返り値は関数なので, 変数list_6_11は関数
var list_6_11 = (function() {
  // 関数の外部からこの名前にアクセスできない
  // 事実上プライベートな変数
  // 通常, 関数の呼び出しが終わればアクセス出来ない名前だが, 返り値の無名関数の中から使える.
  var position = { x: 2, y: 3 }

  // 同じく関数の外部からアクセスできないプライベート関数
  function sum_internal(a, b) {
    return Number(a) + Number(b)
  }

  return {
    sum: function(a, b) { return sum_internal(a, b); },
    x: position.x
  }
})()

// プロパティ(関数の場合)の呼び出しは関数呼び出しと同様に呼ばないとダメ.
// >var obj = counter_class(10)
// >obj.up().up().up().show()
// 13
function counter_class(init){
  // 初期値をパラメータで受け取る
  // デフォルトパラメータのイディオム
  var cnt = init || 0;

  // 必要であればここにプライベートな変数や関数を宣言

  return {
    // 公開メソッド
    // return thisはメソッドチェーンに便利
    show: function() { print(cnt); },
    up: function() { cnt++; return this; },
    down: function() { cnt--; return this; }
  };
}

function myclass(x, y) {
  return { show: function() { print(x, y); } };
}

// 式クロージャ(JS独自拡張)
// var sum = function(a, b) { return Number(a) + Number(b); }
// を
// var sum = function(a, b) Number(a) + Number(b);
// と省略可能

// コールバック
// JSはコールバックを多用する. 何故か...?
// 1. クライアントJSが基本的にイベントドリブンプログラミングである点
// 2. クライアントJSがマルチスレッドプログラミングができない点
//    並列処理の実現にコールバック＋非同期処理が利用される
// 3. 関数宣言式とクロージャがある点


