// chaneged var to let 
// when you use let you cannot override the variable
// var can become an error because it can easily become overwritten
// use strict mode to catch common coding mistakes and "unsafe" actions.


let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();