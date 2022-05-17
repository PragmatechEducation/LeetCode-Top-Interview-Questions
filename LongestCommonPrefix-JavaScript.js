//let strs = ["flower", "flow", "flight"];
//let strs = ["dog", "racecar", "car"];
//let strs = ["a"];
//let strs = ["ab", "a"];
//let strs = ["cir", "car"];
//let strs = ["", "cbc", "c", "ca"];
let strs = ["ca", "c", "bba", "bacb", "bcb"];

function longestCommonPrefix(strs) {
  let prefix = "";
  let say;
  let beraberOlmayan = 0;
  for (let i = 0; i < strs[0].length; i++) {
    say = 0;
    for (let j = 0; j < strs.length; j++) {
      if (strs[0][i] == strs[j][i]) {
        say++;
      } else {
        beraberOlmayan++;
      }
      if (say == strs.length && beraberOlmayan == 0) {
        prefix += strs[0][i];
      }
    }
  }
  if (prefix.length == 0) {
    // console.log('""');
    return "";
  } else {
    //console.log(prefix);
    return prefix;
  }
}
longestCommonPrefix(strs);
