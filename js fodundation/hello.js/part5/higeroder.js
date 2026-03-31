function fun() {
  console.log("alu ra valo pi");
}
function fun2(action) {
  action();
  action();
  action();
}

fun2(fun);

