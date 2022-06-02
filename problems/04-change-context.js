function changeContext(func, obj) {
  // func.call(obj)

  // return above if you want to invoke it immediately
  let name = func.bind(obj);
  return name();
  //Bind variant being invoked to get name.
}

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// function extractName() {
//   return this.name;
// }

// const kristen = new Person("Kristen");
// console.log(changeContext(extractName, kristen));

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
