function counter_class(init){
  var cnt = init || 0;

  return {
    show: function() { print(cnt); },
    up: function() { cnt++; return this; },
    down: function() { cnt--; return this; }
  };
}

function myclass(x, y) {
  return { show: function() { print(x, y); } };
}
