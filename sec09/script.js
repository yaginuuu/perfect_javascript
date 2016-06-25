// getElementByTagName: タグ名を指定して要素を取得する
// createElement      : 要素を作成する
// appendChild        : 要素を挿入する

// IDはDOMツリーの中で一意でなくてはならない.

// ★ ノードの選択
// getElementById      : id名で検索
// getElementByTagName : タグ名による検索


// ★ SelectorsAPIの利用1
var a = document.querySelector('#foo')
var b = document.getElementById('foo')
alert(a === b)
var c = document.querySelectorAll('div')
var d = document.getElementsByTagName('div')
alert(c[0] === d[0])

// ★ SelectorsAPIの利用2
var elem = document.querySelector(
    'div#main > p.content:nth-of-type(4) > a[href^="http://example.com/"]'
    );
alert(elem.innerHTML);
