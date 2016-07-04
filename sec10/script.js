// HTML要素の属性に指定する(イベントハンドラ)
// ・onclickとすべて小文字の方がよい
// イベントハンドラ一覧: 267p
// イベントハンドラの返り値として, falseを返すとそのイベントのデフォルトの動作をキャンセルする

// DOM要素のプロパティに指定する(イベントハンドラ)
// ・HTML中のJSコードは控える(保守性担保)
// var btn = document.getElementById('foo')
// function sayFoo(){
//   alert('foo')
// }
//
// btn.onclick = sayFoo
//
// イベントハンドラに設定するものは関数そのものであることに注意する.
// 以下のように設定しても正しく動作しない.
// btn.onclick = sayFoo()
// btn.onclick = "sayFoo()"

// EventTarget.addEventListener()を利用する(イベントリスナ): 複数指定可能
// ・IE8以前では動作しない
// var btn = document.getElementById('foo')
// btn.addEventListener('click', function(e){
//   alert('foo')
// }, false)
//
// キャプチャリングフェーズとバブリングフェーズのどちらで実行するのかを第3引数で指定できる

// イベントの伝播
// キャプチャリングフェーズ
// ターゲットフェーズ
// バブリングフェーズ

// 標準イベント276p

