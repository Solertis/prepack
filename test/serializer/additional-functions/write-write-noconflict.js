// additional functions

global.a = "";
global.b = "";

function additional1() {
  global.a = "foo";
  var x = 5;
}

function additional2() {
  global.b = "bar";
  var y = 10;
}

inspect = function() {
  additional2();
  additional1();
  return global.a + global.b;
}
