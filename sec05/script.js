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

// グローバルオブジェクトにプロパティaが存在するのかの判定
if('a' in this){
  var b = a;
}else{
  var b = 7;
}
// ここで変数bを使える

// コンストラクタ代わりの関数での利用
function createobject() {
  return { x: 3, y: 2, z: 3,
    getDistance: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
  };
}

// コンストラクタ
// コンストラクタ名はアッパーキャメル命名
// new式で呼び出せる
// 暗黙に関数の最後にreturn thisがあるような動作をする
// クラス定義もどき
function MyClassA(x, y) {
  // フィールド相当
  this.x = x;
  this.y = y;
  // メソッド相当
  this.show = function(){
    print(this.x, this.y);
  }
}
// >var obj = new MyClass(3, 2);
// >obj.show();
// >3 2
// ① 全てのインスタンスが同じメソッド定義の実態をコピーを持つので
// 効率(メモリ効率と実行効率)がよくない => プロトタイプ継承
// ② プロパティ値のアクセス制御(privateやpublic)ができない => クロージャ

// 書籍「JavaScript: The Good Parts」から引用
// 数値から整数部分のみを取り出す処理
// このようにブランケット演算子を利用すると演算できる
// Math[this < 0 ? 'ceiling' : 'floor'](this)

// 不変オブジェクトの手法
// 1. プロパティ(状態)を隠し, 変更操作を提供しない
// 2. ES5の関数を活用する
// 3. Writable属性, Configurable属性, セッター, ゲッターを活用する

// クラス定義もどきをプロトタイプ継承を使って書き換えたのが以下
function MyClassB(x, y){
  this.x = x;
  this.y = y;
}
MyClassB.prototype.show = function(){
  print(this.x, this.y);
}


// TODO: プロトタイプチェーンの根本理解
// プロトタイプチェーンの具体例(プロパティ読み込み)
// プロパティ書き込みと削除はプロトタイプチェーンをたどらない
function MyClassC() {
  this.x = 'x in MyClassC';
}
MyClassC.prototype.y = 'y in MyClassC.prototype'
var obj = new MyClassC()
var obj2 = new MyClassC()

// ★ プロトタイプチェーンとはなにか？
// 参照(http://maeharin.hatenablog.com/entry/20130215/javascript_prototype_chain)
var C = function (name) {
    this.name = name;
};
C.prototype.x ='xxx';

var c1 = new C('hoge');
var c2 = new C('fuge');
C.prototype.y = 'yyy';
C.prototype = {z: 'zzz'};

var c3 = new C('piyo');
//c1.x //xxx
//c2.x //xxx
//c3.x //undefined
//
//c1.z //undefined
//c2.z //undefined
//c3.z //zzz
//
//c1.constructor === C //true
//c2.constructor === C //true
//c3.constructor === C //false
//
//c1.constructor === Object //false
//c2.constructor === Object //false
//c3.constructor === Object //true


// createメソッド
// function MyClassD() {}
// var Proto = { x: 2, y: 3 }
// MyClassD.prototype = Protovar obj = new MyClassD()
// と等価なコードが以下
// var Proto = { x: 2, y: 3 }
// var obj = Object.create(Proto)


// クロージャとアクセッサの組み合わせ
function createObject() {
  var _x = 0;

  return {
    get x() { return _x },
    set x(v) { _x = v }
  }
}
// _xはprivateの変数であるという意思表示の命名
// TODO: オブジェクト生成はnew？リテラル？

// オブジェクトの互換性を保つためのコード
// if (!String.prototype.trim) {
//   String.prototype.trim = function () {
//     return String(this).replace(/^\s+|\s+$/g, '')
//   }
// }
