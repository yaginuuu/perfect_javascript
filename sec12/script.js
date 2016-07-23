// class="foo"の最初のbutton要素がクリックされた時の処理を設定する
$('button.foo:first').click(function(){
  $('<div><a></a></div>')
    .find('a')
      .text('jQuery.com')
      .attr('href', 'http://jquery.com')
    .end()
    .appendTo('body')
})

// $(function(){
//   DOM構築後の処理
// })

// 要素の選択p315-p318

// 非同期処理を直列に記述, 実行するためのしくみ: deferred

// done()  : 状態resolvedになった場合に実行
// fail()  : 状態rejectedになった場合に実行
// then()  : 状態resolved, rejectedになった場合に実行
//           第1引数はresolved, 第2引数はrejected
// always(): 状態resolved, rejected両方で実行される

var foo = function(){
  var d = $.Deferred();
  setTimeout(function(){
    // rejected状態にする
    d.reject('foo');
  }, 500);
  return d.promise();
}

foo()
  .done(function(arg){
    console.log(arg + ' success 1');
  })
  .fail(function(arg){
    console.log(arg + ' failure 1');
  })
  .then(function(arg){
    console.log(arg + ' success 2');
  }), function(arg){
    console.log(arg + ' failure 2');
  })
  .always(function(arg){
    console.log(arg + ' complete 1');
  })
  .always(function(arg){
    console.log(arg + ' complete 2');
  })
// consoleに表示される結果
// foo failure 1
// foo failure 2
// foo complete 1
// foo complete 2


// pipe(): then()と基本的には同じだが,
//         引数の値の変更とdferredオブジェクトのチェーンができるようになる

// when(): 複数の非同期処理がすべて完了するまで後続の処理を遅延させることができる.
//         並列処理
