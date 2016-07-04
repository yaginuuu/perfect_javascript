// class="foo"の最初のbutton要素がクリックされた時の処理を設定する
$('button.foo:first').click(function(){
  $('<div><a></a></div>')
    .find('a')
      .text('jQuery.com')
      .attr('href', 'http://jquery.com')
    .end()
    .appendTo('body')
})
