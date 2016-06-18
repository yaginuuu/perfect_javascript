// 配列の長さは明示的に変更可能
var arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven']
// >arr.length
// 3
// >arr.length = 2
// >print(arr)
// zero,one

// 配列の列挙
// インナーループ系のメソッドを使用
arr.forEach(function(element, index) { print(index + ': ' + element); })

// インデックス値の列挙=プロパティ名の列挙(for文)
for(var element in arr) { print(element); }


// ★ 配列のイディオム
// ソート
// >arr.sort();
// ["five", "four", "one", "seven", "six", "three", "two", "zero"]

// 文字列生成
var arr1 = []
arr1.push('<div>')
arr1.push(Date())
arr1.push('</div>')
print(arr1.join(' '))

var str = arr1.join(' ')
print(str.split(' '))

// 配列のコピー
// concatかsliceで実現できる
// deepコピー   : 完全なコピー
// shallowコピー: プロパティ値や要素値だけのコピーで, その先の参照先まではコピーしない
// concatとsliceはshallowコピー

// 配列要素の削除
// インデックス2番目から1つの要素を削除
arr.splice(2, 1)
// >["zero", "one", "three", "four", "five", "six", "seven"]

// フィルタ処理
// 配列を1つの対象ととらえて, そこに操作を施すとみなす.
// ある集合から別の集合を生み出す変換とも言える.
// map   : 要素の文字列長を新しい要素とする配列に変換
// filter: 要素の数値が偶数のものだけを抜き出す
// コードが簡潔になるので, 配列の要素を列挙するコードを書きたくなったらイテレータ系メソッドで
// 書き下せないか考えてみるべき.
//
// >arr.map(function(e) { return e.length; }).filter(function(e) { return e % 2 == 0; })
// [4, 4, 4]

// ★ イテレータ
// 繰り返し処理を抽象化していくと, 「次の処理に進む」という機能だけが必要になる.
// 「ものの集まりから次の要素を取り出す」と読み返しても良いかもしれない.
// Iteratorクラスのイディオムとしては「独自に作成したイテレータを使う」場合, 有用である.

// ★ ジェネレータ
function factorial_printer(max) {
  var cur = 1
  for (var n = 1; n <= max; n++) {
    cur *= n
    print('cur = ' + cur)
  }
}

// factorial_generatorを呼び出すとオブジェクトを返す.
// このオブジェクトをジェネレータイテレータと呼ぶ.
// ジェネレータイテレータに対して, nextメソッドを呼び出すとジェネレータの中のループが1回回る.
function factorial_generator(max) {
  var cur = 1;
  for (var n = 1; n <= max; n++) {
    cur *= n;
    yield(cur);
    print('cur = ' + cur);
  }
}
// ジェネレータイテレータは内部的にイテレータなので, nextメソッド呼び出しをfor inループに隠蔽できる.
// ジェネレータイテレータはfor in文で呼べる.
// >var g = factorial_generator(5)
// >for(var n in g) { print('n = ' + n); }
// n = 1
// cur = 1
// n = 2
// cur = 2
// n = 6
// cur = 6
// n = 24
// cur = 24
// n = 120
// cur = 120
// ジェネレータの直感的な理解はyieldで停止中の関数である.
// ジェネレータを呼び出した瞬間にはジェネレータ内の実行は一切行わない.
// nextメソッドの呼び出しで初めてジェネレータを実行し, yieldのあるところで停止する.

// ★ JSON
// JSONオブジェクトのプロパティ
// parse    : JSON文字列をパースしてJSオブジェクトを返す
// stringify: JSオブジェクトからJSON文字列に変換


// ★ 正規表現
// 正規表現オブジェクトの生成はリテラル表記を推奨.
// 正規表現オブジェクトで使用するメソッドはtestとexec
// グローバルマッチのフラグを指定
var reg = /^[0-9]/g
// >reg.test('foo')
// false
// >reg.test('123')
// true

// execメソッドの返り値はマッチの結果を示す配列
// 正規表現のグループ化の知識が必要である.

// 文字列オブジェクトに正規表現オブジェクトを引数にとるメソッドが幾つか存在する.
// match, replace, search, split

// strict mode
// use strict
