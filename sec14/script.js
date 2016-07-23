// HistoryAPI
// ハッシュフラグメント(URLの#以降の文字列)
// ハッシュフラグメントが書き換わってもページ遷移(サーバへのリクエスト)は発生しない.
// この仕組みを利用して, ハッシュフラグメントにページの状態をもつことで, アプリケーション
// 特定の状態に一意なURLを割り当て可能になる.

// ハッシュフラグメントの利用例
// 状態の保存
function gotoPage(num){
  // コンテンツを更新する
  updateContent(num);

  // ハッシュフラグメントに現在の状態を保存
  location.hash = '#!page=' + num;
}

// 状態の復元
window.onhashchange = function(){
  // ハッシュフラグメントから状態を取得
  var num = location.hash.match(/#!page=([0-9]+)/)[1];

  // コンテンツを更新する
  updateContent(num);
}

// historyオブジェクト: windowオブジェクトが持つプロパティで, 履歴情報の操作を担当
// popstateイベント   : ページ履歴を辿った時に発火するイベントで, popstateイベントを監視して
//                      ページの状態を復元する処理などを実装


// ApplicationCache
// キャッシュについての説明 => p352
// ApplicationCacheAPI
// キャッシュのタイミングを細かく設定できる
//
