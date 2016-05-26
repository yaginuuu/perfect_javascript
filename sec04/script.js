// ラベルを使ったジャンプ
outer_loop:
while (true) {
  print('outer loop');
  while (true) {
    print('inner loop');
    // continue文もラベルを指定できる
    break outer_loop;
  }
}

// 例外
// throwで例外をなげられる
// catch節の中に入ること: 例外の捕捉
// 呼び出し元の関数内のcatch節で補足されなければ,
// 捕捉されるまで上位の呼び出し元関数に戻っていく: 例外の伝播
// 最終的に例外が捕捉されなければ実行を中断する
try{
  print('1');
  null.x;
  print('not here');
}catch(3){
  print('2');
}finally{
  print('3');
}
