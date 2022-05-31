// let s = "()";
// let s = "{[]}";
//let s = "([)]";
//let s = "()[]{}";
//let s = "]";
// let s = "){";
// let s = "(}{)";
// let s = "{[]}";

// let s = "(){}}{";
function isValid(s) {
  let s1;
  let arr = s.split("");
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      (arr[i] == "(" && arr[i + 1] == ")") ||
      (arr[i] == "{" && arr[i + 1] == "}") ||
      (arr[i] == "[" && arr[i + 1] == "]")
    ) {
      arr.splice(i, 2);
      //  console.log(arr);
      s1 = arr.join("");
      if (s1.length == 0) {
        // console.log(true);
        return true;
      } else {
        return isValid(s1);
      }
    }
  }
  if (s.length >= arr.length) {
    // console.log(false);
    return false;
  }
}
isValid(s);
