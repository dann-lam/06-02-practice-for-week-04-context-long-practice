function bindToAnArg(func, arg) {
  // return func.bind(null, arg)
  return func.bind(func, arg)
}

// function iSpy(thing) {
//   return "I spy a " + thing;
// }

// let spyTree = bindToAnArg(iSpy, "tree");
// let spyCar = bindToAnArg(iSpy, "car");

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
